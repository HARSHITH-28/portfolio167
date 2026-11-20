/* Original, dependency-free interactions for Ranjitha S's portfolio.
   Content assembled from the two user-provided resumes. */
'use strict';

const PROJECTS = [
  {
    title: 'MoodSync-AI', short: 'MOODSYNC / 01', tag: 'AI / FULL-STACK',
    summary: 'An AI-powered emotion detection and music recommendation experience that turns webcam facial expressions into personalized music suggestions.',
    problem: 'Connect facial emotion recognition with a practical, engaging music recommendation interface instead of stopping at a model prediction.',
    approach: 'Capture webcam frames in React, use OpenCV-based image processing and a TensorFlow/Keras model, and serve emotion predictions and recommendations through FastAPI REST endpoints.',
    innovation: 'Built REST APIs for prediction and recommendation; integrated model inference and webcam capture with the frontend; deployed the application as separate frontend and backend services.',
    role: 'Full-stack and machine-learning application development. The resume describes contributions across React, FastAPI, OpenCV and TensorFlow/Keras.',
    tech: ['React.js','FastAPI','Python','TensorFlow / Keras','OpenCV','REST APIs'],
    art: 'assets/project-moodsync.svg',
    artAlt: 'Abstract diagram with facial-emotion detection connected to a recommendation output',
    repo: null, artMicro: 'THE FEATURED BUILD'
  },
  {
    title: 'CampusAR', short: 'CAMPUS AR / 02', tag: 'FULL-STACK / SPATIAL',
    summary: 'A campus navigation system combining indoor and outdoor routes, GPS positioning, spatial data, and augmented-reality guidance.',
    problem: 'Make it easier to navigate complex campus spaces, including the difficult handoff between outdoor GPS routing and indoor locations.',
    approach: 'Modeled campus paths as navigation graphs, generated routes using shortest-path algorithms, and built Node.js REST APIs backed by PostgreSQL/PostGIS.',
    innovation: 'Combined GPS position updates, QR-based indoor relocalization, WebSocket communication, and AR directional guidance; organized the backend into API, application, domain, and data-access layers.',
    role: 'Full-stack project development, including routing logic, location-aware features and backend API architecture, as described in the resume.',
    tech: ['React','TypeScript','Node.js','PostgreSQL','PostGIS','WebSockets','REST APIs'],
    art: 'assets/project-campusar.svg',
    artAlt: 'Stylized campus graph with an illuminated path and AR destination marker',
    repo: null, artMicro: 'NAVIGATION, REIMAGINED'
  },
  {
    title: 'Sign Language Interpreter', short: 'SIGN LANGUAGE / 03', tag: 'AI / ACCESSIBILITY',
    summary: 'A real-time sign-language gesture recognition system designed to translate webcam hand gestures into readable alphabet characters.',
    problem: 'Use accessible computer-vision technology to help translate signed alphabet gestures into text on a screen.',
    approach: 'Process live webcam input with OpenCV; use hand detection and landmark extraction with MediaPipe and a TensorFlow/Keras CNN-based classification pipeline described in the project resume.',
    innovation: 'Prepared and preprocessed gesture datasets, trained and evaluated models, integrated live webcam inference, and worked on prediction performance.',
    role: 'Dataset preparation, preprocessing, model training, live webcam integration and optimization are explicitly noted in the academic resume; this was a four-person team project.',
    tech: ['Python','OpenCV','MediaPipe','TensorFlow / Keras','CNN','NumPy'],
    art: 'assets/project-sign.svg',
    artAlt: 'Hand outline with computer vision landmarks and a predicted letter',
    repo: 'https://github.com/PraveenKumarM17/Gesture', artMicro: 'BUILDING FOR ACCESSIBILITY'
  },
  {
    title: 'Events Management System', short: 'EVENTS / 04', tag: 'FRONTEND / PRODUCT',
    summary: 'A responsive event-management interface for students and organizers, built with React, JavaScript, HTML and CSS.',
    problem: 'Make it easy for students and event organizers to access and interact with event information in a clear, responsive interface.',
    approach: 'Developed the frontend using React.js, HTML, CSS and JavaScript; integrated event-related APIs and collaborated with the backend team via GitHub.',
    innovation: 'Implemented responsive pages and coordinated frontend-backend integration for a smooth event-browsing experience.',
    role: 'Frontend developer. Worked on the user interface, responsive behavior, API integration, and team collaboration. The academic resume notes a four-person team.',
    tech: ['React.js','JavaScript','HTML5','CSS3','API Integration','GitHub'],
    art: 'assets/project-events.svg',
    artAlt: 'Stylized event-management calendar and application dashboard',
    repo: 'https://github.com/ssarveshr/DBMS-project-', artMicro: 'DESIGN MEETS FUNCTION'
  }
];

const STAGES = [
  {label:'01 / CAPTURE',number:'STAGE_01 / INPUT',title:'Start with a human moment.',description:'The React interface captures a webcam frame as the starting point for detecting facial emotion.',code:['CAMERA_SOURCE: ACTIVE','FRAME: IMAGE CAPTURE','STATUS: RECEIVED']},
  {label:'02 / PREPROCESS',number:'STAGE_02 / VISION',title:'Turn pixels into a signal.',description:'OpenCV processes the captured frame and prepares the image for emotion recognition by the trained model.',code:['ENGINE: OPENCV','PREPROCESS: APPLIED','IMAGE: READY']},
  {label:'03 / PREDICT',number:'STAGE_03 / INFERENCE',title:'Let the model interpret.',description:'A TensorFlow/Keras-based model infers an emotion category from the processed visual input.',code:['MODEL: TENSORFLOW','TASK: EMOTION CLASSIFY','OUTPUT: CATEGORY']},
  {label:'04 / RECOMMEND',number:'STAGE_04 / SERVICE',title:'Turn insight into a suggestion.',description:'FastAPI endpoints connect prediction results with music recommendation logic, returning data to the frontend.',code:['SERVICE: FASTAPI','API: REST RESPONSE','MUSIC: RECOMMENDED']},
  {label:'05 / EXPERIENCE',number:'STAGE_05 / OUTPUT',title:'Make the result feel useful.',description:'The React interface displays emotion-aware recommendations as a user-facing, responsive product experience.',code:['CLIENT: REACT','RESPONSE: RENDERED','STATE: COMPLETE']}
];

const SKILLS = [
  {label:'01 / PROGRAMMING LANGUAGES',title:'The building blocks.',description:'Languages I use to solve problems, write applications and explore new ideas.',icon:'{ }',skills:['Python','JavaScript','C++','Java','C','C#']},
  {label:'02 / WEB & BACKEND',title:'Experience, end to end.',description:'Technologies for turning frontend interfaces and API contracts into integrated applications.',icon:'↗',skills:['React.js','TypeScript','HTML5','CSS3','FastAPI','Node.js','REST APIs','ASP.NET Core Web API']},
  {label:'03 / AI & DATA',title:'Seeing the patterns.',description:'Frameworks and data tools used across learning and computer-vision application work.',icon:'✺',skills:['OpenCV','TensorFlow / Keras','NumPy','Pandas','Matplotlib','Machine Learning','EDA','CNN']},
  {label:'04 / ENGINEERING',title:'Think in systems.',description:'Foundations and infrastructure concepts supporting maintainable, dependable software.',icon:'⌘',skills:['Data Structures','Algorithms','OOP','DBMS','MySQL','PostgreSQL','PostGIS','Git','GitHub','Microservices fundamentals','Event-driven architecture fundamentals']},
  {label:'05 / COLLABORATION',title:'Build with people.',description:'The practices and strengths that make team-based work more thoughtful and effective.',icon:'✳',skills:['Team coordination','Problem solving','Leadership','Critical thinking','Communication','Time management','Presentation skills','Creative thinking']}
];

const $ = (id) => document.getElementById(id);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const setText = (id,text) => { const node=$(id); if(node) node.textContent=text; };
let projectIndex = 0;
let demoIndex = 0;
let demoTimer = null;

// Opening transition. It never blocks interactivity for users who prefer reduced motion.
function initIntro(){
  const loader=$('preloader');
  if(reducedMotion){loader.classList.add('done');return;}
  const started=performance.now(),duration=1250;
  const tick=(now)=>{
    const pct=Math.min(100,Math.floor(((now-started)/duration)*100));
    setText('loadPercent',String(pct).padStart(2,'0')+'%');
    $('preloaderBar').style.width=pct+'%';
    if(pct<100) requestAnimationFrame(tick); else window.setTimeout(()=>loader.classList.add('done'),280);
  };
  requestAnimationFrame(tick);
}

function initRole(){
  const roles=['SOFTWARE DEVELOPER','FULL-STACK BUILDER','COMPUTER VISION EXPLORER','AI / ML ENTHUSIAST'];
  let i=0;const el=$('rotatingRole');
  if(!reducedMotion) window.setInterval(()=>{i=(i+1)%roles.length;el.style.opacity='0';window.setTimeout(()=>{el.textContent=roles[i];el.style.opacity='1';},190);},3250);
  el.style.transition='opacity .2s';
}

function updateClock(){
  try {const t=new Intl.DateTimeFormat('en-IN',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date());setText('localTime',`BENGALURU ${t} IST`);}catch(_){setText('localTime','BENGALURU · IST');}
}

function initHeader(){
  const header=$('siteHeader'), menu=$('menuToggle'), nav=$('mobileNav');
  const closeMenu=()=>{nav.classList.remove('open');nav.inert=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu');document.body.classList.remove('menu-open');};
  menu.addEventListener('click',()=>{
    const opened=menu.getAttribute('aria-expanded')==='true';
    if(opened){closeMenu();return;}
    nav.inert=false;nav.classList.add('open');menu.setAttribute('aria-expanded','true');menu.setAttribute('aria-label','Close menu');document.body.classList.add('menu-open');
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open'))closeMenu();});
  document.addEventListener('click',e=>{if(nav.classList.contains('open')&&!header.contains(e.target))closeMenu();});
  let last=0;
  const onScroll=()=>{
    const y=window.scrollY, max=document.documentElement.scrollHeight-innerHeight;
    $('scrollProgress').style.width=(max>0?100*y/max:0)+'%';
    if(y>200 && y>last+5&&!nav.classList.contains('open'))header.classList.add('nav-hidden');
    else if(y<last-5||y<120)header.classList.remove('nav-hidden');
    last=y;
  };
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  const links=[...document.querySelectorAll('.desktop-nav a')];
  const sections=[...document.querySelectorAll('main section[id]')];
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.dataset.nav===entry.target.id));});
  },{rootMargin:'-30% 0px -55% 0px'});
  sections.forEach(s=>observer.observe(s));
}

function initReveal(){
  if(reducedMotion){document.querySelectorAll('.reveal').forEach(n=>n.classList.add('visible'));return;}
  const obs=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('visible');obs.unobserve(entry.target);}}},{threshold:.08,rootMargin:'0px 0px -25px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

function updateDemo(index){
  demoIndex=(index+STAGES.length)%STAGES.length;
  const item=STAGES[demoIndex];
  document.querySelectorAll('.stage-button').forEach((b,i)=>{b.classList.toggle('active',i===demoIndex);b.setAttribute('aria-pressed',String(i===demoIndex));});
  setText('stageNumber',item.number);setText('stageLabel',item.label);setText('stageTitle',item.title);setText('stageDescription',item.description);
  $('labGraphic').dataset.stage=String(demoIndex);
  const code=$('labGraphic').querySelector('.graphic-code');
  code.replaceChildren();
  for (const [i,line] of item.code.entries()){
    const [k,v]=line.split(': ');code.append(document.createTextNode(k+': '));
    const s=document.createElement('span');s.textContent=v;code.append(s);
    if(i<item.code.length-1)code.append(document.createElement('br'));
  }
  const indicators=[...$('stageNumber').parentElement.querySelectorAll('span')].find(n=>n!==$('stageNumber'));
  if(indicators){indicators.textContent='● '.repeat(demoIndex+1)+'○ '.repeat(STAGES.length-1-demoIndex);}
}
function stopDemo(){window.clearInterval(demoTimer);demoTimer=null;$('playDemo').innerHTML='▶ <span>Play flow</span>';}
function initDemo(){
  document.querySelectorAll('.stage-button').forEach(b=>b.addEventListener('click',()=>{stopDemo();updateDemo(Number(b.dataset.stage));}));
  $('nextDemo').addEventListener('click',()=>{stopDemo();updateDemo(demoIndex+1);});
  $('resetDemo').addEventListener('click',()=>{stopDemo();updateDemo(0);});
  $('playDemo').addEventListener('click',()=>{
    if(demoTimer){stopDemo();return;}
    updateDemo(0);$('playDemo').innerHTML='Ⅱ <span>Pause</span>';
    demoTimer=window.setInterval(()=>{if(demoIndex===STAGES.length-1){stopDemo();return;}updateDemo(demoIndex+1);},1700);
  });
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stopDemo();});
  updateDemo(0);
}

function renderProject(index){
  projectIndex=(index+PROJECTS.length)%PROJECTS.length;
  const p=PROJECTS[projectIndex];
  document.querySelectorAll('.project-index-item').forEach((b,i)=>{b.classList.toggle('active',i===projectIndex);b.setAttribute('aria-pressed',String(i===projectIndex));});
  setText('projectTag',p.tag);setText('projectCounter',String(projectIndex+1).padStart(2,'0')+' — 04');
  const art=$('projectArt');art.src=p.art;art.alt=p.artAlt;
  setText('projectArtName',p.short);setText('projectArtMicro',p.artMicro);
  setText('projectTitle',p.title);setText('projectSummary',p.summary);
  setText('projectProblem',p.problem);setText('projectApproach',p.approach);setText('projectPosition',String(projectIndex+1).padStart(2,'0'));
  const tech=$('projectTech');tech.replaceChildren();p.tech.slice(0,5).forEach(name=>{let span=document.createElement('span');span.textContent=name.toUpperCase();tech.append(span);});
  const repo=$('projectRepo');repo.href=p.repo||'https://github.com/PraveenKumarM17/Gesture';
  repo.textContent=p.repo?'View resume-linked repository ↗':'Browse GitHub (repo link pending) ↗';
  repo.classList.toggle('is-unavailable',!p.repo);
}
function renderCase(){
  const p=PROJECTS[projectIndex];
  setText('caseMeta','CASE STUDY / '+String(projectIndex+1).padStart(2,'0')+' OF 04');
  setText('caseTitle',p.title);setText('caseSummary',p.summary);setText('caseProblem',p.problem);setText('caseApproach',p.approach);
  setText('caseInnovation',p.innovation);setText('caseRole',p.role);
  const im=$('caseArt');im.src=p.art;im.alt=p.artAlt;
  const tech=$('caseTech');tech.replaceChildren();p.tech.forEach(name=>{const span=document.createElement('span');span.textContent=name.toUpperCase();tech.append(span);});
  const repo=$('caseRepo');repo.href=p.repo||'https://github.com/PraveenKumarM17/Gesture';repo.textContent=p.repo?'VIEW RESUME-LINKED REPOSITORY ↗':'GITHUB PROFILE · REPO LINK PENDING ↗';repo.classList.toggle('is-unavailable',!p.repo);
}
function initProjects(){
  document.querySelectorAll('.project-index-item').forEach(b=>b.addEventListener('click',()=>renderProject(Number(b.dataset.project))));
  $('prevProject').addEventListener('click',()=>renderProject(projectIndex-1));
  $('nextProject').addEventListener('click',()=>renderProject(projectIndex+1));
  $('openCaseStudy').addEventListener('click',()=>{renderCase();$('caseDialog').showModal();document.body.classList.add('dialog-open');});
  $('closeCaseDialog').addEventListener('click',()=>$('caseDialog').close());
  $('caseDialog').addEventListener('close',()=>document.body.classList.remove('dialog-open'));
  $('caseDialog').addEventListener('click',e=>{if(e.target===$('caseDialog'))$('caseDialog').close();});
  $('casePrev').addEventListener('click',()=>{renderProject(projectIndex-1);renderCase();document.querySelector('.case-dialog-scroll').scrollTop=0;});
  $('caseNext').addEventListener('click',()=>{renderProject(projectIndex+1);renderCase();document.querySelector('.case-dialog-scroll').scrollTop=0;});
  document.addEventListener('keydown',e=>{if(!$('caseDialog').open)return;if(e.key==='ArrowRight'){$('caseNext').click();}if(e.key==='ArrowLeft'){$('casePrev').click();}});
  renderProject(0);
}

function renderSkills(index){
  const s=SKILLS[index];
  document.querySelectorAll('[data-skill]').forEach((b,i)=>{b.classList.toggle('active',i===index);b.setAttribute('aria-selected',String(i===index));b.tabIndex=i===index?0:-1;});
  setText('skillsLabel',s.label);setText('skillsTitle',s.title);setText('skillsDescription',s.description);
  const icon=document.querySelector('.skill-icon');if(icon)icon.textContent=s.icon;
  const cloud=$('skillsCloud');cloud.replaceChildren();
  s.skills.forEach(x=>{const span=document.createElement('span');span.textContent=x.toUpperCase();cloud.append(span);});
}
function initSkills(){
  const tabs=[...document.querySelectorAll('[data-skill]')];
  tabs.forEach((b,i)=>{
    b.addEventListener('click',()=>renderSkills(i));
    b.addEventListener('keydown',e=>{if(e.key!=='ArrowRight'&&e.key!=='ArrowLeft')return;e.preventDefault();const n=(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;renderSkills(n);tabs[n].focus();});
  });
  renderSkills(0);
}

function answerQuestion(raw){
  const q=raw.toLowerCase();
  if(/mood|emotion|music/.test(q))return 'MoodSync-AI is an emotion-aware music recommendation app. A React frontend captures webcam frames, OpenCV prepares them, TensorFlow/Keras supports emotion recognition, and FastAPI connects predictions to music recommendations. The resume says the frontend and backend were deployed as separate services.';
  if(/campus|navigation|\bar\b|postgis|gps|route/.test(q))return 'CampusAR helps users navigate campus indoor and outdoor spaces. It uses React and TypeScript, Node.js REST APIs, PostgreSQL/PostGIS, graph-based shortest paths, GPS updates, QR-assisted indoor positioning, WebSockets, and AR direction cues.';
  if(/sign language|gesture|\basl\b|accessib|deaf|hand/.test(q))return 'The Sign Language Interpreter recognizes hand gestures from webcam input and displays predicted alphabet characters. The academic resume describes MediaPipe landmark detection and a TensorFlow/Keras CNN, plus Ranjitha’s work on dataset preparation, training, and webcam inference.';
  if(/event|management|frontend project/.test(q))return 'The Events Management System is a team project. Ranjitha worked as a frontend developer using React, HTML, CSS, and JavaScript, designed responsive pages, integrated event APIs, and collaborated with the backend team.';
  if(/project|portfolio|built|build|work/.test(q))return 'Four featured builds: (1) MoodSync-AI — emotion-aware music recommendations; (2) CampusAR — indoor/outdoor campus navigation; (3) Sign Language Interpreter — computer-vision accessibility; and (4) Events Management System — responsive React frontend. Open “Selected work” to explore each case study.';
  if(/samsung|intern|training|industry/.test(q))return 'Ranjitha was a Student Trainee at Samsung Innovation Campus from November 2024 to February 2025. Training focused on Python programming, algorithms, competitive programming, coding exercises and problem solving.';
  if(/cgpa|college|degree|educat|graduate|university|rnsit/.test(q))return 'Ranjitha is pursuing B.E. in Computer Science & Engineering at RNS Institute of Technology in Bengaluru (2023–2027), with a 9.49/10 CGPA on the academic resume. Earlier scores: 93.5% in Class 12 and 98% in Class 10.';
  if(/ieee|gdsc|club|lead|secretary|society|collab/.test(q))return 'Outside coursework, Ranjitha served as Secretary of the IEEE Consumer Technology Society and was a Google Developer Student Clubs (GDSC) member. The resumes also highlight teamwork, leadership, communication and time management.';
  if(/network|nptel|certificat/.test(q))return 'Ranjitha completed “Demystifying Networking,” an NPTEL course offered by IIT Madras, covering network architecture, TCP/IP, routing, switching and data communications. The academic resume lists a 78/100 assessment score.';
  if(/contact|email|reach|hire|opportun|connect|linkedin|github|resume/.test(q))return 'You can reach Ranjitha at ranjithasgowda245@gmail.com, see GitHub at github.com/PraveenKumarM17/Gesture, or connect on LinkedIn at linkedin.com/in/ranjitha-sridhar-a5b711311. The contact section has direct links and a resume PDF.';
  if(/skill|stack|tool|tech|language|python|java|backend|api|react|database|frontend/.test(q))return 'Programming: Python, JavaScript, C++, Java, C and C#. Web/backend: React, TypeScript, FastAPI, Node.js, HTML/CSS, REST APIs and ASP.NET Core Web API. Data/ML: OpenCV, TensorFlow/Keras, NumPy and Pandas. Data stores include MySQL, PostgreSQL and PostGIS.';
  if(/hobb|interest|read|badminton|draw/.test(q))return 'The academic resume lists badminton, drawing and reading as personal interests.';
  if(/hello|hey|hi|who are you|about you/.test(q))return 'Hi! I’m a local portfolio guide to Ranjitha S’s resume and projects. Ask about MoodSync-AI, CampusAR, Samsung Innovation Campus, the tech stack, education or how to connect.';
  return 'I can answer questions about the four featured projects, technology stack, Samsung training, education, student leadership and contact details. Try “How does CampusAR work?” or “Tell me about MoodSync-AI.”';
}
function addMessage(sender,text){
  const log=$('chatMessages'), item=document.createElement('div');item.className='chat-message '+(sender==='user'?'user':'bot');
  const label=document.createElement('span');label.className='chat-message-author';label.textContent=sender==='user'?'YOU':'RANJITHA / PORTFOLIO GUIDE';
  const p=document.createElement('p');p.textContent=text;
  const time=document.createElement('time');time.textContent=new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit'});
  item.append(label,p,time);log.append(item);log.scrollTop=log.scrollHeight;
}
function initChat(){
  let count=0;
  const ask=(q)=>{const text=q.trim();if(!text)return;addMessage('user',text);addMessage('bot',answerQuestion(text));$('chatInput').value='';count++;if(count>0)$('chatSuggestions').style.display='none';};
  $('chatForm').addEventListener('submit',e=>{e.preventDefault();ask($('chatInput').value);});
  document.querySelectorAll('[data-question]').forEach(b=>b.addEventListener('click',()=>ask(b.dataset.question)));
}

function initContact(){
  $('contactForm').addEventListener('submit',e=>{
    e.preventDefault();
    const name=$('contactName'),email=$('contactEmail'),message=$('contactMessage');
    if(!name.checkValidity()||!email.checkValidity()||!message.checkValidity()){
      setText('formStatus','Please enter a name, a valid email address, and at least 10 characters.');
      for(const field of [name,email,message]){if(!field.checkValidity()){field.focus();break;}}
      return;
    }
    const subject=encodeURIComponent('Portfolio inquiry from '+name.value.trim());
    const body=encodeURIComponent('Hi Ranjitha,\n\n'+message.value.trim()+'\n\nFrom: '+name.value.trim()+'\nReply to: '+email.value.trim());
    setText('formStatus','Opening your email application with the drafted message. Nothing was sent by this site.');
    window.location.href='mailto:ranjithasgowda245@gmail.com?subject='+subject+'&body='+body;
  });
  setText('copyrightYear',String(new Date().getFullYear()));
}

function initPointer(){
  if(reducedMotion||!window.matchMedia('(hover:hover)').matches)return;
  const glow=$('cursor-glow');
  let raf=0,x=-600,y=-600;
  window.addEventListener('pointermove',e=>{
    x=e.clientX;y=e.clientY;
    if(raf)return;
    raf=requestAnimationFrame(()=>{glow.style.left=x+'px';glow.style.top=y+'px';raf=0;});
  },{passive:true});
  const card=$('portraitCard'), visual=document.querySelector('.hero-visual');
  if(card&&visual){visual.addEventListener('pointermove',e=>{
    const r=visual.getBoundingClientRect();const xp=(e.clientX-r.left)/r.width-.5,yp=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`rotate(-2.3deg) rotateY(${xp*9}deg) rotateX(${-yp*8}deg)`;
  });visual.addEventListener('pointerleave',()=>{card.style.transform='rotate(-2.3deg)';});}
}

document.addEventListener('DOMContentLoaded',()=>{
  initIntro();initRole();updateClock();window.setInterval(updateClock,45000);
  initHeader();initReveal();initDemo();initProjects();initSkills();initChat();initContact();initPointer();
});
