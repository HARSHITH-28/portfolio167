import type { Pt } from "@/data/landmarks";
import { POSE_FIST, POSE_L, POSE_OPEN, POSE_V } from "@/data/landmarks";

export type ProjectLink = {
  label: string;
  href: string;
  placeholder: boolean;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  dates: string;
  role: string;
  team?: string;
  mentor?: string;
  summary: string;
  problem: string;
  approach: string;
  distinct: string;
  owned: string;
  stack: string[];
  flow: string[];
  links: ProjectLink[];
  pose: Pt[];
};

/**
 * Deployed URLs and missing repositories are placeholders.
 * Replace the `placeholder: true` hrefs when the real links exist.
 * Known repository: the ASL project on GitHub.
 */
export const projects: Project[] = [
  {
    slug: "retailpulse",
    index: "01",
    title: "RetailPulse",
    dates: "Nov 2026 — Present",
    role: "Full stack & ML",
    summary:
      "Multi-store demand forecasting and inventory optimization built on historical M5 sales data and XGBoost.",
    problem:
      "Retail stores face stockouts and overstocking when replenishment relies on static heuristics instead of store-level demand forecasts.",
    approach:
      "Trained an XGBoost 7-day demand forecasting pipeline over historical M5 data evaluated with MAE and WAPE against seasonal-naive baselines, backed by FastAPI JWT endpoints and a React inventory dashboard.",
    distinct:
      "Connects 7-day statistical forecasts directly to inter-store transfer recommendations and what-if simulation.",
    owned:
      "Demand forecasting pipeline, MAE/WAPE evaluation, FastAPI + JWT backend APIs, and the React operations dashboard.",
    stack: ["Python", "XGBoost", "FastAPI", "React.js", "SQL", "Pandas"],
    flow: ["M5 sales history", "XGBoost 7-day model", "MAE & WAPE check", "FastAPI + JWT", "Store transfer UI"],
    links: [
      { label: "Live Demo", href: "https://retailpulse.up.railway.app/", placeholder: false },
      { label: "Repository", href: "https://github.com/ranjitha-sridhar/RetailPulse", placeholder: false },
    ],
    pose: POSE_OPEN,
  },
  {
    slug: "moodsync",
    index: "02",
    title: "MoodSync-AI V2",
    dates: "May 2026 — Present",
    role: "Full stack",
    summary:
      "A desk that reads a facial expression from the webcam and recommends music to match.",
    problem:
      "A mood is awkward to type, and a playlist that ignores it is just a list. The question was whether a camera and a small model could make the first suggestion.",
    approach:
      "The React page captures webcam frames and sends them over HTTP. FastAPI runs a TensorFlow/Keras model on images prepared with OpenCV, then returns an emotion and a music recommendation. The two services deploy separately.",
    distinct:
      "The product is the round trip — frame in, mood out, music next — not a notebook that stops once the model has a score.",
    owned:
      "Detection, prediction, and recommendation endpoints; the React capture loop; and the split frontend and backend deployment.",
    stack: ["Python", "FastAPI", "React.js", "TensorFlow/Keras", "OpenCV"],
    flow: ["Webcam frame", "React client", "FastAPI", "Keras model + OpenCV", "Music recommendation"],
    links: [
      { label: "Live Demo", href: "https://mood-sync-ai-v2-ranjitha-s.vercel.app/", placeholder: false },
      { label: "Repository", href: "https://github.com/ranjitha-sridhar/MoodSync-AI-V2", placeholder: false },
    ],
    pose: POSE_OPEN,
  },
  {
    slug: "campusar",
    index: "03",
    title: "CampusAR",
    dates: "2026",
    role: "Full stack",
    summary:
      "Indoor and outdoor navigation for a campus: a route on a graph, then a direction you can follow.",
    problem:
      "A campus map fails at the door. GPS drifts indoors, and a building is a stack of corridors rather than a single pin.",
    approach:
      "Routes run on a navigation graph with shortest-path search between buildings, entrances, and indoor nodes. Node.js APIs store spatial data in PostgreSQL and PostGIS. The backend is split into API, application, domain, and data-access layers. Live pieces include GPS updates, QR codes that relocalize you indoors, WebSockets, and AR directional guidance.",
    distinct:
      "Outdoor GPS and an indoor QR share one graph, so the route does not pretend the building is empty.",
    owned:
      "Graph routing, the spatial APIs, the layered backend, and the real-time loop from position update to guidance.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "PostGIS", "WebSocket"],
    flow: ["Position or QR", "Navigation graph", "Shortest path", "Node.js API", "AR guidance"],
    links: [
      { label: "Interactive Studio", href: "#studio", placeholder: false },
      { label: "Repository", href: "https://github.com/ranjitha-sridhar/Campus-Navigation-System", placeholder: false },
    ],
    pose: POSE_L,
  },
  {
    slug: "sign-language",
    index: "04",
    title: "Sign Language Interpreter",
    dates: "2025",
    role: "Data, model, and live inference",
    team: "Team of 4",
    mentor: "Ms. Chethana H R",
    summary:
      "American Sign Language letters from a live webcam, named while the hand is still in frame.",
    problem:
      "Alphabet signs are quick. An interpreter that needs a finished recording is already late for the conversation it is meant to help.",
    approach:
      "MediaPipe finds the hand and its landmarks. A convolutional network built in TensorFlow and Keras classifies the gesture. Each frame is preprocessed, reduced to the features the model expects, and predicted immediately. The letter is drawn back on the screen.",
    distinct:
      "It runs the whole path — collected images, a trained network, a camera loop — as assistive software, not a clip played back later.",
    owned:
      "Dataset preparation, preprocessing, training and evaluation, the webcam inference path, and work on accuracy and speed.",
    stack: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "Keras", "NumPy", "CNN"],
    flow: ["Webcam frame", "MediaPipe landmarks", "Preprocess", "CNN classifier", "Letter on screen"],
    links: [
      { label: "Interactive Studio", href: "#studio", placeholder: false },
      { label: "Repository", href: "https://github.com/PraveenKumarM17/Gesture", placeholder: false },
    ],
    pose: POSE_V,
  },
  {
    slug: "events",
    index: "05",
    title: "Events Management System",
    dates: "March 2025 — July 2025",
    role: "Frontend developer",
    team: "Team of 4",
    summary:
      "A campus events desk: responsive pages for students and organizers, fed by the team’s APIs.",
    problem:
      "Event information was scattered. Students needed one clear place to look; organizers needed the same system to hold the data.",
    approach:
      "I built the interface in HTML, CSS, JavaScript, and React — responsive pages, event data from APIs, and a flow that still makes sense on a phone. Version control and integration with the backend went through GitHub.",
    distinct:
      "The constraint was shared ownership. The UI had to meet a backend other people were still moving.",
    owned:
      "Layout, responsive behavior, and the client side of the event APIs. Backend integration was a team effort on GitHub.",
    stack: ["HTML", "CSS", "JavaScript", "React.js"],
    flow: ["Organizer data", "REST API", "React interface", "Student"],
    links: [
      { label: "Interactive Studio", href: "#work", placeholder: false },
      {
        label: "Repository",
        href: "https://github.com/ssarveshr/DBMS-project-",
        placeholder: false,
      },
    ],
    pose: POSE_FIST,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const profile = {
  name: "Ranjitha S",
  location: "Bengaluru, India",
  college: "RNS Institute of Technology",
  degree: "B.E. Computer Science & Engineering",
  batch: "2023 — 2027",
  email: "ranjithasgowda245@gmail.com",
  collegeEmail: "ranjithas23cs@rnsit.ac.in",
  phoneDisplay: "+91 94490 45855",
  phoneHref: "tel:+919449045855",
  whatsapp: "https://wa.me/919449045855",
  linkedin: "https://www.linkedin.com/in/ranjitha-sridhar-a5b711311/",
  github: "https://github.com/ranjitha-sridhar",
  githubPlaceholder: false,
  languages: ["English", "Kannada", "Hindi", "German"],
  interests: ["Badminton", "Drawing", "Reading"],
};

export const stats = [
  { value: "9.49", label: "CGPA at RNSIT" },
  { value: "98", label: "ICSE, class 10" },
  { value: "93.5", label: "PUC, class 12" },
  { value: "78", label: "NPTEL networking" },
];

export const toolkit = [
  {
    title: "Languages",
    items: ["Python", "C", "C++", "Java", "C#", "JavaScript"],
  },
  {
    title: "Web & APIs",
    items: ["HTML", "CSS", "React.js", "TypeScript", "Node.js", "FastAPI", "ASP.NET Core", "REST"],
  },
  {
    title: "Data",
    items: ["MySQL", "SQL", "PostgreSQL", "PostGIS"],
  },
  {
    title: "Vision & learning",
    items: ["OpenCV", "MediaPipe", "TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Google Colab", "LeetCode", "CodeChef"],
  },
  {
    title: "Foundations",
    items: [
      "Data structures",
      "Algorithms",
      "OOP",
      "DBMS",
      "API design",
      "Microservices fundamentals",
      "Event-driven fundamentals",
    ],
  },
];

export const experience = [
  {
    when: "Nov 2024 — Feb 2025",
    title: "Student trainee",
    place: "Samsung Innovation Campus, Bengaluru",
    body: "Industry training in Python, problem solving, and core computer science. I practiced competitive programming on LeetCode and CodeChef — algorithms and data structures, written under a clock — and worked through structured assignments and small datasets with mentorship.",
  },
];

export const education = [
  {
    when: "2023 — 2027",
    title: "B.E. Computer Science & Engineering",
    place: "RNS Institute of Technology, Rajarajeshwari Nagar",
    detail: "CGPA 9.49 / 10",
  },
  {
    when: "2023",
    title: "Class 12 · PUE Karnataka",
    place: "Deeksha Centre for Learning, Kanakapura Road",
    detail: "93.50%",
  },
  {
    when: "2021",
    title: "Class 10 · ICSE",
    place: "Swargarani School, Rajarajeshwari Nagar",
    detail: "98%",
  },
];

export const alongside = [
  {
    title: "IEEE Consumer Technology Society",
    detail: "Secretary",
  },
  {
    title: "Google Developer Student Clubs",
    detail: "Member",
  },
  {
    title: "NPTEL · Demystifying Networking",
    detail: "IIT Madras · 78 / 100. Architecture, TCP/IP, routing, switching, and how data actually moves.",
  },
];

export const studioSteps = [
  {
    id: "capture",
    kicker: "01",
    title: "Capture",
    body: "A webcam frame. The letter only counts if it can be named while the hand is still up.",
  },
  {
    id: "landmarks",
    kicker: "02",
    title: "Landmarks",
    body: "MediaPipe detects the hand and returns landmarks — wrist, knuckles, fingertips — instead of a raw crop.",
  },
  {
    id: "prepare",
    kicker: "03",
    title: "Prepare",
    body: "The frame is preprocessed and reduced to the features the network was trained on. NumPy does the unglamorous work.",
  },
  {
    id: "classify",
    kicker: "04",
    title: "Classify",
    body: "A convolutional network in TensorFlow and Keras scores the alphabet. I trained it, then judged it on held-out signs.",
  },
  {
    id: "show",
    kicker: "05",
    title: "Show",
    body: "The predicted letter is drawn back onto the screen. That last step is the product.",
  },
];
