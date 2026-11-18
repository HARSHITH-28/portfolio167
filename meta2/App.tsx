import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, ArrowUp, Menu, X, Mail, Phone, MapPin, Linkedin, Github, Sparkles, Brain, Music, Camera, Cpu, Play, Trophy, BookOpen, Palette, Code2, Database, Wrench, GraduationCap, Briefcase, Send, CheckCircle2, ExternalLink, Languages, Users, Compass, Layers, Eye, Zap, Heart, Target, FlaskConical } from 'lucide-react';
import moodSyncImg from 'container:///mnt/data/src/assets/b0aad9431e81e9ce-image_20261118_143426.webp';
import campusImg from 'container:///mnt/data/src/assets/6ef9d7314d623add-image_20261118_143417_1.webp';
import signImg from 'container:///mnt/data/src/assets/affb17b1a87aa136-image_20261118_143425.webp';
import eventsImg from 'container:///mnt/data/src/assets/6d1fe10d2df559a3-image_20261118_143417.webp';

const PRODUCT_HREF = 'https://mangalam.navisto.cloud/';
const PRODUCT_NAME = 'Mangalam Moondra — AI Innovation Lead';

const row1 = ['Python','JavaScript','React.js','FastAPI','Node.js','TypeScript','C++','Java','C','C#','HTML5','CSS3','ASP.NET Core','REST APIs'];
const row2 = ['TensorFlow / Keras','OpenCV','Machine Learning','PostgreSQL','PostGIS','MySQL','Git','GitHub','VS Code','Google Colab','OOP','DSA','DBMS','Microservices','Event-Driven Architecture'];

type Project = {id:string; cat:string; tag:string; title:string; timeline:string; metric:string; problem:string; approach:string; fresh:string; architecture:string; role?:string; stack:string[]; image:string; demo:string; github:string; demoLabel:string};
const projects: Project[] = [
  {id:'moodsync', cat:'AI & ML', tag:'AI & ML · Full-Stack', title:'MoodSync-AI', timeline:'May 2026 – Present', metric:'Real-time emotion → music in seconds.', problem:'Music apps don’t adapt to how you feel now.', approach:'FastAPI REST APIs for emotion detection, prediction and recommendation, with a trained TensorFlow/Keras model and OpenCV image processing. The React frontend captures webcam frames and communicates via HTTP. Deployed as separate frontend/backend services.', fresh:'The playlist reacts live, not from history.', architecture:'React → FastAPI → TensorFlow/Keras + OpenCV', stack:['Python','FastAPI','React.js','TensorFlow/Keras','OpenCV'], image:moodSyncImg, demo:'https://moodsync-ai.vercel.app', github:'https://github.com/ranjithas/moodsync-ai', demoLabel:'Demo link — placeholder, replace with your deployment.'},
  {id:'campus', cat:'Full-Stack', tag:'Full-Stack · AR', title:'CampusAR', timeline:'2026', metric:'Indoor + outdoor navigation in one app.', problem:'New students get lost between buildings, entrances and indoor rooms.', approach:'Full-stack campus navigation with graph-based routing, GPS positioning and AR guidance. Node.js REST APIs with PostgreSQL/PostGIS and a layered backend (API / application / domain / data-access). Real-time GPS updates, QR-based indoor relocalization, WebSocket communication, AR directional guidance.', fresh:'QR relocalization + AR arrows bridge the last metres indoors.', architecture:'React + TypeScript → Node.js → PostgreSQL/PostGIS', stack:['React','TypeScript','Node.js','PostgreSQL','PostGIS','REST APIs'], image:campusImg, demo:'https://campusar.vercel.app', github:'https://github.com/ranjithas/campusar', demoLabel:'Demo link — placeholder, replace with your deployment.'},
  {id:'sign', cat:'Accessibility', tag:'AI & ML · Accessibility', title:'Real-time Sign Language Interpreter (ASL)', timeline:'Mar 2025 – May 2025', metric:'Live webcam → alphabet characters in real time.', problem:'Communication gap for users with hearing or speech challenges.', approach:'MediaPipe for hand detection + landmark extraction, CNN built with TensorFlow/Keras. Each frame is processed to detect landmarks, extract features and pass them to the model. Work included dataset preparation, model training & evaluation, image preprocessing and real-time inference. Mentor: Ms Chethana H R · Team size: 4.', fresh:'Assistive communication that runs live from the webcam, not from offline clips.', architecture:'Webcam → MediaPipe → CNN → Text', role:'Dataset preparation, model training, integrating real-time inference, accuracy & performance.', stack:['Python','OpenCV','TensorFlow','Keras','CNN','Deep Learning','Computer Vision','NumPy','MediaPipe'], image:signImg, demo:'https://sign-language-asl.vercel.app', github:'https://github.com/PraveenKumarM17/Gesture', demoLabel:'Demo link — placeholder, replace with your deployment.'},
  {id:'events', cat:'Full-Stack', tag:'Full-Stack', title:'Events Management System', timeline:'24 Mar – 27 Jul 2025 · Team size: 4', metric:'One place for students + organizers.', problem:'College events scattered across chats, sheets and posters.', approach:'Frontend Developer — UI with HTML, CSS, JavaScript, React.js, responsive pages, integrated APIs for event data, smooth UX for students and organizers. Collaborated with the backend team using GitHub for version control.', fresh:'Organizer + student flows in one clean interface.', architecture:'React frontend → REST APIs → Event data', stack:['HTML','CSS','JavaScript','React.js','UI Development'], image:eventsImg, demo:'https://events-management-system.vercel.app', github:'https://github.com/ssarveshr/DBMS-project-', demoLabel:'Demo link — placeholder, replace with your deployment.'},
];

const pipeline = [
  {n:1, title:'Capture', icon:Camera, desc:'Webcam frame in React.', detail:'The browser captures a single frame in the React frontend. That frame is the only input — no recording, no stored history.'},
  {n:2, title:'Detect', icon:Eye, desc:'OpenCV face detection + preprocessing.', detail:'OpenCV finds the face, crops it and normalises light and scale so the model sees a clean, consistent input.'},
  {n:3, title:'Predict', icon:Brain, desc:'TensorFlow/Keras emotion model.', detail:'A trained CNN reads the processed frame and returns an emotion prediction with a confidence score.'},
  {n:4, title:'Recommend', icon:Music, desc:'FastAPI music recommendation.', detail:'FastAPI maps the predicted emotion to a curated set of tracks and returns them as a simple REST response.'},
  {n:5, title:'Enjoy', icon:Music, desc:'Frontend plays track + updates history.', detail:'The frontend plays the track and adds the moment to mood history, so the next recommendation starts from now — not yesterday.'},
];
function ScanIcon(){ return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/></svg>; }

type MoodKey = 'Happy' | 'Calm' | 'Focused' | 'Energetic';
const moods: Record<MoodKey,{label:string; color:string; tracks:string[]; confidence:number; note:string}> = {
  Happy:{label:'Happy', color:'#FFB627', tracks:['Morning Light — Acoustic','Golden Hour Drive','Bright Mornings Mix'], confidence:92, note:'Upbeat tempo, major keys, high energy.'},
  Calm:{label:'Calm', color:'#0F5C46', tracks:['Quiet Water — Ambient','Slow Light Piano','Evening Breeze'], confidence:88, note:'Low tempo, soft textures, room to breathe.'},
  Focused:{label:'Focused', color:'#18201C', tracks:['Deep Work — Lo-fi','Steady Signal','Code in Flow'], confidence:90, note:'Steady rhythm, minimal vocals, long focus blocks.'},
  Energetic:{label:'Energetic', color:'#E07A2E', tracks:['Start the Run — Pop','Neon Streets','Lift Off'], confidence:94, note:'High BPM, driving beat, built to move.'},
};

const kb: {keys:string[]; answer:string}[] = [
  {keys:['moodsync','mood'], answer:'MoodSync-AI turns a live webcam frame into music. OpenCV detects the face, a TensorFlow/Keras model predicts the emotion, FastAPI returns recommendations, and the React frontend plays the track. It reacts to how you feel now — not to your listening history.'},
  {keys:['stack','strongest','skills','language'], answer:'My strongest stack is Python + FastAPI on the backend, React + TypeScript on the frontend, and TensorFlow/Keras + OpenCV for AI and computer vision, with PostgreSQL/PostGIS and MySQL for data.'},
  {keys:['campusar','campus','ar'], answer:'CampusAR is indoor + outdoor campus navigation in one app. It uses graph-based routing, GPS, PostgreSQL/PostGIS, Node.js REST APIs, QR-based indoor relocalization and AR directional guidance to bridge the last metres indoors.'},
  {keys:['sign','asl','gesture'], answer:'The Real-time Sign Language Interpreter uses MediaPipe hand landmarks and a CNN built with TensorFlow/Keras to turn live webcam gestures into alphabet characters in real time. I worked on dataset preparation, model training and real-time inference.'},
  {keys:['internship','open','job','role','hire','sde'], answer:'Yes — I am open to internships and entry-level SDE / Full-stack / AI roles. I am in the Class of 2027 at RNSIT, Bengaluru, with a CGPA of 9.49/10. The contact form below is the fastest way to reach me.'},
  {keys:['build','project','how do you'], answer:'I build in three moves: Discover the user and problem, Architect the API, data model and UI flow, then Ship & Measure in small slices — test live, iterate on real feedback, deploy.'},
  {keys:['education','college','cgpa','rnsit','study'], answer:'I am a B.E. Computer Science Engineering student at RNS Institute of Technology, Bengaluru (2023–2027), CGPA 9.49/10. Before that: 93.5% in 12th at Deeksha Centre for Learning (2023) and 98% in 10th, ICSE, at Swargarani School (2021).'},
  {keys:['event'], answer:'The Events Management System brings students and organizers into one clean interface. I was the Frontend Developer, building responsive pages in HTML, CSS, JavaScript and React.js and integrating APIs for event data.'},
  {keys:['experience','samsung'], answer:'From Nov 2024 to Feb 2025 I was an Internship Trainee at Samsung Innovation Campus, Bengaluru — industry-oriented training in Python, problem-solving and core CS, with structured assignments and project-based learning.'},
  {keys:['leader','ieee','gdsc'], answer:'I am Secretary of the IEEE Consumer Technology Society and a Member of Google Developer Student Clubs (GDSC). Both roles are about learning in public and building with other students.'},
];

const toolkitTabs: Record<string,string[]> = {
  'Languages':['C++','Java','Python','C','JavaScript','C#'],
  'Web & Backend':['HTML5','CSS3','JavaScript','React.js','FastAPI','ASP.NET Core Web API','REST APIs','Node.js','TypeScript'],
  'AI & ML & Data':['OpenCV','TensorFlow / Keras','Pandas','NumPy','Matplotlib','ML','EDA','MediaPipe','CNN'],
  'Product & Delivery':['OOP','DSA','DBMS','API Development','Microservices Fundamentals','Event-Driven Architecture','Git','GitHub','VS Code','Google Colab','Team Coordination','Leadership','Presentation'],
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
  const [heroXY,setHeroXY]=useState({x:0,y:0});
  const [filter,setFilter]=useState('All');
  const [selected,setSelected]=useState<Project>(projects[0]);
  const [step,setStep]=useState(0);
  const [mood,setMood]=useState<MoodKey>('Happy');
  const [moodPulse,setMoodPulse]=useState(0);
  const [chat,setChat]=useState<{from:'user'|'bot'; text:string}[]>([{from:'bot', text:'Hi, I’m Ranjitha’s portfolio assistant. Ask me about projects, stack, education or internships — or tap a question below.'}]);
  const [typing,setTyping]=useState(false);
  const [input,setInput]=useState('');
  const [toolTab,setToolTab]=useState('Languages');
  const [openExp,setOpenExp]=useState<number|null>(0);
  const [form,setForm]=useState({name:'',email:'',message:''});
  const [formStatus,setFormStatus]=useState<{type:'idle'|'saving'|'done'|'error'; text:string; saved?:number; remaining?:number}>({type:'idle',text:''});
  const [savedCount,setSavedCount]=useState<number|null>(null);
  const [counters,setCounters]=useState({cgpa:0, projects:0, twelfth:0, tenth:0});
  const counted = useRef(false);
  const chatEnd = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const onScroll=()=>{
      const h=document.documentElement;
      setProgress(h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100);
      const ids=['home','about','pipeline','work','ask','experience','toolkit','contact'];
      let cur='home';
      for(const id of ids){ const el=document.getElementById(id); if(el && el.getBoundingClientRect().top<180) cur=id; }
      setActive(cur);
    };
    window.addEventListener('scroll',onScroll,{passive:true}); onScroll(); return ()=>window.removeEventListener('scroll',onScroll);
  },[]);
  useEffect(()=>{
    const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible'); if(e.target.id==='stats' && !counted.current){counted.current=true; const t0=performance.now(); const tick=(t:number)=>{const p=Math.min(1,(t-t0)/1400); const ease=1-Math.pow(1-p,3); setCounters({cgpa:+(9.49*ease).toFixed(2), projects:Math.round(4*ease), twelfth:+(93.5*ease).toFixed(1), tenth:Math.round(98*ease)}); if(p<1) requestAnimationFrame(tick)}; requestAnimationFrame(tick);}}}),{threshold:.15});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el)); return ()=>io.disconnect();
  },[]);
  useEffect(()=>{ chatEnd.current?.scrollIntoView({behavior:'smooth', block:'nearest'}); },[chat,typing]);

  const ask=(q:string)=>{
    const text=q.trim(); if(!text) return;
    setChat(c=>[...c,{from:'user',text}]); setInput(''); setTyping(true);
    const found=kb.find(k=>k.keys.some(key=>text.toLowerCase().includes(key)));
    const answer=found?found.answer:'I can answer about projects, stack, education and internships — try one of the questions above.';
    setTimeout(()=>{ setTyping(false); setChat(c=>[...c,{from:'bot',text:answer}]); },900);
  };

  const filtered = filter==='All'?projects:projects.filter(p=>p.cat===filter);
  const moodData=moods[mood];

  const submitForm=async(e:React.FormEvent)=>{
    e.preventDefault();
    if(!form.name.trim()||!form.email.trim()||!form.message.trim()){ setFormStatus({type:'error',text:'Please fill in your name, email and message.'}); return; }
    setFormStatus({type:'saving',text:'Saving your message…'});
    const row={name:form.name.trim(), email:form.email.trim(), message:form.message.trim(), subject:'Portfolio contact'};
    const key=`contact-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
    let saved=0; let error:string|null=null;
    try{ await apiCall('records.create',{collection:'contact_messages', value:row, idempotency_key:key}); saved=1; }
    catch(err){ error=err instanceof Error?err.message:String(err); }
    let reloadError:string|null=null;
    try{ const data=await reloadRecords(); if(Array.isArray(data?.records)) setSavedCount(data.records.length); }catch(err){ reloadError=err instanceof Error?err.message:String(err); }
    if(error){ setFormStatus({type:'error', text:`Message could not be saved: ${error}${reloadError?` · Refresh check: ${reloadError}`:''}`, saved, remaining:1}); return; }
    setFormStatus({type:'done', text:`Message saved — thank you, ${form.name.trim()}. I’ll get back to you soon.${reloadError?` (Refresh check: ${reloadError})`:''}`, saved, remaining:0});
    setForm({name:'',email:'',message:''});
  };

  const tilt=(e:React.MouseEvent<HTMLDivElement>)=>{
    const el=e.currentTarget; const r=el.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    el.style.transform=`perspective(900px) rotateY(${x*7}deg) rotateX(${-y*7}deg) translateY(-4px)`;
  };
  const untilt=(e:React.MouseEvent<HTMLDivElement>)=>{ e.currentTarget.style.transform=''; };

  const nav=[['About','about'],['Pipeline','pipeline'],['Work','work'],['Ask Me','ask'],['Experience','experience'],['Toolkit','toolkit'],['Contact','contact']] as const;

  return (
    <div data-safe-area-inset-root style={{boxSizing:'border-box', paddingTop:'var(--safe-area-inset-top)', minHeight:'100vh', background:'var(--cream)', color:'var(--ink)'}} className="overflow-x-clip">
      <header data-safe-area-sticky-top style={{top:'var(--safe-area-inset-top)'}} className="sticky z-50 border-b border-[var(--line)] bg-[var(--cream)]/85 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="h-[3px] bg-[var(--line)] rounded-full overflow-hidden mt-2"><div className="h-full bg-[var(--forest)] transition-all" style={{width:`${progress}%`}} /></div>
          <div className="flex items-center justify-between gap-3 py-3">
            <a href="#home" className="flex items-center gap-3 shrink-0" aria-label="Ranjitha S — home">
              <span className="w-10 h-10 rounded-2xl bg-[var(--forest)] text-white grid place-items-center font-display font-bold text-lg">RS</span>
              <span className="leading-none"><span className="block font-display font-bold text-[19px]">RS — Ranjitha S</span><span className="block text-[11px] tracking-[0.16em] uppercase text-[var(--muted)] mt-1">CSE · Bengaluru</span></span>
            </a>
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              {nav.map(([label,id])=><a key={id} href={`#${id}`} className={`px-3 py-2 rounded-full text-[14px] font-medium ${active===id?'bg-[var(--forest)] text-white':'text-[var(--ink-soft)] hover:bg-[var(--sage)]'}`}>{label}</a>)}
            </nav>
            <div className="flex items-center gap-2">
              <a href="#work" className="hidden md:inline-flex bg-[var(--forest)] text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-[var(--amber)] hover:text-[var(--ink)] transition">See the work</a>
              <a href="#contact" className="hidden sm:inline-flex bg-[var(--amber)] text-[var(--ink)] px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-[var(--forest)] hover:text-white transition">Get in touch <ArrowRight size={15}/></a>
              <button onClick={()=>setMenu(v=>!v)} className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)]" aria-label={menu?'Close menu':'Open menu'} aria-expanded={menu}>{menu?<X size={19}/>:<Menu size={19}/>}</button>
            </div>
          </div>
        </div>
        {menu && <nav className="lg:hidden border-t border-[var(--line)] bg-[var(--cream)] px-4 py-3 grid gap-1" aria-label="Mobile">{nav.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)} className="px-3 py-3 rounded-xl font-medium hover:bg-[var(--sage)]">{label}</a>)}</nav>}
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="relative overflow-x-clip">
          <div aria-hidden="true" className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#FFE8D6] blur-3xl opacity-80 blob-a" />
          <div aria-hidden="true" className="absolute top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#DCEFE6] blur-3xl opacity-90 blob-b" />
          <div aria-hidden="true" className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-[#FFF0C8] blur-3xl opacity-80" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-6">
            <article className="bg-white/90 border border-[var(--line)] rounded-3xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center gap-3 max-w-3xl">
              <span className="w-10 h-10 shrink-0 rounded-2xl bg-[var(--forest)] text-white grid place-items-center font-display font-bold">M</span>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] tracking-[0.16em] uppercase text-[var(--muted)]">Blueprint reference · structure only</p>
                <h2 className="font-display font-bold text-lg leading-tight mt-0.5"><a href={PRODUCT_HREF} target="_blank" rel="noopener" className="hover:underline inline-flex items-center gap-1.5">{PRODUCT_NAME} <ArrowUpRight size={16} aria-hidden="true"/></a></h2>
                <p className="text-sm text-[var(--ink-soft)]">Used only as a page blueprint — hero → about → showcase → contact. This portfolio is distinctly Ranjitha’s own design and content.</p>
              </div>
            </article>
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-10 sm:pt-12 pb-14 grid lg:grid-cols-[1.15fr_.85fr] gap-10 items-center" onMouseMove={(e)=>{const r=e.currentTarget.getBoundingClientRect(); setHeroXY({x:(e.clientX-r.left)/r.width-.5, y:(e.clientY-r.top)/r.height-.5});}}>
            <div>
              <p className="text-[13px] font-bold tracking-[0.18em] uppercase text-[var(--forest)]">Ranjitha S — Computer Science Engineering Student</p>
              <h1 className="font-display font-semibold leading-[0.95] mt-5" style={{fontSize:'clamp(44px,7.2vw,84px)'}}>Full-Stack &amp;<br/>AI <span className="italic text-[var(--forest)]">Builder</span></h1>
              <p className="mt-5 text-[19px] sm:text-[22px] font-medium text-[var(--ink-soft)] leading-relaxed max-w-[640px]">Building full-stack apps, computer vision and machine learning — from Bengaluru to production.</p>
              <p className="mt-4 text-[15px] text-[var(--muted)] font-medium">Bengaluru, Karnataka • RNS Institute of Technology • Class of 2027</p>
              <div className="flex flex-wrap gap-3 mt-7">
                <a href="#work" className="inline-flex items-center gap-2 bg-[var(--forest)] text-white px-6 py-3.5 rounded-full font-semibold shadow-lg hover:bg-[var(--amber)] hover:text-[var(--ink)] transition hover:-translate-y-0.5">See the work <ArrowRight size={17}/></a>
                <a href="#contact" className="inline-flex items-center gap-2 bg-white border border-[var(--line)] px-6 py-3.5 rounded-full font-semibold shadow-sm hover:bg-[var(--amber)] transition hover:-translate-y-0.5">Get in touch</a>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 bg-white border border-[var(--line)] rounded-full px-3 py-1.5 text-[13px] font-medium shadow-sm"><span className="w-2 h-2 rounded-full bg-emerald-500"/> Available for internships</span>
                <span className="bg-[var(--sage)] text-[var(--forest)] rounded-full px-3 py-1.5 text-[13px] font-semibold">Open to SDE / Full-stack / AI roles</span>
              </div>
              <div className="mt-8 flex items-center gap-3 text-sm text-[var(--muted)]"><span className="w-9 h-[1px] bg-[var(--muted)]"/> Scroll to see how I think, build &amp; ship <span aria-hidden="true">↓</span></div>
            </div>
            <div className="relative" style={{transform:`translate(${heroXY.x*10}px, ${heroXY.y*8}px)`, transition:'transform .3s ease'}}>
              <div className="relative rounded-[28px] bg-white border border-[var(--line)] shadow-[var(--shadow)] p-4 sm:p-5 rotate-[-1deg]">
                <div className="absolute -inset-2 rounded-[32px] border-2 border-[var(--amber)]/60 animate-spin-slow pointer-events-none" aria-hidden="true" style={{borderStyle:'dashed'}} />
                <div className="relative flex items-center justify-between"><div className="flex items-center gap-3"><span className="w-14 h-14 rounded-[20px] bg-[var(--forest)] text-white grid place-items-center font-display font-bold text-2xl">RS</span><div><p className="font-bold text-lg">Ranjitha S</p><p className="text-xs text-[var(--muted)]">B.E. CSE · 2023–2027</p></div></div><span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-semibold">Available</span></div>
                <div className="relative mt-4 rounded-2xl overflow-hidden bg-[var(--sage)]"><img src={moodSyncImg} alt="MoodSync-AI cover" className="w-full h-[220px] sm:h-[260px] object-cover hover:scale-[1.04] transition duration-700"/></div>
                <div className="relative grid grid-cols-3 gap-2 mt-4 text-center"><div className="bg-[var(--sage)] rounded-xl py-3"><p className="font-display font-bold text-lg">9.49</p><p className="text-[11px] text-[var(--muted)]">CGPA / 10</p></div><div className="bg-[var(--amber-soft)] rounded-xl py-3"><p className="font-display font-bold text-lg">4</p><p className="text-[11px] text-[var(--muted)]">Major Projects</p></div><div className="bg-[var(--peach)] rounded-xl py-3"><p className="font-display font-bold text-lg">2</p><p className="text-[11px] text-[var(--muted)]">Leadership roles</p></div></div>
                <p className="relative text-center text-sm font-semibold mt-4 text-[var(--forest)]">Python • React • FastAPI</p>
              </div>
              <div className="absolute -left-3 sm:-left-8 top-16 bg-white rounded-2xl shadow-lg border border-[var(--line)] px-3 py-2 flex items-center gap-2 animate-floaty"><Brain size={18} className="text-[var(--forest)]"/><span className="text-xs font-semibold">CGPA 9.49/10</span></div>
              <div className="absolute -right-2 sm:-right-5 bottom-16 bg-[var(--forest)] text-white rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2 animate-floaty" style={{animationDelay:'1.2s'}}><MapPin size={16} className="text-[var(--amber)]"/><span className="text-xs font-semibold">4 Major Projects</span></div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <div className="reveal max-w-4xl">
            <p className="text-sm font-bold tracking-[0.18em] uppercase text-[var(--forest)]">About</p>
            <h2 className="font-display font-semibold leading-tight mt-3" style={{fontSize:'clamp(34px,4.5vw,56px)'}}>Full-stack + AI,<br/><span className="italic text-[var(--forest)]">built to ship.</span></h2>
            <p className="text-[var(--ink-soft)] text-[17px] leading-relaxed mt-5">Hi, I’m Ranjitha — a Computer Science Engineering student with hands-on experience in software development, full-stack applications, computer vision and machine learning. I have experience building and deploying real-world apps with Python, JavaScript, React, FastAPI, databases and REST APIs. I bring a strong foundation in OOP, DSA, DBMS, problem solving and software engineering, with an interest in backend, cloud-native and scalable software.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[
              {t:'Now at', d:'B.E. CSE, RNSIT (2023–2027)', Icon:GraduationCap, c:'bg-[var(--sage)]'},
              {t:'Currently', d:'Student + Builder, focused on full-stack & AI projects', Icon:Sparkles, c:'bg-[var(--peach)]'},
              {t:'Domains', d:'Full-stack apps • Computer Vision • ML / AI • Accessibility & Campus Tech', Icon:Layers, c:'bg-[var(--lilac)]'},
              {t:'Time split', d:'55% building • 25% learning • 20% community', Icon:Target, c:'bg-[var(--amber-soft)]'},
              {t:'Education', d:'B.E. CSE • RNSIT', Icon:BookOpen, c:'bg-[var(--sage)]'},
              {t:'Languages', d:'English, Kannada, Hindi, German (beginner)', Icon:Languages, c:'bg-[var(--peach)]'},
            ].map(x=><article key={x.t} className="reveal bg-white border border-[var(--line)] rounded-3xl p-5 shadow-sm"><span className={`w-11 h-11 rounded-2xl ${x.c} grid place-items-center`}><x.Icon size={20} className="text-[var(--forest)]"/></span><h3 className="font-bold mt-4">{x.t}</h3><p className="text-sm text-[var(--ink-soft)] mt-1.5 leading-relaxed">{x.d}</p></article>)}
          </div>
          <div className="mt-8 space-y-3 text-[16px] leading-relaxed">
            <p>Four projects shipped across emotion-aware music, campus navigation, accessibility and events. <a href="#work" className="font-bold text-[var(--forest)] underline underline-offset-4 decoration-[var(--amber)] decoration-2">See the work →</a></p>
            <p>From competitive programming at Samsung Innovation Campus to leading as IEEE CTS Secretary. <a href="#experience" className="font-bold text-[var(--forest)] underline underline-offset-4 decoration-[var(--amber)] decoration-2">My experience →</a></p>
            <p>Need software that ships? Let’s talk. <a href="#contact" className="font-bold text-[var(--forest)] underline underline-offset-4 decoration-[var(--amber)] decoration-2">Get in touch →</a></p>
          </div>
        </section>

        {/* STATS */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-14">
          <div id="stats" className="reveal bg-[var(--dark)] text-white rounded-[28px] p-6 sm:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {v:`${counters.cgpa} / 10`, l:'CGPA at RNSIT'},
                {v:`${counters.projects}`, l:'Major projects shipped'},
                {v:`${counters.twelfth}%`, l:'12th, PUE Karnataka (Deeksha, 2023)'},
                {v:`${counters.tenth}%`, l:'10th, ICSE (Swargarani, 2021)'},
              ].map(s=><div key={s.l} className="bg-white/10 rounded-3xl p-5"><p className="font-display font-bold leading-none" style={{fontSize:'clamp(26px,3.5vw,38px)'}}>{s.v}</p><p className="text-sm text-white/75 mt-2 leading-snug">{s.l}</p></div>)}
            </div>
            <div className="flex flex-wrap gap-2 mt-4"><span className="bg-[var(--amber)] text-[var(--ink)] px-3 py-1.5 rounded-full text-sm font-bold">78 / 100 — NPTEL Networking</span><span className="bg-white/15 px-3 py-1.5 rounded-full text-sm font-semibold">2 Leadership roles</span></div>
          </div>
        </section>

        {/* MARQUEES */}
        <section className="py-6 overflow-x-clip" aria-label="Skills ticker">
          <div className="marquee-wrap overflow-hidden py-2 max-w-full"><div className="marquee-track gap-3 pr-3">{[...row1,...row1].map((s,i)=><span key={i} className="whitespace-nowrap bg-[var(--forest)] text-white px-5 py-3 rounded-full font-semibold text-sm sm:text-base">{s}</span>)}</div></div>
          <div className="marquee-wrap marquee-rev overflow-hidden mt-3 py-2 max-w-full"><div className="marquee-track gap-3 pr-3">{[...row2,...row2].map((s,i)=><span key={i} className="whitespace-nowrap bg-white border border-[var(--line)] px-5 py-3 rounded-full font-semibold text-sm sm:text-base">{s}</span>)}</div></div>
        </section>

        {/* PIPELINE */}
        <section id="pipeline" className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <div className="reveal max-w-3xl"><p className="text-sm font-bold tracking-[0.18em] uppercase text-[var(--forest)]">Interactive demo</p><h2 className="font-display font-semibold mt-3" style={{fontSize:'clamp(32px,4.5vw,54px)'}}>Watch MoodSync-AI <span className="italic text-[var(--forest)]">think.</span></h2><p className="text-[var(--ink-soft)] mt-3">How MoodSync-AI works: capture, detect, predict, recommend — and a playlist that fits your mood. Tap a step. This is an illustrative walkthrough of the real pipeline — not a live model.</p></div>
          <div className="grid lg:grid-cols-[1fr_1.05fr] gap-6 mt-8">
            <div className="reveal bg-white border border-[var(--line)] rounded-[28px] p-4 sm:p-6 shadow-sm">
              <div className="flex gap-2 sm:gap-3" role="tablist" aria-label="Pipeline steps">
                {pipeline.map((p,i)=><button key={p.n} role="tab" aria-selected={step===i} onClick={()=>setStep(i)} className={`flex-1 rounded-2xl px-2 py-3 sm:py-4 text-center transition ${step===i?'bg-[var(--forest)] text-white shadow-md':'bg-[var(--sage)] hover:-translate-y-0.5'}`}><p.icon/><span className="block text-[12px] sm:text-sm font-bold mt-1.5">{p.n}. {p.title}</span></button>)}
              </div>
              <div className="h-2 bg-[var(--line)] rounded-full mt-4 overflow-hidden"><div className="h-full bg-gradient-to-r from-[var(--forest)] to-[var(--amber)] transition-all duration-500" style={{width:`${((step+1)/5)*100}%`}}/></div>
              <div className="mt-6 min-h-[120px]"><h3 className="font-display text-2xl font-bold">{pipeline[step].title}</h3><p className="font-medium mt-1">{pipeline[step].desc}</p><p className="text-[var(--ink-soft)] mt-2 leading-relaxed">{pipeline[step].detail}</p></div>
              <p className="text-xs text-[var(--muted)] border-t border-[var(--line)] pt-3">Step {step+1} of 5 · Capture → Detect → Predict → Recommend → Enjoy</p>
              <div className="mt-5"><p className="font-bold text-sm">Every recommendation carries:</p><div className="flex flex-wrap gap-2 mt-2">{['Emotion evidence','Confidence score','Model + API cited','Privacy: frame processed, not stored','User can skip / change mood'].map(c=><span key={c} className="bg-[var(--amber-soft)] px-3 py-1.5 rounded-full text-[13px] font-semibold">{c}</span>)}</div></div>
            </div>
            <div className="reveal bg-[var(--dark)] text-white rounded-[28px] p-5 sm:p-6 shadow-lg">
              <div className="flex items-center justify-between gap-3"><div><p className="text-xs tracking-[0.18em] uppercase text-white/60">Fake live demo · illustrative</p><h3 className="font-display text-2xl font-bold mt-1">Pick a mood</h3></div><span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 text-xs font-semibold"><span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"/> LIVE</span></div>
              <div className="flex flex-wrap gap-2 mt-5" role="group" aria-label="Choose a mood">{(Object.keys(moods) as Array<keyof typeof moods>).map(m=><button key={m} onClick={()=>{setMood(m); setMoodPulse(v=>v+1);}} className={`px-4 py-2.5 rounded-full font-semibold text-sm transition ${mood===m?'bg-white text-[var(--ink)]':'bg-white/10 hover:bg-white/20'}`}>{m}</button>)}</div>
              <div key={moodPulse} className="mt-5 bg-white/10 rounded-3xl p-4">
                <div className="flex items-center justify-between gap-3"><div><p className="text-sm text-white/70">Detected emotion</p><p className="font-display text-3xl font-bold" style={{color:moodData.color}}>{moodData.label}</p></div><span className="text-xs bg-white text-[var(--ink)] px-3 py-1.5 rounded-full font-bold">Confidence {moodData.confidence}%</span></div>
                <div className="h-2.5 bg-white/20 rounded-full mt-4 overflow-hidden"><div className="h-full rounded-full transition-all duration-700" style={{width:`${moodData.confidence}%`, background:moodData.color}}/></div>
                <p className="text-sm text-white/80 mt-3">{moodData.note}</p>
                <div className="mt-4 space-y-2">{moodData.tracks.map((t,i)=><div key={t} className="flex items-center gap-3 bg-black/20 rounded-2xl px-3 py-2.5"><span className="w-8 h-8 rounded-full bg-white text-[var(--ink)] grid place-items-center"><Play size={14}/></span><span className="text-sm font-medium">{i+1}. {t}</span></div>)}</div>
              </div>
              <p className="text-[11px] text-white/50 mt-3">Illustrative playlist — no real model or audio is running here.</p>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="bg-[#12211C] text-white py-14 sm:py-20 overflow-x-clip">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4 reveal"><div><p className="text-sm font-bold tracking-[0.18em] uppercase text-[var(--amber)]">Featured work</p><h2 className="font-display font-semibold mt-3" style={{fontSize:'clamp(32px,4.5vw,54px)'}}>Projects that <span className="italic text-[var(--amber)]">ship,</span> not just demos.</h2></div><p className="text-white/70 max-w-md text-sm leading-relaxed">Four projects across emotion-aware music, campus navigation, accessibility and events. Select a project to open its full story.</p></div>
            <div className="flex flex-wrap gap-2 mt-7" role="tablist" aria-label="Filter projects">{['All','AI & ML','Full-Stack','Accessibility'].map(f=><button key={f} role="tab" aria-selected={filter===f} onClick={()=>setFilter(f)} className={`px-4 py-2.5 rounded-full text-sm font-semibold ${filter===f?'bg-white text-black':'bg-white/10 hover:bg-white/20'}`}>{f}</button>)}</div>
            <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-5 mt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 content-start">
                {filtered.map(p=>(
                  <article key={p.id} onMouseMove={tilt} onMouseLeave={untilt} onClick={()=>setSelected(p)} className={`tilt text-left cursor-pointer rounded-3xl overflow-hidden border ${selected.id===p.id?'border-white bg-white text-black shadow-xl':'border-white/15 bg-white/5 hover:bg-white/10'}`} aria-label={`Open ${p.title}`}>
                    <img src={p.image} alt={p.title} className="w-full h-[150px] object-cover"/>
                    <div className="p-4"><span className="text-[11px] font-bold tracking-wider uppercase text-[var(--forest)]">{p.tag}</span><h3 className="font-display font-bold text-lg leading-tight mt-1">{p.title}</h3><p className={`text-xs mt-1 ${selected.id===p.id?'text-black/60':'text-white/60'}`}>{p.timeline} · {p.metric}</p></div>
                  </article>
                ))}
              </div>
              <article className="bg-white text-[var(--ink)] rounded-[28px] overflow-hidden shadow-2xl reveal">
                <div className="relative"><img src={selected.image} alt={selected.title} className="w-full h-[240px] sm:h-[300px] object-cover"/><span className="absolute top-4 left-4 bg-white rounded-full px-3 py-1.5 text-xs font-bold shadow">{selected.tag}</span><span className="absolute top-4 right-4 bg-[var(--forest)] text-white rounded-full px-3 py-1.5 text-xs font-bold">{selected.timeline}</span></div>
                <div className="p-5 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3"><h3 className="font-display font-bold leading-tight" style={{fontSize:'clamp(26px,3.5vw,36px)'}}>{selected.title}</h3><span className="bg-[var(--amber-soft)] text-[var(--ink)] px-3 py-1.5 rounded-full text-sm font-bold">{selected.metric}</span></div>
                  <div className="grid sm:grid-cols-2 gap-4 mt-6 text-[15px] leading-relaxed">
                    <div><p className="font-bold text-[var(--forest)]">Problem</p><p className="text-[var(--ink-soft)] mt-1">{selected.problem}</p></div>
                    <div><p className="font-bold text-[var(--forest)]">What’s new</p><p className="text-[var(--ink-soft)] mt-1">{selected.fresh}</p></div>
                    <div className="sm:col-span-2"><p className="font-bold text-[var(--forest)]">Approach</p><p className="text-[var(--ink-soft)] mt-1">{selected.approach}</p></div>
                    <div className="sm:col-span-2"><p className="font-bold">Architecture</p><p className="text-[var(--ink-soft)] mt-1">{selected.architecture}</p></div>
                    {selected.role && <div className="sm:col-span-2"><p className="font-bold">My role</p><p className="text-[var(--ink-soft)] mt-1">{selected.role}</p></div>}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-5">{selected.stack.map(s=><span key={s} className="bg-[var(--sage)] border border-[var(--line)] px-3 py-1.5 rounded-full text-[13px] font-semibold">{s}</span>)}</div>
                  <div className="flex flex-wrap gap-3 mt-6">
                    <a href={selected.demo} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-[var(--forest)] text-white px-5 py-3 rounded-full font-semibold hover:bg-[var(--amber)] hover:text-[var(--ink)] transition">Live Demo <ExternalLink size={15}/></a>
                    <a href={selected.github} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-white border border-[var(--line)] px-5 py-3 rounded-full font-semibold hover:bg-[var(--sage)] transition"><Github size={16}/> GitHub</a>
                  </div>
                  <p className="text-xs text-[var(--muted)] mt-3">{selected.demoLabel}</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* EARLIER BUILDS */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
          <div className="reveal max-w-3xl"><p className="text-sm font-bold tracking-[0.18em] uppercase text-[var(--forest)]">Earlier builds</p><h2 className="font-display font-semibold mt-3" style={{fontSize:'clamp(32px,4.5vw,52px)'}}>Earlier builds &amp; where the <span className="italic text-[var(--forest)]">work started.</span></h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {[
              {t:'Samsung Innovation Campus', s:'Competitive Programming', d:'Practised LeetCode / CodeChef, algorithms & DSA in Python, efficient code under time constraints.', Icon:Cpu, c:'bg-[var(--sage)]'},
              {t:'NPTEL Demystifying Networking', s:'78 / 100 · IIT Madras', d:'Network architecture, TCP/IP, routing, switching, data communication.', Icon:BookOpen, c:'bg-[var(--peach)]'},
              {t:'GDSC Member', s:'Community & learning', d:'Google Developer Student Clubs, workshops & peer learning.', Icon:Users, c:'bg-[var(--lilac)]'},
              {t:'IEEE Consumer Technology Society', s:'Secretary', d:'Leadership, events, coordination.', Icon:Trophy, c:'bg-[var(--amber-soft)]'},
            ].map(x=><article key={x.t} className="reveal bg-white border border-[var(--line)] rounded-[28px] p-6 shadow-sm hover:-translate-y-1 transition"><span className={`w-11 h-11 rounded-2xl ${x.c} grid place-items-center`}><x.Icon size={20} className="text-[var(--forest)]"/></span><h3 className="font-display font-bold text-xl mt-4 leading-tight">{x.t}</h3><p className="text-sm font-bold text-[var(--forest)] mt-1">{x.s}</p><p className="text-sm text-[var(--ink-soft)] mt-2 leading-relaxed">{x.d}</p></article>)}
          </div>
        </section>

        {/* ASK ME */}
        <section id="ask" className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
          <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-8 items-start">
            <div className="reveal"><p className="text-sm font-bold tracking-[0.18em] uppercase text-[var(--forest)]">Ask me</p><h2 className="font-display font-semibold mt-3" style={{fontSize:'clamp(32px,4.5vw,52px)'}}>Got a question?<br/><span className="italic text-[var(--forest)]">Just ask.</span></h2><p className="text-[var(--ink-soft)] mt-4 leading-relaxed">Projects, stack, education or how I work — pick a question or type your own. Answers come from a built-in knowledge base based on my résumé — no external API.</p><div className="flex flex-wrap gap-2 mt-5">{['What is MoodSync-AI?','What is your strongest stack?','Tell me about CampusAR','Are you open to internships?','How do you build a project?'].map(q=><button key={q} onClick={()=>ask(q)} className="bg-white border border-[var(--line)] hover:border-[var(--forest)] px-3.5 py-2 rounded-full text-sm font-medium text-left">{q}</button>)}</div></div>
            <div className="reveal bg-white border border-[var(--line)] rounded-[28px] shadow-[var(--shadow)] overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--line)]"><span className="relative w-10 h-10 rounded-full bg-[var(--forest)] text-white grid place-items-center font-display font-bold">RS<span className="absolute -right-0.5 -bottom-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"/></span><div><p className="font-bold">Ranjitha’s assistant</p><p className="text-xs text-emerald-600 font-semibold">Online · replies instantly</p></div></div>
              <div className="h-[320px] overflow-y-auto p-4 space-y-3" aria-live="polite">
                {chat.map((m,i)=><div key={i} className={`max-w-[85%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed ${m.from==='user'?'ml-auto bg-[var(--forest)] text-white rounded-br-md':'bg-[var(--sage)] rounded-bl-md'}`}>{m.text}</div>)}
                {typing && <div className="bg-[var(--sage)] rounded-2xl rounded-bl-md px-4 py-3 inline-flex gap-1.5"><span className="typing-dot"/><span className="typing-dot"/><span className="typing-dot"/></div>}
                <div ref={chatEnd}/>
              </div>
              <form className="flex gap-2 p-3 border-t border-[var(--line)]" onSubmit={(e)=>{e.preventDefault(); ask(input);}}><label htmlFor="chat-input" className="sr-only">Ask a question</label><input id="chat-input" value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask about projects, stack, internships…" className="flex-1 min-w-0 bg-[var(--sage)] rounded-full px-4 py-3 text-[15px] outline-none focus:ring-2 focus:ring-[var(--forest)]"/><button type="submit" className="shrink-0 bg-[var(--forest)] text-white px-5 py-3 rounded-full font-semibold inline-flex items-center gap-1.5 hover:bg-[var(--amber)] hover:text-[var(--ink)] transition">Send <Send size={15}/></button></form>
            </div>
          </div>
        </section>

        {/* OPERATING MODEL */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
          <div className="reveal"><p className="text-sm font-bold tracking-[0.18em] uppercase text-[var(--forest)]">Operating model</p><h2 className="font-display font-semibold mt-3" style={{fontSize:'clamp(32px,4.5vw,52px)'}}>How I <span className="italic text-[var(--forest)]">build.</span></h2><p className="text-[var(--ink-soft)] mt-3 max-w-2xl">I own a project from idea to deployed demo — so the thing that ships is the one people can actually use.</p></div>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[{n:'01',t:'Discover',d:'Understand the user + problem, define scope & success before code.',Icon:Compass},{n:'02',t:'Architect',d:'Design API, data model, model pipeline & UI flow; simplest stack that ships.',Icon:Layers},{n:'03',t:'Ship & Measure',d:'Build in small slices, test live, iterate on feedback, deploy.',Icon:Zap}].map((s)=><article key={s.n} className="reveal bg-white border border-[var(--line)] rounded-[28px] p-6 shadow-sm hover:-translate-y-1 transition"><p className="font-display text-5xl font-bold text-[var(--line)]">{s.n}</p><h3 className="font-display font-bold text-2xl mt-3 flex items-center gap-2"><s.Icon size={22} className="text-[var(--forest)]"/>{s.t}</h3><p className="text-[var(--ink-soft)] mt-2 leading-relaxed">{s.d}</p></article>)}
          </div>
          <div className="mt-6 bg-white border border-[var(--line)] rounded-[28px] p-5 sm:p-6 reveal"><p className="font-bold">How my time splits — 100%</p><div className="space-y-3 mt-4">{[{l:'Building & Shipping',v:55,c:'bg-[var(--forest)]'},{l:'Learning & ML Experiments',v:25,c:'bg-[var(--amber)]'},{l:'Community & Leadership',v:20,c:'bg-[#E07A2E]'}].map(b=><div key={b.l}><div className="flex justify-between text-sm font-semibold"><span>{b.l}</span><span>{b.v}%</span></div><div className="h-3 bg-[var(--line)] rounded-full overflow-hidden mt-1"><div className={`h-full ${b.c}`} style={{width:`${b.v}%`}}/></div></div>)}</div></div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
          <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10">
            <div className="reveal"><p className="text-sm font-bold tracking-[0.18em] uppercase text-[var(--forest)]">Experience &amp; education</p><h2 className="font-display font-semibold mt-3" style={{fontSize:'clamp(32px,4.5vw,52px)'}}>Where the work<br/><span className="italic text-[var(--forest)]">happened.</span></h2><p className="text-[var(--ink-soft)] mt-4">Tap any entry to expand it.</p><div className="flex flex-wrap gap-2 mt-5">{['Python','Competitive Programming','LeetCode / CodeChef'].map(c=><span key={c} className="bg-[var(--sage)] text-[var(--forest)] px-3 py-1.5 rounded-full text-sm font-semibold">{c}</span>)}</div></div>
            <div className="relative pl-7 border-l-2 border-[var(--line)] space-y-4">
              {[
                {date:'2023 – 2027', title:'B.E. CSE', org:'RNS Institute of Technology, Rajarajeshwari Nagar, Bengaluru — 9.49/10 CGPA', body:'Coursework and projects across full-stack development, computer vision and machine learning.', icon:GraduationCap},
                {date:'Nov 2024 – Feb 2025', title:'Internship Trainee', org:'Samsung Innovation Campus, Bengaluru', body:'Industry-oriented Python, problem-solving, core CS; structured assignments, real-world use cases, project-based learning under mentorship; strengthened analytical thinking, coding proficiency, SDE readiness; Python + dataset analysis.', icon:Briefcase},
                {date:'2023', title:'12th — 93.5%', org:'Deeksha Centre for Learning, Kanakapura Road', body:'PUE Karnataka — 93.5%.', icon:BookOpen},
                {date:'2021', title:'10th — 98%', org:'Swargarani School', body:'ICSE — 98%.', icon:BookOpen},
                {date:'Leadership', title:'IEEE CTS Secretary · GDSC Member', org:'IEEE Consumer Technology Society + Google Developer Student Clubs', body:'Secretary of IEEE Consumer Technology Society; Member of Google Developer Student Clubs (GDSC). Community, learning and building with other students.', icon:Trophy},
              ].map((e,i)=>(
                <article key={e.title} className="relative bg-white border border-[var(--line)] rounded-3xl shadow-sm overflow-hidden">
                  <span className="absolute -left-[37px] top-5 w-5 h-5 rounded-full bg-[var(--amber)] border-4 border-[var(--cream)]"/>
                  <button onClick={()=>setOpenExp(openExp===i?null:i)} className="w-full text-left p-5 flex items-center justify-between gap-3" aria-expanded={openExp===i}><span><span className="text-xs font-bold tracking-wider uppercase text-[var(--forest)]">{e.date}</span><span className="block font-display font-bold text-lg mt-1">{e.title}</span><span className="block text-sm text-[var(--ink-soft)]">{e.org}</span></span><span className="text-xl font-light shrink-0">{openExp===i?'−':'+'}</span></button>
                  {openExp===i && <p className="px-5 pb-5 text-[15px] text-[var(--ink-soft)] leading-relaxed">{e.body}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TOOLKIT */}
        <section id="toolkit" className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
          <div className="reveal flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-bold tracking-[0.18em] uppercase text-[var(--forest)]">Toolkit</p><h2 className="font-display font-semibold mt-3" style={{fontSize:'clamp(32px,4.5vw,52px)'}}>The stack behind <span className="italic text-[var(--forest)]">the projects.</span></h2></div><p className="text-sm text-[var(--muted)]">Tabs switch with a soft lift — hover any pill.</p></div>
          <div className="flex flex-wrap gap-2 mt-7" role="tablist" aria-label="Toolkit categories">{Object.keys(toolkitTabs).map(t=><button key={t} role="tab" aria-selected={toolTab===t} onClick={()=>setToolTab(t)} className={`px-4 py-2.5 rounded-full text-sm font-semibold ${toolTab===t?'bg-[var(--forest)] text-white':'bg-white border border-[var(--line)] hover:-translate-y-0.5'}`}>{t}</button>)}</div>
          <div key={toolTab} className="flex flex-wrap gap-2.5 mt-5">{toolkitTabs[toolTab].map((s,i)=>{const icons=[Code2,Database,Brain,Wrench,Palette]; const Icon=icons[i%icons.length]; return <span key={s} className="inline-flex items-center gap-2 bg-white border border-[var(--line)] rounded-full px-4 py-3 font-semibold shadow-sm hover:-translate-y-1 hover:shadow-md transition"><Icon size={16} className="text-[var(--forest)]"/>{s}</span>;})}</div>
          <div className="mt-8"><p className="font-bold">Databases</p><div className="flex flex-wrap gap-2 mt-3">{['MySQL','SQL','PostgreSQL','PostGIS'].map(s=><span key={s} className="bg-[var(--sage)] px-4 py-2.5 rounded-full text-sm font-semibold">{s}</span>)}</div></div>
          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            {[{t:'Badminton',d:'Focus, footwork, and learning to reset fast after a lost point.',c:'bg-[var(--sage)]',Icon:Trophy},{t:'Drawing',d:'Seeing clearly first — composition, patience, and small details.',c:'bg-[var(--peach)]',Icon:Palette},{t:'Reading',d:'New ideas, new vocabularies, and better questions to ask users.',c:'bg-[var(--lilac)]',Icon:BookOpen}].map(x=><article key={x.t} className="reveal bg-white border border-[var(--line)] rounded-[28px] p-6 shadow-sm"><span className={`w-11 h-11 rounded-2xl ${x.c} grid place-items-center`}><x.Icon size={20}/></span><h3 className="font-display font-bold text-xl mt-4">{x.t}</h3><p className="text-sm text-[var(--ink-soft)] mt-2 leading-relaxed">{x.d}</p></article>)}
          </div>
          <div className="mt-4 bg-white border border-[var(--line)] rounded-[28px] p-6 reveal"><p className="font-bold flex items-center gap-2"><Languages size={20} className="text-[var(--forest)]"/> Languages</p><div className="flex flex-wrap gap-2 mt-3">{['English','Kannada','Hindi','German'].map(l=><span key={l} className="bg-[var(--amber-soft)] px-4 py-2 rounded-full text-sm font-semibold">{l}</span>)}</div></div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 pt-6">
          <div className="bg-[var(--dark)] text-white rounded-[32px] p-5 sm:p-8 lg:p-10 grid lg:grid-cols-2 gap-10 overflow-hidden relative">
            <div aria-hidden="true" className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[var(--forest)]/40 blur-3xl"/>
            <form onSubmit={submitForm} className="relative bg-white text-[var(--ink)] rounded-[24px] p-5 sm:p-6 shadow-xl order-1">
              <h3 className="font-display font-bold text-2xl">Send a note</h3>
              <p className="text-sm text-[var(--muted)] mt-1">Your message is saved to a secure inbox for Ranjitha.{savedCount!==null && ` ${savedCount} message(s) stored.`}</p>
              <label className="block mt-5 text-sm font-semibold" htmlFor="name">Your name</label><input id="name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full mt-1.5 bg-[var(--sage)] rounded-2xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[var(--forest)]" placeholder="Your name" autoComplete="name"/>
              <label className="block mt-4 text-sm font-semibold" htmlFor="email">Your email</label><input id="email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full mt-1.5 bg-[var(--sage)] rounded-2xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[var(--forest)]" placeholder="you@example.com" autoComplete="email"/>
              <label className="block mt-4 text-sm font-semibold" htmlFor="message">What are you building?</label><textarea id="message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={4} className="w-full mt-1.5 bg-[var(--sage)] rounded-2xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[var(--forest)] resize-y" placeholder="Tell me about the role, project or idea…"/>
              <button type="submit" disabled={formStatus.type==='saving'} className="w-full mt-5 bg-[var(--forest)] disabled:opacity-60 text-white py-4 rounded-full font-bold inline-flex justify-center items-center gap-2 hover:bg-[var(--amber)] hover:text-[var(--ink)] transition">{formStatus.type==='saving'?'Saving…':'Send message'} <Send size={16}/></button>
              {formStatus.type!=='idle' && <p role="status" className={`mt-4 rounded-2xl px-4 py-3 text-sm font-medium flex gap-2 ${formStatus.type==='done'?'bg-emerald-50 text-emerald-800':formStatus.type==='error'?'bg-red-50 text-red-800':'bg-[var(--sage)]'}`}>{formStatus.type==='done' && <CheckCircle2 size={18} className="shrink-0"/>}{formStatus.text}{formStatus.saved!==undefined && <span> · Saved: {formStatus.saved} · Remaining: {formStatus.remaining}</span>}</p>}
              <p className="text-xs text-[var(--muted)] mt-3">Prefer email? Use either address on the right. Messages are stored securely and are not shown publicly.</p>
            </form>
            <div className="relative order-2">
              <p className="text-sm font-bold tracking-[0.18em] uppercase text-[var(--amber)]">Contact</p>
              <h2 className="font-display font-semibold mt-3 leading-tight" style={{fontSize:'clamp(32px,4.5vw,52px)'}}>Let’s build something <span className="italic text-[var(--amber)]">that ships.</span></h2>
              <p className="text-white/70 mt-4 leading-relaxed">Open to internships &amp; entry-level SDE / Full-stack / AI roles — Class of 2027.</p>
              <ul className="space-y-3 mt-7 text-[15px]">
                <li><a href="mailto:ranjithasgowda245@gmail.com" className="flex gap-3 items-center hover:underline break-all"><Mail size={18} className="shrink-0 text-[var(--amber)]"/> ranjithasgowda245@gmail.com</a></li>
                <li><a href="mailto:ranjithas23cs@rnsit.ac.in" className="flex gap-3 items-center hover:underline break-all"><Mail size={18} className="shrink-0 text-[var(--amber)]"/> ranjithas23cs@rnsit.ac.in</a></li>
                <li><a href="tel:+919449045855" className="flex gap-3 items-center hover:underline"><Phone size={18} className="shrink-0 text-[#7ED6AF]"/> +91 94490 45855 · WhatsApp</a></li>
                <li><a href="https://www.linkedin.com/in/ranjitha-sridhar-a5b711311/" target="_blank" rel="noopener" className="flex gap-3 items-center hover:underline"><Linkedin size={18} className="shrink-0 text-[var(--amber)]"/> LinkedIn</a></li>
                <li><a href="https://github.com/ranjithas" target="_blank" rel="noopener" className="flex gap-3 items-center hover:underline"><Github size={18} className="shrink-0"/> GitHub · @ranjithas</a></li>
                <li className="flex gap-3 items-center text-white/80"><MapPin size={18} className="shrink-0"/> Bengaluru, India</li>
              </ul>
              <div className="mt-7 bg-white/10 rounded-3xl p-4"><p className="text-xs text-white/60 uppercase tracking-wider font-bold">Beyond code</p><p className="text-sm mt-1 text-white/80">Badminton · Drawing · Reading — plus English, Kannada, Hindi and German.</p></div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-[var(--line)]"><div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--muted)]"><p>© 2026 Ranjitha S · Bengaluru</p><a href="#home" className="inline-flex items-center gap-1.5 font-semibold text-[var(--ink)] hover:underline">Back to top <ArrowUp size={15}/></a></div></footer>
    </div>
  );
}
