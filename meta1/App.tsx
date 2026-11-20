import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, ArrowUp, Menu, X, Mail, Phone, MapPin, Linkedin, Github, Sparkles, Brain, Music, Camera, Cpu, Play, Trophy, BookOpen, Palette, Code2, Database, Wrench, GraduationCap, Briefcase, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import moodSyncImg from 'container:///mnt/data/src/assets/ab2962761e368a1f-image_20261118_143426.webp';
import campusImg from 'container:///mnt/data/src/assets/eb72c82cc210b502-image_20261118_143417_1.webp';
import signImg from 'container:///mnt/data/src/assets/4d91f98b8067cc5c-image_20261118_143425.webp';
import eventsImg from 'container:///mnt/data/src/assets/8e914cba07caf54b-image_20261118_143417.webp';


const roles = ['Full-Stack Developer', 'AI & ML Builder', 'Computer Vision', 'Problem Solver'];
const row1 = ['Python','JavaScript','React.js','FastAPI','Node.js','TypeScript','C++','Java','C','C#','HTML5','CSS3','ASP.NET Core','REST APIs'];
const row2 = ['TensorFlow / Keras','OpenCV','Machine Learning','PostgreSQL','PostGIS','MySQL','Git','GitHub','VS Code','Google Colab','OOP','DSA','DBMS','Microservices','Event-Driven Architecture'];

type Project = {id:string; cat:string; tag:string; title:string; timeline:string; metric:string; problem:string; approach:string; fresh:string; role:string; stack:string[]; image:string; demo:string; github:string; color:string};
const projects: Project[] = [
  {id:'moodsync', cat:'AI-ML', tag:'AI-ML / Full-Stack', title:'MoodSync-AI', timeline:'May 2026 – Present', metric:'Real-time emotion → music in seconds.', problem:'Music apps don’t adapt to how you feel right now.', approach:'FastAPI REST APIs for emotion detection, prediction and music recommendation, integrating a trained TensorFlow/Keras model with OpenCV image processing. React.js frontend captures webcam frames and communicates via HTTP. Deployed as separate frontend/backend services.', fresh:'Emotion-aware playlist that reacts live, not from history.', role:'Solo builder — model, API, frontend.', stack:['Python','FastAPI','React.js','TensorFlow/Keras','OpenCV'], image:moodSyncImg, demo:'https://mood-sync-ai-v2-aoofar6ji-ranjitha-s.vercel.app/', github:'https://github.com/ranjitha-sridhar/MoodSync-AI-V2', color:'#6C4DFF'},
  {id:'campus', cat:'Full-Stack', tag:'Full-Stack / AR', title:'CampusAR', timeline:'2026', metric:'Indoor + outdoor navigation in one app.', problem:'New students get lost between buildings, entrances and indoor rooms.', approach:'Full-stack campus navigation with graph-based routing, GPS positioning and AR guidance. Node.js REST APIs with PostgreSQL/PostGIS and a layered backend (API / application / domain / data-access). Real-time GPS updates, QR-based indoor relocalization, WebSocket communication, AR directional guidance.', fresh:'QR relocalization + AR arrows bridge the last 50 metres indoors.', role:'Full-stack builder — routing, APIs, AR flow.', stack:['React','TypeScript','Node.js','PostgreSQL','PostGIS','REST APIs'], image:campusImg, demo:'#pipeline', github:'https://github.com/ssarveshr/DBMS-project-', color:'#0EA5A0'},
  {id:'sign', cat:'Accessibility', tag:'AI-ML / Accessibility', title:'Real-time Sign Language Interpreter (ASL)', timeline:'Mar 2025 – May 2025', metric:'Live webcam → alphabet characters in real time.', problem:'Communication gap for users with hearing or speech challenges.', approach:'MediaPipe for hand detection + landmark extraction, CNN built with TensorFlow/Keras. Each frame is processed to detect landmarks, extract features and pass them to the model. Work included dataset preparation, model training & evaluation, image preprocessing and real-time inference. Mentor: Ms Chethana H R · Team size: 4.', fresh:'Assistive communication that runs live in the webcam, not offline clips.', role:'Dataset preparation, model training, integrating real-time inference, accuracy & performance.', stack:['Python','OpenCV','TensorFlow','Keras','CNN','Deep Learning','Computer Vision','NumPy','MediaPipe'], image:signImg, demo:'https://github.com/PraveenKumarM17/Gesture', github:'https://github.com/PraveenKumarM17/Gesture', color:'#FF6A55'},
  {id:'events', cat:'Full-Stack', tag:'Full-Stack', title:'Events Management System', timeline:'Mar 2025 – Jul 2025', metric:'One place for students + organizers.', problem:'College events scattered across chats, sheets and posters.', approach:'Frontend Developer — UI with HTML, CSS, JavaScript, React.js, responsive pages, integrated APIs for event data, smooth UX for students and organizers. Collaborated with the backend team using GitHub for version control. Team size: 4.', fresh:'Organizer + student flows in one clean interface.', role:'Frontend Developer — UI, API integration, responsive UX.', stack:['Frontend Development','HTML','CSS','JavaScript','React.js','UI Development','Teamwork'], image:eventsImg, demo:'https://github.com/ssarveshr/DBMS-project-', github:'https://github.com/ssarveshr/DBMS-project-', color:'#F2B705'},
];

const pipeline = [
  {n:1, title:'Capture', icon:Camera, desc:'Webcam frame captured in the React frontend.', detail:'The browser asks for a single frame — no recording, no history. That frame is the only input for the next step.'},
  {n:2, title:'Detect', icon:ScanIcon, desc:'OpenCV face detection + preprocessing.', detail:'OpenCV finds the face, crops it and normalises light and scale so the model sees a clean, consistent input.'},
  {n:3, title:'Predict', icon:Brain, desc:'Trained TensorFlow/Keras model predicts emotion.', detail:'A trained CNN reads the processed frame and returns an emotion prediction with a confidence score.'},
  {n:4, title:'Recommend', icon:Music, desc:'FastAPI returns personalized music recommendations.', detail:'FastAPI maps the predicted emotion to a curated set of tracks and returns them as a simple REST response.'},
  {n:5, title:'Enjoy', icon:Sparkles, desc:'Frontend plays track + updates mood history.', detail:'The frontend plays the track and adds the moment to mood history, so the next recommendation starts from now — not yesterday.'},
];
function ScanIcon(){ return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/></svg>; }

type MoodKey = 'Happy' | 'Calm' | 'Focused' | 'Energetic';
const moods: Record<MoodKey,{label:string; emoji:string; color:string; tracks:string[]; confidence:number; note:string}> = {
  Happy:{label:'Happy', emoji:'', color:'#F2B705', tracks:['Sunshine Loop — Indie Pop','Golden Hour Drive','Bright Mornings Mix'], confidence:92, note:'Upbeat tempo, major keys, high energy.'},
  Calm:{label:'Calm', emoji:'', color:'#0EA5A0', tracks:['Quiet Water — Ambient','Slow Light Piano','Evening Breeze'], confidence:88, note:'Low tempo, soft textures, room to breathe.'},
  Focused:{label:'Focused', emoji:'', color:'#6C4DFF', tracks:['Deep Work — Lo-fi','Steady Signal','Code in Flow'], confidence:90, note:'Steady rhythm, minimal vocals, long focus blocks.'},
  Energetic:{label:'Energetic', emoji:'', color:'#FF6A55', tracks:['Start the Run — Pop','Neon Streets','Lift Off'], confidence:94, note:'High BPM, driving beat, built to move.'},
};

const kb: {keys:string[]; answer:string}[] = [
  {keys:['moodsync','mood'], answer:'MoodSync-AI turns a live webcam frame into music. OpenCV detects the face, a TensorFlow/Keras model predicts the emotion, FastAPI returns recommendations, and the React frontend plays the track. It reacts to how you feel now — not to your listening history.'},
  {keys:['stack','strongest','skills','language'], answer:'My strongest stack is Python + FastAPI on the backend, React + TypeScript on the frontend, and TensorFlow/Keras + OpenCV for AI and computer vision, with PostgreSQL/PostGIS and MySQL for data.'},
  {keys:['campusar','campus','ar'], answer:'CampusAR is indoor + outdoor campus navigation in one app. It uses graph-based routing, GPS, PostgreSQL/PostGIS, Node.js REST APIs, QR-based indoor relocalization and AR directional guidance to bridge the last 50 metres indoors.'},
  {keys:['sign','asl','gesture'], answer:'The Real-time Sign Language Interpreter uses MediaPipe hand landmarks and a CNN built with TensorFlow/Keras to turn live webcam gestures into alphabet characters in real time. I worked on dataset preparation, model training and real-time inference.'},
  {keys:['internship','open','job','role','hire','sde'], answer:'Yes — I am open to internships and entry-level SDE / Full-stack / AI roles. I am in the Class of 2027 at RNSIT, Bengaluru, with a CGPA of 9.49/10. The contact form below is the fastest way to reach me.'},
  {keys:['build','project','how do you'], answer:'I build in three moves: Discover the user and problem, Architect the API, data model and UI flow, then Build & Measure in small slices — test live, iterate on real feedback, deploy.'},
  {keys:['education','college','cgpa','rnsit','study'], answer:'I am a B.E. Computer Science Engineering student at RNS Institute of Technology, Bengaluru (2023–2027), CGPA 9.49/10. Before that: 93.5% in 12th at Deeksha Centre for Learning (2023) and 98% in 10th, ICSE, at Swargarani School (2021).'},
  {keys:['event'], answer:'The Events Management System brings students and organizers into one clean interface. I was the Frontend Developer, building responsive pages in HTML, CSS, JavaScript and React.js and integrating APIs for event data.'},
  {keys:['experience','samsung'], answer:'From Nov 2024 to Feb 2025 I was an Internship Trainee at Samsung Innovation Campus, Bengaluru — industry-oriented training in Python, problem-solving and core CS, with structured assignments and project-based learning.'},
  {keys:['leader','ieee','gdsc'], answer:'I am Secretary of the IEEE Consumer Technology Society and a Member of Google Developer Student Clubs (GDSC). Both roles are about learning in public and building with other students.'},
];

const toolkitTabs: Record<string,string[]> = {
  'Languages':['C++','Java','Python','C','JavaScript','C#'],
  'Web & Backend':['HTML5','CSS3','JavaScript','React.js','FastAPI','ASP.NET Core Web API','REST APIs'],
  'Databases':['MySQL','SQL','PostgreSQL','PostGIS'],
  'AI/ML & Data':['OpenCV','TensorFlow / Keras','Pandas','NumPy','Matplotlib','ML','EDA'],
  'Tools':['Git','GitHub','VS Code','Google Colab'],
  'Software Engineering':['OOP','DSA','DBMS','API Development','Microservices Fundamentals','Event-Driven Architecture'],
};

async function apiCall(action:string, args:any){
  const res = await fetch('actions', {method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({action, args})});
  const json = await res.json().catch(()=>({}));
  if(!res.ok || json.error) throw new Error(json.error || `Request failed (${res.status})`);
  return json.data;
}
async function reloadRecords(){
  return apiCall('records.list', {collection:'contact_messages'});
}

export default function App(){
  const [menu,setMenu]=useState(false);
  const [progress,setProgress]=useState(0);
  const [active,setActive]=useState('home');
  const [roleIdx,setRoleIdx]=useState(0);
  const [heroXY,setHeroXY]=useState({x:0,y:0});
  const [filter,setFilter]=useState('All');
  const [selected,setSelected]=useState<Project>(projects[0]);
  const [step,setStep]=useState(0);
  const [mood,setMood]=useState<'Happy'|'Calm'|'Focused'|'Energetic'>('Happy');
  const [moodPulse,setMoodPulse]=useState(0);
  const [chat,setChat]=useState<{from:'user'|'bot'; text:string}[]>([{from:'bot', text:'Hi, I’m Ranjitha’s portfolio assistant. Ask me about projects, stack, education or internships — or tap a question below.'}]);
  const [typing,setTyping]=useState(false);
  const [input,setInput]=useState('');
  const [toolTab,setToolTab]=useState('Languages');
  const [openExp,setOpenExp]=useState<number|null>(0);
  const [form,setForm]=useState({name:'',email:'',message:''});
  const [formStatus,setFormStatus]=useState<{type:'idle'|'saving'|'done'|'error'; text:string; saved?:number; remaining?:number}>({type:'idle',text:''});
  const [savedCount,setSavedCount]=useState<number|null>(null);
  const [counters,setCounters]=useState({cgpa:0, projects:0, twelfth:0, tenth:0, nptel:0, leader:0});
  const counted = useRef(false);
  const chatEnd = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const onScroll=()=>{
      const h=document.documentElement;
      setProgress(h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100);
      const ids=['home','about','skills','pipeline','projects','ask','model','experience','toolkit','contact'];
      let cur='home';
      for(const id of ids){ const el=document.getElementById(id); if(el && el.getBoundingClientRect().top<180) cur=id; }
      setActive(cur);
    };
    window.addEventListener('scroll',onScroll,{passive:true}); onScroll(); return ()=>window.removeEventListener('scroll',onScroll);
  },[]);
  useEffect(()=>{
    const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible'); if(e.target.id==='stats' && !counted.current){counted.current=true; const t0=performance.now(); const tick=(t:number)=>{const p=Math.min(1,(t-t0)/1400); const ease=1-Math.pow(1-p,3); setCounters({cgpa:+(9.49*ease).toFixed(2), projects:Math.round(4*ease), twelfth:+(93.5*ease).toFixed(1), tenth:Math.round(98*ease), nptel:Math.round(78*ease), leader:Math.round(2*ease)}); if(p<1) requestAnimationFrame(tick)}; requestAnimationFrame(tick);}}}),{threshold:.15});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el)); return ()=>io.disconnect();
  },[]);
  useEffect(()=>{ const t=setInterval(()=>setRoleIdx(v=>(v+1)%roles.length),2400); return ()=>clearInterval(t);},[]);
  useEffect(()=>{ chatEnd.current?.scrollIntoView({behavior:'smooth', block:'nearest'}); },[chat,typing]);

  const ask=(q:string)=>{
    const text=q.trim(); if(!text) return;
    setChat(c=>[...c,{from:'user',text}]); setInput(''); setTyping(true);
    const found=kb.find(k=>k.keys.some(key=>text.toLowerCase().includes(key)));
    const answer=found?found.answer:'I can answer about projects, stack, education and internships — try one of the questions above.';
    setTimeout(()=>{ setTyping(false); setChat(c=>[...c,{from:'bot',text:answer}]); },900);
  };

  const filtered = filter==='All'?projects:projects.filter(p=>p.cat===filter || (filter==='AI-ML' && p.cat==='AI-ML') || (filter==='Accessibility' && p.cat==='Accessibility'));
  const moodData=moods[mood];

  const submitForm=async(e:React.FormEvent)=>{
    e.preventDefault();
    if(!form.name.trim()||!form.email.trim()||!form.message.trim()){ setFormStatus({type:'error',text:'Please fill in your name, email and message.'}); return; }
    setFormStatus({type:'saving',text:'Saving your message…'});
    const row={name:form.name.trim(), email:form.email.trim(), message:form.message.trim(), subject:'Portfolio contact', createdAt:new Date().toISOString()};
    const key=`contact-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
    try{
      await apiCall('records.create',{collection:'contact_messages', value:row, idempotency_key:key});
      const data=await reloadRecords().catch(()=>null);
      if(Array.isArray(data?.records)) setSavedCount(data.records.length);
      setFormStatus({type:'done', text:`Message saved — thank you, ${row.name}. I’ll get back to you soon.`});
      setForm({name:'',email:'',message:''});
    }catch(_err){
      try{
        const existing=JSON.parse(localStorage.getItem('portfolio_contact_messages')||'[]');
        existing.push(row);
        localStorage.setItem('portfolio_contact_messages', JSON.stringify(existing));
        setSavedCount(existing.length);
      }catch{}
      const mail='mailto:ranjithasgowda245@gmail.com?subject='+encodeURIComponent('Portfolio inquiry from '+row.name)+'&body='+encodeURIComponent(row.message+'\n\n— '+row.name+' ('+row.email+')');
      window.location.href=mail;
      setFormStatus({type:'done', text:`Thank you, ${row.name}! Your note was saved locally and your email draft is opening.`});
      setForm({name:'',email:'',message:''});
    }
  };

  const tilt=(e:React.MouseEvent<HTMLDivElement>)=>{
    const el=e.currentTarget; const r=el.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    el.style.transform=`perspective(900px) rotateY(${x*7}deg) rotateX(${-y*7}deg) translateY(-4px)`;
  };
  const untilt=(e:React.MouseEvent<HTMLDivElement>)=>{ e.currentTarget.style.transform=''; };

  const nav=[['About','about'],['Skills','skills'],['Pipeline','pipeline'],['Projects','projects'],['Ask Me','ask'],['Experience','experience'],['Toolkit','toolkit'],['Contact','contact']] as const;

  return (
    <div data-safe-area-inset-root style={{boxSizing:'border-box', paddingTop:'var(--safe-area-inset-top)', minHeight:'100vh', background:'var(--cream)', color:'var(--ink)'}} className="overflow-x-clip">
      {/* Sticky header */}
      <header data-safe-area-sticky-top style={{top:'var(--safe-area-inset-top)'}} className="sticky z-50 border-b border-[var(--line)] bg-[var(--cream)]/85 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-3 py-2 text-[12px] sm:text-[13px]">
            <span className="text-[var(--muted)]">Ranjitha S · Full-Stack &amp; AI/ML Portfolio</span>
            <span className="hidden lg:inline text-[var(--muted)]">Open to internships · Class of 2027</span>
          </div>
          <div className="flex items-center justify-between gap-3 pb-3">
            <a href="#home" className="flex items-center gap-3 shrink-0" aria-label="Ranjitha S — home">
              <span className="w-10 h-10 rounded-2xl bg-[var(--ink)] text-[var(--cream)] grid place-items-center font-display font-bold text-lg">RS</span>
              <span className="leading-none"><span className="block font-display font-bold text-[19px]">Ranjitha S</span><span className="block text-[11px] tracking-[0.16em] uppercase text-[var(--muted)] mt-1">CSE · Bengaluru</span></span>
            </a>
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              {nav.map(([label,id])=><a key={id} href={`#${id}`} className={`px-3 py-2 rounded-full text-[14px] font-medium ${active===id?'bg-[var(--ink)] text-[var(--cream)]':'text-[var(--ink-soft)] hover:bg-[var(--surface-2)]'}`}>{label}</a>)}
            </nav>
            <div className="flex items-center gap-2">
              <a href="#contact" className="hidden sm:inline-flex bg-[var(--coral)] text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:brightness-95">Get in touch <ArrowRight size={15}/></a>
              <button onClick={()=>setMenu(v=>!v)} className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)]" aria-label={menu?'Close menu':'Open menu'} aria-expanded={menu}>{menu?<X size={19}/>:<Menu size={19}/>}</button>
            </div>
          </div>
          <div className="h-[3px] bg-[var(--line)] rounded-full overflow-hidden mb-2"><div className="h-full bg-gradient-to-r from-[var(--violet)] via-[var(--coral)] to-[var(--teal)] transition-all" style={{width:`${progress}%`}} /></div>
        </div>
        {menu && <nav className="lg:hidden border-t border-[var(--line)] bg-[var(--cream)] px-4 py-3 grid gap-1" aria-label="Mobile">{nav.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)} className="px-3 py-3 rounded-xl font-medium hover:bg-[var(--surface-2)]">{label}</a>)}</nav>}
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="relative overflow-x-clip">
          <div aria-hidden="true" className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#FFD9D0] blur-3xl opacity-70 blob-a" />
          <div aria-hidden="true" className="absolute top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#DDD3FF] blur-3xl opacity-80 blob-b" />
          <div aria-hidden="true" className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-[#CFF3EF] blur-3xl opacity-70" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-10 sm:pt-12 pb-14 grid lg:grid-cols-[1.15fr_.85fr] gap-10 items-center" onMouseMove={(e)=>{const r=e.currentTarget.getBoundingClientRect(); setHeroXY({x:(e.clientX-r.left)/r.width-.5, y:(e.clientY-r.top)/r.height-.5});}}>
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 bg-[var(--surface)]/90 border border-[var(--line)] rounded-full px-3 py-1.5 text-[13px] font-medium shadow-sm"><span className="w-2 h-2 rounded-full bg-emerald-500"/> Open to internships & entry-level roles</span>
                <span className="bg-[var(--violet-soft)] text-[var(--violet)] rounded-full px-3 py-1.5 text-[13px] font-semibold">RNS Institute of Technology · CGPA 9.49/10</span>
                <span className="bg-[var(--teal-soft)] text-[var(--teal)] rounded-full px-3 py-1.5 text-[13px] font-semibold">Bengaluru, India</span>
              </div>
              <h1 className="font-display font-semibold leading-[0.95] mt-6" style={{fontSize:'clamp(44px,7.2vw,84px)'}}>I build software<br/>that <span className="italic text-[var(--violet)]">feels</span> <span className="relative inline-block">human.<span className="absolute -bottom-2 left-0 w-full h-[10px] bg-[var(--gold)]/60 rounded-full -z-10"/></span></h1>
              <p className="mt-5 text-[19px] sm:text-[22px] font-medium min-h-[34px]" aria-live="polite"><span className="text-[var(--muted)]">— </span><span className="caret text-[var(--coral)]">{roles[roleIdx]}</span></p>
              <p className="text-[var(--ink-soft)] text-[17px] leading-relaxed max-w-[620px] mt-3">Computer Science Engineering student with hands-on experience in full-stack apps, computer vision and machine learning — building and deploying real-world applications with Python, JavaScript, React, FastAPI, databases and REST APIs.</p>
              <div className="flex flex-wrap gap-3 mt-7">
                <a href="#projects" className="inline-flex items-center gap-2 bg-[var(--ink)] text-[var(--cream)] px-6 py-3.5 rounded-full font-semibold shadow-lg hover:-translate-y-0.5 transition">See the work <ArrowRight size={17}/></a>
                <a href="#contact" className="inline-flex items-center gap-2 bg-[var(--surface)] border border-[var(--line)] px-6 py-3.5 rounded-full font-semibold shadow-sm hover:-translate-y-0.5 transition">Get in touch</a>
                <a href="../assets/Ranjitha-S-Resume.pdf" download="Ranjitha-S-Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--coral-soft)] text-[var(--coral)] px-6 py-3.5 rounded-full font-semibold hover:-translate-y-0.5 transition">Download Resume</a>
              </div>
              <div className="mt-8 flex items-center gap-3 text-sm text-[var(--muted)]"><span className="w-9 h-[1px] bg-[var(--muted)]"/> Scroll to see how I think, build & ship <span aria-hidden="true">↓</span></div>
            </div>
            <div className="relative" style={{transform:`translate(${heroXY.x*10}px, ${heroXY.y*8}px)`, transition:'transform .3s ease'}}>
              <div className="rounded-[28px] bg-[var(--surface)] border border-[var(--line)] shadow-[var(--shadow)] p-4 sm:p-5 rotate-[-1deg]">
                <div className="flex items-center justify-between"><div className="flex items-center gap-3"><span className="w-11 h-11 rounded-2xl bg-[var(--violet)] text-white grid place-items-center font-display font-bold">RS</span><div><p className="font-bold">Ranjitha S</p><p className="text-xs text-[var(--muted)]">B.E. CSE · 2023–2027</p></div></div><span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-semibold">Available</span></div>
                <div className="mt-4 rounded-2xl overflow-hidden bg-[var(--surface-2)]"><img src={moodSyncImg} alt="MoodSync-AI cover" className="w-full h-[220px] sm:h-[260px] object-cover hover:scale-[1.04] transition duration-700"/></div>
                <div className="grid grid-cols-3 gap-2 mt-4 text-center"><div className="bg-[var(--cream-2)] rounded-xl py-3"><p className="font-display font-bold text-lg">9.49</p><p className="text-[11px] text-[var(--muted)]">CGPA / 10</p></div><div className="bg-[var(--violet-soft)] rounded-xl py-3"><p className="font-display font-bold text-lg">4</p><p className="text-[11px] text-[var(--muted)]">Projects shipped</p></div><div className="bg-[var(--teal-soft)] rounded-xl py-3"><p className="font-display font-bold text-lg">2</p><p className="text-[11px] text-[var(--muted)]">Leadership roles</p></div></div>
              </div>
              <div className="absolute -left-3 sm:-left-8 top-16 bg-[var(--surface)] rounded-2xl shadow-lg border border-[var(--line)] px-3 py-2 flex items-center gap-2 animate-floaty"><Brain size={18} className="text-[var(--violet)]"/><span className="text-xs font-semibold">Emotion → Music</span></div>
              <div className="absolute -right-2 sm:-right-5 bottom-16 bg-[var(--ink)] text-[var(--cream)] rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2 animate-floaty" style={{animationDelay:'1.2s'}}><MapPin size={16} className="text-[var(--teal)]"/><span className="text-xs font-semibold">CampusAR · QR + AR</span></div>
            </div>
          </div>
        </section>

        {/* ABOUT + STATS */}
        <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 items-start">
            <div className="reveal">
              <p className="text-sm font-bold tracking-[0.18em] uppercase text-[var(--coral)]">About</p>
              <h2 className="font-display font-semibold leading-tight mt-3" style={{fontSize:'clamp(34px,4.5vw,56px)'}}>Full-stack + AI,<br/><span className="italic text-[var(--violet)]">built to ship.</span></h2>
              <p className="text-[var(--ink-soft)] text-[17px] leading-relaxed mt-5">Strong foundation in OOP, DSA, DBMS, problem solving and software engineering principles, with a strong interest in cloud-native, scalable software. Aspiring to continuously enhance skills while contributing to innovative impact projects.</p>
              <div className="grid sm:grid-cols-2 gap-3 mt-7">
                <div className="bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-5 shadow-sm"><p className="font-bold flex gap-2 items-center"><GraduationCap size={18} className="text-[var(--violet)]"/> Now</p><p className="text-sm text-[var(--ink-soft)] mt-2">B.E. CSE, RNSIT (2023–2027)</p></div>
                <div className="bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-5 shadow-sm"><p className="font-bold flex gap-2 items-center"><Sparkles size={18} className="text-[var(--coral)]"/> Domains</p><p className="text-sm text-[var(--ink-soft)] mt-2">Full-stack apps · Computer Vision · ML / AI · Campus & Accessibility Tech</p></div>
                <div className="bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-5 shadow-sm"><p className="font-bold">Time split</p><p className="text-sm text-[var(--ink-soft)] mt-2">55% building & shipping / 25% learning & ML experiments / 20% community & leadership</p></div>
                <div className="bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-5 shadow-sm"><p className="font-bold">Languages</p><p className="text-sm text-[var(--ink-soft)] mt-2">English, Kannada, Hindi, German (beginner)</p></div>
              </div>
              <div className="flex flex-wrap gap-2 mt-5">{['Badminton','Drawing','Reading'].map(x=><span key={x} className="bg-[var(--teal-soft)] text-[var(--teal)] px-3 py-1.5 rounded-full text-sm font-semibold">{x}</span>)}</div>
            </div>
            <div id="stats" className="reveal grid grid-cols-2 gap-3">
              {[
                {v:`${counters.cgpa} / 10`, l:'CGPA at RNSIT', c:'bg-[var(--violet-soft)]'},
                {v:`${counters.projects}`, l:'Major projects shipped', c:'bg-[var(--coral-soft)]'},
                {v:`${counters.twelfth}%`, l:'12th · PUE Karnataka, Deeksha (2023)', c:'bg-[var(--teal-soft)]'},
                {v:`${counters.tenth}%`, l:'10th · ICSE, Swargarani (2021)', c:'bg-[#FFF0C9]'},
                {v:`${counters.nptel} / 100`, l:'NPTEL Demystifying Networking', c:'bg-[var(--surface)]'},
                {v:`${counters.leader}`, l:'Leadership roles — GDSC + IEEE CTS', c:'bg-[var(--surface)]'},
              ].map(s=><div key={s.l} className={`${s.c} border border-[var(--line)] rounded-3xl p-5 sm:p-6 shadow-sm`}><p className="font-display font-bold leading-none" style={{fontSize:'clamp(26px,3.5vw,38px)'}}>{s.v}</p><p className="text-sm text-[var(--ink-soft)] mt-2 leading-snug">{s.l}</p></div>)}
            </div>
          </div>
        </section>

        {/* MARQUEES */}
        <section id="skills" className="py-8 overflow-x-clip">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-end justify-between gap-4"><h2 className="font-display font-semibold" style={{fontSize:'clamp(28px,4vw,44px)'}}>The stack I <span className="italic text-[var(--violet)]">reach for</span></h2><p className="hidden sm:block text-sm text-[var(--muted)]">Hover to pause</p></div>
          <div className="marquee-wrap overflow-hidden mt-6 py-2 max-w-full"><div className="marquee-track gap-3 pr-3">{[...row1,...row1].map((s,i)=><span key={i} className="whitespace-nowrap bg-[var(--ink)] text-[var(--cream)] px-5 py-3 rounded-full font-semibold text-sm sm:text-base">{s}</span>)}</div></div>
          <div className="marquee-wrap marquee-rev overflow-hidden mt-3 py-2 max-w-full"><div className="marquee-track gap-3 pr-3">{[...row2,...row2].map((s,i)=><span key={i} className="whitespace-nowrap bg-[var(--surface)] border border-[var(--line)] px-5 py-3 rounded-full font-semibold text-sm sm:text-base">{s}</span>)}</div></div>
        </section>

        {/* PIPELINE */}
        <section id="pipeline" className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <div className="reveal max-w-3xl"><p className="text-sm font-bold tracking-[0.18em] uppercase text-[var(--teal)]">Interactive demo</p><h2 className="font-display font-semibold mt-3" style={{fontSize:'clamp(32px,4.5vw,54px)'}}>Watch MoodSync-AI <span className="italic text-[var(--violet)]">think.</span></h2><p className="text-[var(--ink-soft)] mt-3">Tap a step. This is an illustrative walkthrough of the real pipeline — not a live model.</p></div>
          <div className="grid lg:grid-cols-[1fr_1.05fr] gap-6 mt-8">
            <div className="reveal bg-[var(--surface)] border border-[var(--line)] rounded-[28px] p-4 sm:p-6 shadow-sm">
              <div className="flex gap-2 sm:gap-3" role="tablist" aria-label="Pipeline steps">
                {pipeline.map((p,i)=><button key={p.n} role="tab" aria-selected={step===i} onClick={()=>setStep(i)} className={`flex-1 rounded-2xl px-2 py-3 sm:py-4 text-center transition ${step===i?'bg-[var(--ink)] text-[var(--cream)] shadow-md':'bg-[var(--surface-2)] hover:-translate-y-0.5'}`}><p.icon/><span className="block text-[12px] sm:text-sm font-bold mt-1.5">{p.n}. {p.title}</span></button>)}
              </div>
              <div className="h-2 bg-[var(--line)] rounded-full mt-4 overflow-hidden"><div className="h-full bg-gradient-to-r from-[var(--violet)] to-[var(--coral)] transition-all duration-500" style={{width:`${((step+1)/5)*100}%`}}/></div>
              <div className="mt-6 min-h-[120px]"><h3 className="font-display text-2xl font-bold">{pipeline[step].title}</h3><p className="font-medium mt-1">{pipeline[step].desc}</p><p className="text-[var(--ink-soft)] mt-2 leading-relaxed">{pipeline[step].detail}</p></div>
              <p className="text-xs text-[var(--muted)] border-t border-[var(--line)] pt-3">Step {step+1} of 5 · Capture → Detect → Predict → Recommend → Enjoy</p>
            </div>
            <div className="reveal bg-[#1B1626] text-white rounded-[28px] p-5 sm:p-6 shadow-lg">
              <div className="flex items-center justify-between gap-3"><div><p className="text-xs tracking-[0.18em] uppercase text-white/60">Fake live demo · illustrative</p><h3 className="font-display text-2xl font-bold mt-1">Pick a mood</h3></div><span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 text-xs font-semibold"><span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"/> LIVE</span></div>
              <div className="flex flex-wrap gap-2 mt-5" role="group" aria-label="Choose a mood">{(Object.keys(moods) as Array<keyof typeof moods>).map(m=><button key={m} onClick={()=>{setMood(m); setMoodPulse(v=>v+1);}} className={`px-4 py-2.5 rounded-full font-semibold text-sm transition ${mood===m?'bg-white text-[#18201C]':'bg-white/10 hover:bg-white/20'}`}>{m}</button>)}</div>
              <div key={moodPulse} className="mt-5 bg-white/10 rounded-3xl p-4">
                <div className="flex items-center justify-between gap-3"><div><p className="text-sm text-white/70">Detected emotion</p><p className="font-display text-3xl font-bold" style={{color:moodData.color}}>{moodData.label}</p></div><span className="text-xs bg-white text-[#18201C] px-3 py-1.5 rounded-full font-bold">Confidence {moodData.confidence}%</span></div>
                <div className="h-2.5 bg-white/20 rounded-full mt-4 overflow-hidden"><div className="h-full rounded-full transition-all duration-700" style={{width:`${moodData.confidence}%`, background:moodData.color}}/></div>
                <p className="text-sm text-white/80 mt-3">{moodData.note}</p>
                <div className="mt-4 space-y-2">{moodData.tracks.map((t,i)=><div key={t} className="flex items-center gap-3 bg-black/20 rounded-2xl px-3 py-2.5"><span className="w-8 h-8 rounded-full bg-white text-[#18201C] grid place-items-center"><Play size={14}/></span><span className="text-sm font-medium">{i+1}. {t}</span></div>)}</div>
              </div>
              <p className="text-[11px] text-white/50 mt-3">Illustrative playlist — no real model or audio is running here.</p>
            </div>
          </div>
        </section>

        {/* PROJECTS — dark showcase */}
        <section id="projects" className="bg-[#171224] text-white py-14 sm:py-20 overflow-x-clip">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4 reveal"><div><p className="text-sm font-bold tracking-[0.18em] uppercase text-[#FF8A78]">Featured work</p><h2 className="font-display font-semibold mt-3" style={{fontSize:'clamp(32px,4.5vw,54px)'}}>Projects that <span className="italic text-[#A894FF]">shipped.</span></h2></div><p className="text-white/60 max-w-md text-sm leading-relaxed">Select a project to open its full story. Select a project to inspect its architecture, role, stack, and repository.</p></div>
            <div className="flex flex-wrap gap-2 mt-7" role="tablist" aria-label="Filter projects">{['All','AI-ML','Full-Stack','Accessibility'].map(f=><button key={f} role="tab" aria-selected={filter===f} onClick={()=>{setFilter(f); const next=f==='All'?projects:projects.filter(p=>p.cat===f); if(next.length && !next.some(p=>p.id===selected.id)) setSelected(next[0]);}} className={`px-4 py-2.5 rounded-full text-sm font-semibold ${filter===f?'bg-white text-black':'bg-white/10 hover:bg-white/20'}`}>{f}</button>)}</div>
            <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-5 mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 content-start">
                {filtered.map(p=>(
                  <article key={p.id} onMouseMove={tilt} onMouseLeave={untilt} onClick={()=>setSelected(p)} className={`tilt text-left cursor-pointer rounded-3xl overflow-hidden border ${selected.id===p.id?'border-white bg-white text-black shadow-xl':'border-white/15 bg-white/5 hover:bg-white/10'}`} aria-label={`Open ${p.title}`}>
                    <img src={p.image} alt={p.title} className="w-full h-[150px] object-cover"/>
                    <div className="p-4"><span className="text-[11px] font-bold tracking-wider uppercase" style={{color:selected.id===p.id?p.color:'#A894FF'}}>{p.tag}</span><h3 className="font-display font-bold text-lg leading-tight mt-1">{p.title}</h3><p className={`text-xs mt-1 ${selected.id===p.id?'text-black/60':'text-white/60'}`}>{p.timeline} · {p.metric}</p></div>
                  </article>
                ))}
              </div>
              <article className="bg-[var(--surface)] text-[var(--ink)] rounded-[28px] overflow-hidden shadow-2xl reveal">
                <div className="relative"><img src={selected.image} alt={selected.title} className="w-full h-[240px] sm:h-[300px] object-cover"/><span className="absolute top-4 left-4 bg-[var(--surface)] text-[var(--ink)] rounded-full px-3 py-1.5 text-xs font-bold shadow">{selected.tag}</span><span className="absolute top-4 right-4 bg-[var(--ink)] text-[var(--cream)] rounded-full px-3 py-1.5 text-xs font-bold">{selected.timeline}</span></div>
                <div className="p-5 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3"><h3 className="font-display font-bold leading-tight" style={{fontSize:'clamp(26px,3.5vw,36px)'}}>{selected.title}</h3><span className="bg-[var(--coral-soft)] text-[var(--coral)] px-3 py-1.5 rounded-full text-sm font-bold">{selected.metric}</span></div>
                  <div className="grid sm:grid-cols-2 gap-4 mt-6 text-[15px] leading-relaxed">
                    <div><p className="font-bold text-[var(--violet)]">Problem</p><p className="text-[var(--ink-soft)] mt-1">{selected.problem}</p></div>
                    <div><p className="font-bold text-[var(--coral)]">What’s new</p><p className="text-[var(--ink-soft)] mt-1">{selected.fresh}</p></div>
                    <div className="sm:col-span-2"><p className="font-bold text-[var(--teal)]">Approach</p><p className="text-[var(--ink-soft)] mt-1">{selected.approach}</p></div>
                    <div className="sm:col-span-2"><p className="font-bold">My role</p><p className="text-[var(--ink-soft)] mt-1">{selected.role}</p></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-5">{selected.stack.map(s=><span key={s} className="bg-[var(--surface-2)] border border-[var(--line)] px-3 py-1.5 rounded-full text-[13px] font-semibold">{s}</span>)}</div>
                  <div className="flex flex-wrap gap-3 mt-6">
                    <a href={selected.demo} target={selected.demo.startsWith("http")?"_blank":undefined} rel={selected.demo.startsWith("http")?"noopener noreferrer":undefined} className="inline-flex items-center gap-2 bg-[var(--ink)] text-[var(--cream)] px-5 py-3 rounded-full font-semibold">{selected.demo.startsWith("#")?"Interactive Pipeline":"View Project"} <ExternalLink size={15}/></a>
                    <a href={selected.github} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-[var(--surface)] border border-[var(--line)] px-5 py-3 rounded-full font-semibold"><Github size={16}/> GitHub</a>
                  </div>
                  
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* EARLIER + CERTS */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
          <div className="grid md:grid-cols-2 gap-4">
            <article className="reveal bg-[var(--surface)] border border-[var(--line)] rounded-[28px] p-6 shadow-sm flex gap-4"><span className="w-12 h-12 shrink-0 rounded-2xl bg-[var(--violet-soft)] text-[var(--violet)] grid place-items-center"><BookOpen/></span><div><p className="text-xs font-bold tracking-wider uppercase text-[var(--muted)]">Certification</p><h3 className="font-display font-bold text-xl mt-1">NPTEL — Demystifying Networking</h3><p className="text-sm text-[var(--ink-soft)] mt-2">IIT Madras · 78/100 · Network architecture, TCP/IP, routing, switching, data communication.</p><span className="inline-block mt-3 bg-[var(--violet-soft)] text-[var(--violet)] px-3 py-1 rounded-full text-sm font-bold">78 / 100</span></div></article>
            <article className="reveal bg-[var(--surface)] border border-[var(--line)] rounded-[28px] p-6 shadow-sm flex gap-4"><span className="w-12 h-12 shrink-0 rounded-2xl bg-[var(--coral-soft)] text-[var(--coral)] grid place-items-center"><Trophy/></span><div><p className="text-xs font-bold tracking-wider uppercase text-[var(--muted)]">Earlier builds & practice</p><h3 className="font-display font-bold text-xl mt-1">Samsung Innovation Campus — Competitive Programming in Python</h3><p className="text-sm text-[var(--ink-soft)] mt-2">LeetCode / CodeChef practice, algorithms & data structures.</p></div></article>
          </div>
        </section>

        {/* ASK ME */}
        <section id="ask" className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
          <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-8 items-start">
            <div className="reveal"><p className="text-sm font-bold tracking-[0.18em] uppercase text-[var(--violet)]">Ask me</p><h2 className="font-display font-semibold mt-3" style={{fontSize:'clamp(32px,4.5vw,52px)'}}>Got a question?<br/><span className="italic text-[var(--coral)]">Just ask.</span></h2><p className="text-[var(--ink-soft)] mt-4 leading-relaxed">Answers come from a built-in knowledge base based on my resume — no external API. Try a chip, or type your own question.</p><div className="flex flex-wrap gap-2 mt-5">{['What is MoodSync-AI?','What is your strongest stack?','Tell me about CampusAR','Are you open to internships?','How do you build a project?'].map(q=><button key={q} onClick={()=>ask(q)} className="bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--violet)] px-3.5 py-2 rounded-full text-sm font-medium text-left">{q}</button>)}</div></div>
            <div className="reveal bg-[var(--surface)] border border-[var(--line)] rounded-[28px] shadow-[var(--shadow)] overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--line)]"><span className="relative w-10 h-10 rounded-full bg-[var(--ink)] text-[var(--cream)] grid place-items-center font-display font-bold">RS<span className="absolute -right-0.5 -bottom-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"/></span><div><p className="font-bold">Ranjitha’s Assistant</p><p className="text-xs text-emerald-600 font-semibold">Online · replies instantly</p></div></div>
              <div className="h-[320px] overflow-y-auto p-4 space-y-3" aria-live="polite">
                {chat.map((m,i)=><div key={i} className={`max-w-[85%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed ${m.from==='user'?'ml-auto bg-[var(--ink)] text-[var(--cream)] rounded-br-md':'bg-[var(--surface-2)] rounded-bl-md'}`}>{m.text}</div>)}
                {typing && <div className="bg-[var(--surface-2)] rounded-2xl rounded-bl-md px-4 py-3 inline-flex gap-1.5"><span className="typing-dot"/><span className="typing-dot"/><span className="typing-dot"/></div>}
                <div ref={chatEnd}/>
              </div>
              <form className="flex gap-2 p-3 border-t border-[var(--line)]" onSubmit={(e)=>{e.preventDefault(); ask(input);}}><label htmlFor="chat-input" className="sr-only">Ask a question</label><input id="chat-input" value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask about projects, stack, internships…" className="flex-1 min-w-0 bg-[var(--surface-2)] rounded-full px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-[var(--violet)]"/><button type="submit" className="shrink-0 bg-[var(--violet)] text-white px-5 py-3 rounded-full font-semibold inline-flex items-center gap-1.5">Send <Send size={15}/></button></form>
            </div>
          </div>
        </section>

        {/* OPERATING MODEL */}
        <section id="model" className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
          <div className="reveal"><p className="text-sm font-bold tracking-[0.18em] uppercase text-[var(--coral)]">Operating model</p><h2 className="font-display font-semibold mt-3" style={{fontSize:'clamp(32px,4.5vw,52px)'}}>How I <span className="italic text-[var(--violet)]">build.</span></h2></div>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[{n:'01',t:'Discover',d:'Understand the user + problem, define scope and success before code.'},{n:'02',t:'Architect',d:'Design API, data model, model pipeline and UI flow; pick the simplest stack that ships.'},{n:'03',t:'Build & Measure',d:'Build in small slices, test live, iterate on real feedback, deploy.'}].map((s,i)=><article key={s.n} className="reveal bg-[var(--surface)] border border-[var(--line)] rounded-[28px] p-6 shadow-sm hover:-translate-y-1 transition"><p className="font-display text-5xl font-bold text-[var(--line)]">{s.n}</p><h3 className="font-display font-bold text-2xl mt-3">{s.t}</h3><p className="text-[var(--ink-soft)] mt-2 leading-relaxed">{s.d}</p></article>)}
          </div>
          <div className="mt-6 bg-[var(--surface)] border border-[var(--line)] rounded-[28px] p-5 sm:p-6 reveal"><p className="font-bold">How my time splits</p><div className="flex h-4 rounded-full overflow-hidden mt-4" role="img" aria-label="55 percent building and shipping, 25 percent learning and ML, 20 percent community and leadership"><div className="bg-[var(--violet)]" style={{width:'55%'}}/><div className="bg-[var(--coral)]" style={{width:'25%'}}/><div className="bg-[var(--teal)]" style={{width:'20%'}}/></div><div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-sm"><span><b className="text-[var(--violet)]">55%</b> Building & Shipping</span><span><b className="text-[var(--coral)]">25%</b> Learning & ML</span><span><b className="text-[var(--teal)]">20%</b> Community & Leadership</span></div></div>
        </section>

        {/* TIMELINE */}
        <section id="experience" className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
          <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10">
            <div className="reveal"><p className="text-sm font-bold tracking-[0.18em] uppercase text-[var(--teal)]">Experience & education</p><h2 className="font-display font-semibold mt-3" style={{fontSize:'clamp(32px,4.5vw,52px)'}}>The road<br/><span className="italic text-[var(--violet)]">so far.</span></h2><p className="text-[var(--ink-soft)] mt-4">Tap any entry to expand it.</p></div>
            <div className="relative pl-7 border-l-2 border-[var(--line)] space-y-4">
              {[
                {date:'2024 Nov – 2025 Feb', title:'Internship Trainee', org:'Samsung Innovation Campus, Bengaluru', body:'Industry-oriented training in Python, problem-solving, core CS; structured assignments, real-world use cases, project-based learning under expert mentorship; strengthened analytical thinking, coding proficiency, readiness for SDE roles; Python programming + dataset analysis.', icon:Briefcase},
                {date:'2023 – 2027', title:'B.E. CSE', org:'RNS Institute of Technology, Rajarajeshwari Nagar', body:'CGPA 9.49/10. Coursework and projects across full-stack development, computer vision and machine learning.', icon:GraduationCap},
                {date:'2023', title:'12th — 93.5%', org:'Deeksha Centre for Learning, Kanakapura Road', body:'PUE Karnataka — 93.5%.', icon:BookOpen},
                {date:'2021', title:'10th — 98%', org:'Swargarani School', body:'ICSE — 98%.', icon:BookOpen},
                {date:'Leadership', title:'IEEE CTS Secretary · GDSC Member', org:'IEEE Consumer Technology Society + Google Developer Student Clubs', body:'Secretary of IEEE Consumer Technology Society; Member of Google Developer Student Clubs (GDSC). Community, learning and building with other students.', icon:Trophy},
              ].map((e,i)=>(
                <article key={e.title} className="relative bg-[var(--surface)] border border-[var(--line)] rounded-3xl shadow-sm overflow-hidden">
                  <span className="absolute -left-[37px] top-5 w-5 h-5 rounded-full bg-[var(--coral)] border-4 border-[var(--cream)]"/>
                  <button onClick={()=>setOpenExp(openExp===i?null:i)} className="w-full text-left p-5 flex items-center justify-between gap-3" aria-expanded={openExp===i}><span><span className="text-xs font-bold tracking-wider uppercase text-[var(--violet)]">{e.date}</span><span className="block font-display font-bold text-lg mt-1">{e.title}</span><span className="block text-sm text-[var(--ink-soft)]">{e.org}</span></span><span className="text-xl font-light shrink-0">{openExp===i?'−':'+'}</span></button>
                  {openExp===i && <p className="px-5 pb-5 text-[15px] text-[var(--ink-soft)] leading-relaxed">{e.body}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TOOLKIT */}
        <section id="toolkit" className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
          <div className="reveal flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-bold tracking-[0.18em] uppercase text-[var(--violet)]">Toolkit</p><h2 className="font-display font-semibold mt-3" style={{fontSize:'clamp(32px,4.5vw,52px)'}}>What I build <span className="italic text-[var(--coral)]">with.</span></h2></div><p className="text-sm text-[var(--muted)]">Tabs switch with a soft lift — hover any pill.</p></div>
          <div className="flex flex-wrap gap-2 mt-7" role="tablist" aria-label="Toolkit categories">{Object.keys(toolkitTabs).map(t=><button key={t} role="tab" aria-selected={toolTab===t} onClick={()=>setToolTab(t)} className={`px-4 py-2.5 rounded-full text-sm font-semibold ${toolTab===t?'bg-[var(--ink)] text-[var(--cream)]':'bg-[var(--surface)] border border-[var(--line)] hover:-translate-y-0.5'}`}>{t}</button>)}</div>
          <div key={toolTab} className="flex flex-wrap gap-2.5 mt-5">{toolkitTabs[toolTab].map((s,i)=>{const icons=[Code2,Database,Brain,Wrench,Palette]; const Icon=icons[i%icons.length]; return <span key={s} className="inline-flex items-center gap-2 bg-[var(--surface)] border border-[var(--line)] rounded-full px-4 py-3 font-semibold shadow-sm hover:-translate-y-1 hover:shadow-md transition"><Icon size={16} className="text-[var(--violet)]"/>{s}</span>;})}</div>
          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            {[{t:'Badminton',d:'Focus, footwork, and learning to reset fast after a lost point.',c:'bg-[var(--teal-soft)]',Icon:Trophy},{t:'Drawing',d:'Seeing clearly first — composition, patience, and small details.',c:'bg-[var(--coral-soft)]',Icon:Palette},{t:'Reading',d:'New ideas, new vocabularies, and better questions to ask users.',c:'bg-[var(--violet-soft)]',Icon:BookOpen}].map(x=><article key={x.t} className="reveal bg-[var(--surface)] border border-[var(--line)] rounded-[28px] p-6 shadow-sm"><span className={`w-11 h-11 rounded-2xl ${x.c} grid place-items-center`}><x.Icon size={20}/></span><h3 className="font-display font-bold text-xl mt-4">{x.t}</h3><p className="text-sm text-[var(--ink-soft)] mt-2 leading-relaxed">{x.d}</p></article>)}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 pt-6">
          <div className="bg-[#1B1626] text-white rounded-[32px] p-5 sm:p-8 lg:p-10 grid lg:grid-cols-2 gap-10 overflow-hidden relative">
            <div aria-hidden="true" className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[var(--violet)]/40 blur-3xl"/>
            <div className="relative">
              <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#FF8A78]">Contact</p>
              <h2 className="font-display font-semibold mt-3 leading-tight" style={{fontSize:'clamp(32px,4.5vw,52px)'}}>Let’s build something <span className="italic text-[#A894FF]">that ships.</span></h2>
              <p className="text-white/70 mt-4 leading-relaxed">Open to internships & entry-level SDE / Full-stack / AI roles — Class of 2027.</p>
              <ul className="space-y-3 mt-7 text-[15px]">
                <li><a href="mailto:ranjithasgowda245@gmail.com" className="flex gap-3 items-center hover:underline break-all"><Mail size={18} className="shrink-0 text-[#FF8A78]"/> ranjithasgowda245@gmail.com</a></li>
                <li><a href="mailto:ranjithas23cs@rnsit.ac.in" className="flex gap-3 items-center hover:underline break-all"><Mail size={18} className="shrink-0 text-[#FF8A78]"/> ranjithas23cs@rnsit.ac.in</a></li>
                <li><a href="tel:+919449045855" className="flex gap-3 items-center hover:underline"><Phone size={18} className="shrink-0 text-[#3ED1CB]"/> +91 94490 45855 · Phone / WhatsApp</a></li>
                <li><a href="https://www.linkedin.com/in/ranjitha-sridhar-a5b711311/" target="_blank" rel="noopener" className="flex gap-3 items-center hover:underline"><Linkedin size={18} className="shrink-0 text-[#A894FF]"/> LinkedIn</a></li>
                <li><a href="https://github.com/PraveenKumarM17/Gesture" target="_blank" rel="noopener noreferrer" className="flex gap-3 items-center hover:underline"><Github size={18} className="shrink-0"/> GitHub · ASL &amp; DBMS Repos</a></li>
                <li className="flex gap-3 items-center text-white/80"><MapPin size={18} className="shrink-0"/> Bengaluru, India</li>
              </ul>
              <div className="mt-7 bg-white/10 rounded-3xl p-4"><p className="text-xs text-white/60 uppercase tracking-wider font-bold">Beyond code</p><p className="text-sm mt-1 text-white/80">Badminton · Drawing · Reading — plus English, Kannada, Hindi, and German.</p></div>
            </div>
            <form onSubmit={submitForm} className="relative bg-[var(--surface)] text-[var(--ink)] rounded-[24px] p-5 sm:p-6 shadow-xl">
              <h3 className="font-display font-bold text-2xl">Send a message</h3>
              <p className="text-sm text-[var(--muted)] mt-1">Your message is saved to a secure inbox for Ranjitha.{savedCount!==null && ` ${savedCount} message(s) stored.`}</p>
              <label className="block mt-5 text-sm font-semibold" htmlFor="name">Name</label><input id="name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full mt-1.5 bg-[var(--surface-2)] rounded-2xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[var(--violet)]" placeholder="Your name" autoComplete="name"/>
              <label className="block mt-4 text-sm font-semibold" htmlFor="email">Email</label><input id="email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full mt-1.5 bg-[var(--surface-2)] rounded-2xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[var(--violet)]" placeholder="you@example.com" autoComplete="email"/>
              <label className="block mt-4 text-sm font-semibold" htmlFor="message">Message</label><textarea id="message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={4} className="w-full mt-1.5 bg-[var(--surface-2)] rounded-2xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[var(--violet)] resize-y" placeholder="Tell me about the role, project or idea…"/>
              <button type="submit" disabled={formStatus.type==='saving'} className="w-full mt-5 bg-[var(--coral)] disabled:opacity-60 text-white py-4 rounded-full font-bold inline-flex justify-center items-center gap-2">{formStatus.type==='saving'?'Saving…':'Send message'} <Send size={16}/></button>
              {formStatus.type!=='idle' && <p role="status" className={`mt-4 rounded-2xl px-4 py-3 text-sm font-medium flex gap-2 ${formStatus.type==='done'?'bg-emerald-50 text-emerald-800':formStatus.type==='error'?'bg-red-50 text-red-800':'bg-[var(--surface-2)]'}`}>{formStatus.type==='done' && <CheckCircle2 size={18} className="shrink-0"/>}{formStatus.text}{formStatus.saved!==undefined && <span> · Saved: {formStatus.saved} · Remaining: {formStatus.remaining}</span>}</p>}
              <p className="text-xs text-[var(--muted)] mt-3">Prefer email? Use either address on the left. Messages are stored securely and are not shown publicly.</p>
            </form>
          </div>
        </section>
      </main>
      <footer className="border-t border-[var(--line)]"><div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--muted)]"><p>© 2026 Ranjitha S · Built with React, FastAPI & curiosity</p><a href="#home" className="inline-flex items-center gap-1.5 font-semibold text-[var(--ink)] hover:underline">Back to top <ArrowUp size={15}/></a></div></footer>
    </div>
  );
}
