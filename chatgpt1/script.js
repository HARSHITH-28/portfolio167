(() => {
  'use strict';

  const DATA = window.PORTFOLIO_DATA;
  if (!DATA) {
    console.error('Portfolio data not found. Ensure data.js is loaded before script.js.');
    return;
  }

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
  const projectById = id => DATA.projects.find(project => project.id === id);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let toastTimeout;

  function notify(message) {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 3200);
  }

  // Scroll reveal, observing new elements after filtering.
  const revealObserver = ('IntersectionObserver' in window) && !reducedMotion.matches
    ? new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      }), { threshold: 0.07, rootMargin: '0px 0px -25px 0px' })
    : null;

  function observeReveals(root = document) {
    $$('.reveal', root).forEach(element => {
      if (!revealObserver) element.classList.add('is-visible');
      else revealObserver.observe(element);
    });
  }

  // Small but real project explorer: filtering, case studies, and link states.
  const projectGrid = $('#projectsGrid');
  const dialog = $('#projectDialog');
  let lastDialogTrigger = null;

  function renderProjects(filter = 'all') {
    const visible = DATA.projects.filter(project => filter === 'all' || project.types.includes(filter));
    projectGrid.innerHTML = visible.map((project, index) => `
      <article class="project-card reveal ${index === 0 ? 'featured' : (index === visible.length - 1 && visible.length % 2 === 0 ? 'closing' : '')}" data-project="${escapeHTML(project.id)}">
        <div class="project-image-wrap">
          <span class="project-index">PROJECT / ${escapeHTML(project.number)}</span>
          <img class="project-image" src="${escapeHTML(project.image)}" alt="${escapeHTML(project.alt)}" loading="eager" width="920" height="620" />
        </div>
        <div class="project-info">
          <span class="project-category">${escapeHTML(project.category)} &nbsp;·&nbsp; ${escapeHTML(project.year)}</span>
          <h3 class="project-title">${escapeHTML(project.title)}</h3>
          <p class="project-subtitle">${escapeHTML(project.subtitle)}</p>
          <p class="project-synopsis">${escapeHTML(project.synopsis)}</p>
          <div class="tech-tags">${project.tech.slice(0, 5).map(tag => `<span>${escapeHTML(tag)}</span>`).join('')}</div>
          <div class="project-actions">
            <button class="project-detail-button" type="button" data-open-project="${escapeHTML(project.id)}" aria-label="Read case study for ${escapeHTML(project.title)}">Explore case study <span class="circled-arrow" aria-hidden="true">↗</span></button>
            ${project.repoUrl ? `<a class="project-link-status" href="${escapeHTML(project.repoUrl)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">VIEW GITHUB REPO ↗</a>` : `<span class="project-link-status">CASE STUDY READY</span>`}
          </div>
        </div>
      </article>
    `).join('');
    observeReveals(projectGrid);
  }

  $$('.filter-chip').forEach(button => button.addEventListener('click', () => {
    $$('.filter-chip').forEach(chip => {
      chip.classList.toggle('active', chip === button);
      chip.setAttribute('aria-pressed', String(chip === button));
    });
    renderProjects(button.dataset.filter);
  }));

  function safeURL(raw) {
    if (!raw) return null;
    try {
      const url = new URL(raw);
      return url.protocol === 'https:' ? url.href : null;
    } catch {
      return null;
    }
  }

  function projectLink(url, type) {
    const usable = safeURL(url);
    if (!usable) return `<span class="dialog-link disabled" aria-disabled="true" title="Add the ${type} URL in data.js">${type} · link pending ↗</span>`;
    return `<a class="dialog-link" href="${escapeHTML(usable)}" target="_blank" rel="noopener noreferrer">View ${type} ↗</a>`;
  }

  function openProject(id, trigger) {
    const project = projectById(id);
    if (!project) return;
    lastDialogTrigger = trigger;
    $('#dialogContent').innerHTML = `
      <div class="dialog-hero">
        <div class="dialog-hero-copy">
          <span class="project-category">PROJECT / ${escapeHTML(project.number)} &nbsp; · &nbsp; ${escapeHTML(project.category)}</span>
          <h2 id="dialogTitle">${escapeHTML(project.title)}</h2>
          <p>${escapeHTML(project.subtitle)}</p>
          <span class="project-category">${escapeHTML(project.year)}</span>
        </div>
        <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.alt)}" width="920" height="620" />
      </div>
      <div class="dialog-case">
        <div class="dialog-case-top"><span>BEHIND THE BUILD / PROJECT ${escapeHTML(project.number)}</span><span>DESIGN · DEVELOPMENT · ENGINEERING</span></div>
        <div class="dialog-case-grid">
          <section class="dialog-case-section"><h3>01 / The challenge</h3><p>${escapeHTML(project.problem)}</p></section>
          <section class="dialog-case-section"><h3>02 / The approach</h3><p>${escapeHTML(project.approach)}</p></section>
          <section class="dialog-case-section dialog-case-wide"><h3>03 / My contribution</h3><p>${escapeHTML(project.contribution)}</p></section>
          <section class="dialog-case-section dialog-case-wide"><h3>04 / Key components</h3><ul class="dialog-highlights">${project.highlights.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul></section>
          <section class="dialog-case-section dialog-case-wide"><h3>05 / Tech stack</h3><div class="dialog-tags">${project.tech.map(item => `<span>${escapeHTML(item)}</span>`).join('')}</div></section>
        </div>
        <div class="dialog-action-row">
          ${projectLink(project.repoUrl, 'Repository')}
          ${projectLink(project.liveUrl, 'Live demo')}
          ${(!project.repoUrl && !project.liveUrl) ? '<small>Repository and live links can be configured in <code>data.js</code>.</small>' : ''}
        </div>
      </div>`;
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      document.body.classList.add('dialog-open');
    } else {
      notify('This browser does not support the project detail dialog.');
    }
  }

  projectGrid.addEventListener('click', event => {
    const button = event.target.closest('[data-open-project]');
    if (button) openProject(button.dataset.openProject, button);
  });

  function closeDialog() { if (dialog.open) dialog.close(); }
  $('#dialogClose').addEventListener('click', closeDialog);
  dialog.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    lastDialogTrigger?.focus({ preventScroll: true });
  });

  // A schematic grounded in each project's real technical architecture.
  let selectedProject = DATA.projects[0];
  let selectedStage = 0;
  const switcher = $('#systemSwitcher');
  const pipelineTrack = $('#pipelineTrack');

  function renderSwitcher() {
    switcher.innerHTML = DATA.projects.map(project => `
      <button type="button" class="system-choice ${project.id === selectedProject.id ? 'active' : ''}"
        data-system="${escapeHTML(project.id)}" aria-pressed="${project.id === selectedProject.id}">
        <span>${escapeHTML(project.number)}</span> ${escapeHTML(project.title)}
      </button>`).join('');
  }

  function renderPipeline() {
    $('#pipelineTitle').textContent = selectedProject.title;
    $('#pipelineCategory').textContent = selectedProject.category;
    $('.pipeline-version').textContent = `BUILD / ${selectedProject.number.padStart(3, '0')}`;
    pipelineTrack.innerHTML = selectedProject.pipeline.map((stage, index) => `
      <button type="button" class="pipeline-step ${index === selectedStage ? 'active' : ''}"
        data-step="${index}" aria-pressed="${index === selectedStage}" aria-label="Inspect stage ${index + 1}: ${escapeHTML(stage.title)}">
        <span class="step-index">0${index + 1} / STEP</span>
        <strong>${escapeHTML(stage.title)}</strong>
        <small>${escapeHTML(stage.subtitle)}</small>
      </button>`).join('');
    const step = selectedProject.pipeline[selectedStage];
    $('#pipelineDetail').innerHTML = `<span class="detail-icon" aria-hidden="true">↗</span><div><strong>STAGE 0${selectedStage + 1} / ${escapeHTML(step.title)}</strong><p>${escapeHTML(step.description)}</p></div>`;
  }

  switcher.addEventListener('click', event => {
    const button = event.target.closest('[data-system]');
    if (!button) return;
    selectedProject = projectById(button.dataset.system);
    selectedStage = 0;
    renderSwitcher();
    renderPipeline();
  });
  pipelineTrack.addEventListener('click', event => {
    const button = event.target.closest('[data-step]');
    if (!button) return;
    selectedStage = Number(button.dataset.step);
    renderPipeline();
  });

  // Accessible, keyboard-friendly category tabs for skills.
  const stackMenu = $('#stackMenu');
  let selectedSkills = 0;
  function renderSkills() {
    stackMenu.innerHTML = DATA.skills.map((group, index) => `
      <button class="stack-menu-button ${selectedSkills === index ? 'active' : ''}"
        role="tab" id="skillTab${index}" aria-controls="skillList" type="button"
        data-skill="${index}" tabindex="${selectedSkills === index ? 0 : -1}"
        aria-selected="${selectedSkills === index}">${escapeHTML(group.short)}<span>0${index + 1}</span></button>`).join('');
    const current = DATA.skills[selectedSkills];
    $('#stackNumber').textContent = `0${selectedSkills + 1} / 0${DATA.skills.length}`;
    $('#stackTitle').textContent = current.title;
    $('#skillList').setAttribute('role', 'tabpanel');
    $('#skillList').setAttribute('aria-labelledby', `skillTab${selectedSkills}`);
    $('#skillList').innerHTML = current.skills.map((skill, index) => `<span class="skill-pill" style="animation-delay:${index * 37}ms">${escapeHTML(skill)}</span>`).join('');
  }
  stackMenu.addEventListener('click', event => {
    const tab = event.target.closest('[data-skill]');
    if (!tab) return;
    selectedSkills = Number(tab.dataset.skill);
    renderSkills();
    $(`#skillTab${selectedSkills}`).focus({ preventScroll: true });
  });
  stackMenu.addEventListener('keydown', event => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    selectedSkills = event.key === 'Home' ? 0 : event.key === 'End' ? DATA.skills.length - 1
      : (selectedSkills + (event.key === 'ArrowDown' ? 1 : -1) + DATA.skills.length) % DATA.skills.length;
    renderSkills();
    $(`#skillTab${selectedSkills}`).focus({ preventScroll: true });
  });

  // Navigation: menu, sections, and scroll indicator.
  const header = $('#siteHeader');
  const menuToggle = $('#menuToggle');
  const mobileMenu = $('#mobileMenu');
  function setMenu(isOpen) {
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    mobileMenu.classList.toggle('open', isOpen);
    mobileMenu.inert = !isOpen;
    document.body.classList.toggle('menu-open', isOpen);
  }
  menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  $$('#mobileMenu a').forEach(anchor => anchor.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !dialog.open) setMenu(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 960) setMenu(false); }, { passive: true });

  const navSections = ['about', 'work', 'process', 'experience'];
  let scrollFrame = null;
  function scrollUpdate() {
    header.classList.toggle('scrolled', window.scrollY > 30);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    $('#pageProgress').style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    const current = navSections.filter(id => {
      const section = document.getElementById(id);
      return section && section.getBoundingClientRect().top <= 180;
    }).pop();
    $$('.desktop-nav a').forEach(link => link.classList.toggle('active', link.dataset.nav === current));
    scrollFrame = null;
  }
  window.addEventListener('scroll', () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(scrollUpdate); }, { passive: true });
  scrollUpdate();

  // The location shown in the copy is Bengaluru; clock is explicitly Asia/Kolkata.
  function updateClock() {
    $('#localClock').textContent = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false
    }).format(new Date()) + ' IST';
  }
  updateClock();
  setInterval(updateClock, 60_000);
  $('#year').textContent = new Date().getFullYear();

  // Copy-to-clipboard with a fallback; no fake success notification.
  $('#copyEmail').addEventListener('click', async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(DATA.email);
        notify('Email address copied to clipboard.');
        return;
      }
      throw new Error('Clipboard API unavailable');
    } catch {
      const ta = document.createElement('textarea');
      ta.value = DATA.email;
      ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      notify(ok ? 'Email address copied to clipboard.' : 'Email: ' + DATA.email);
    }
  });

  // Contact form opens a draft in the visitor's mail app; no unconfigured server.
  $('#contactForm').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const name = $('#senderName').value.trim();
    const email = $('#senderEmail').value.trim();
    const message = $('#senderMessage').value.trim();
    if (!name || !email || !message) return;
    const subject = `Portfolio hello from ${name}`;
    const body = `${message}\n\n—\nFrom: ${name}\nReply to: ${email}`;
    window.location.href = `mailto:${DATA.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    notify('Opening your email app. Send the draft there to reach me.');
  });

  // An extremely subtle pointer-following glow, not a cursor replacement.
  const cursor = $('#cursorGlow');
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (canHover && !reducedMotion.matches) {
    let mouseX = -300, mouseY = -300, currentX = -300, currentY = -300;
    document.addEventListener('pointermove', event => {
      mouseX = event.clientX; mouseY = event.clientY;
      cursor.style.opacity = '1';
    }, { passive: true });
    function animateCursor() {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;
      requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);
    document.addEventListener('pointerleave', () => { cursor.style.opacity = '0'; });
  }

  renderProjects();
  renderSwitcher();
  renderPipeline();
  renderSkills();
  observeReveals();
})();
