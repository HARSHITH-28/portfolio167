/* =====================================================================
   EDIT YOUR CONTENT HERE.
   Replace null values for repoUrl and liveUrl with published HTTPS links.
   Source: the two supplied resumes. No impact metrics have been invented.
   ===================================================================== */
window.PORTFOLIO_DATA = {
  email: 'ranjithasgowda245@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ranjitha-sridhar-a5b711311/',
  projects: [
    {
      id: 'retailpulse', number: '01', title: 'RetailPulse', subtitle: '7-day demand forecasting & inventory intelligence.',
      category: 'AI / FULL-STACK', types: ['ai', 'fullstack'], year: '2026 — Present', image: 'assets/project-retailpulse.svg',
      alt: 'Chart showing 7-day M5 XGBoost demand forecast outperforming seasonal-naive baseline',
      tech: ['Python', 'XGBoost', 'FastAPI', 'React.js', 'SQL', 'Pandas'],
      synopsis: 'A full-stack retail demand forecasting, replenishment, and inter-store inventory transfer platform built over historical M5 sales data.',
      problem: 'Multi-store retail supply chains suffer stockouts and overstocking when replenishment relies on static averages instead of SKU-store forecasts.',
      approach: 'Trained an XGBoost 7-day demand forecasting pipeline over historical M5 data evaluated via MAE and WAPE against seasonal-naive baselines, backed by JWT-secured FastAPI APIs and a React what-if inventory dashboard.',
      contribution: 'Engineered the end-to-end M5 feature and forecasting pipeline, inter-store transfer engine, FastAPI + JWT backend, and React operations UI.',
      highlights: ['7-day multi-store M5 demand forecasting', 'MAE and WAPE benchmarking vs seasonal naive', 'Inter-store transfer & replenishment engine', 'FastAPI + JWT APIs with React what-if dashboard'],
      pipeline: [
        { title: 'Ingest', subtitle: 'M5 · Pandas', description: 'Process multi-store historical sales series and calendar features.' },
        { title: 'Forecast', subtitle: 'XGBoost · 7-day', description: 'Generate 7-day demand predictions and benchmark MAE & WAPE.' },
        { title: 'Optimize', subtitle: 'FastAPI · Transfers', description: 'Compute optimal inter-store stock transfers and reorder targets.' },
        { title: 'Simulate', subtitle: 'React · JWT UI', description: 'Inspect store projections and run what-if scenarios in the live dashboard.' }
      ],
      repoUrl: 'https://github.com/ranjitha-sridhar/RetailPulse',
      liveUrl: 'https://retailpulse.up.railway.app/'
    },
    {
      id: 'moodsync', number: '02', title: 'MoodSync-AI V2', subtitle: 'Emotion-aware music, built with intelligence.',
      category: 'AI / FULL-STACK', types: ['ai', 'fullstack'], year: '2026 — Present', image: 'assets/project-moodsync.svg',
      alt: 'Stylized illustration of a facial landmark scanner and audio recommendation waveform',
      tech: ['React', 'FastAPI', 'TensorFlow / Keras', 'OpenCV', 'Python'],
      synopsis: 'An AI-powered application that reads facial expressions from webcam input and creates personalized music recommendations.',
      problem: 'Explore how an application can translate a moment of visual input into a more personal listening experience.',
      approach: 'Connected webcam-based image processing and a trained emotion-recognition model with Python / FastAPI endpoints. A React interface captures frames, requests predictions, and displays recommendations.',
      contribution: 'Built REST APIs for emotion prediction and music recommendations, integrated the TensorFlow/Keras model with OpenCV, and developed the React experience. The resume reports separate frontend and backend deployments; URLs can be added below.',
      highlights: ['Webcam frame capture and processing', 'Emotion classification with a trained model', 'Personalized music recommendations', 'Separate frontend and backend services'],
      pipeline: [
        { title: 'Capture', subtitle: 'React · webcam', description: 'The browser captures a webcam frame through the React interface.' },
        { title: 'Process', subtitle: 'OpenCV · Python', description: 'The frame is passed to a backend service and prepared for inference.' },
        { title: 'Predict', subtitle: 'TensorFlow / Keras', description: 'A trained emotion-recognition model predicts an emotion from the image.' },
        { title: 'Recommend', subtitle: 'FastAPI · React', description: 'An API responds with a music recommendation for the interface to present.' }
      ],
      repoUrl: 'https://github.com/ranjitha-sridhar/MoodSync-AI-V2',
      liveUrl: 'https://mood-sync-ai-v2-aoofar6ji-ranjitha-s.vercel.app/'
    },
    {
      id: 'campusar', number: '03', title: 'CampusAR', subtitle: 'A smarter way to find your way.',
      category: 'FULL-STACK / NAVIGATION', types: ['fullstack'], year: '2026', image: 'assets/project-campusar.svg',
      alt: 'Stylized illustrated map with connected location nodes and navigation route',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'PostGIS', 'WebSockets'],
      synopsis: 'A campus wayfinding application connecting outdoor GPS navigation with indoor, graph-based routes and AR guidance.',
      problem: 'Campus navigation becomes difficult when outdoor GPS needs to transition to buildings, entrances, and indoor spaces.',
      approach: 'Modeled locations and indoor connections as navigation graphs. Built location-aware routing through Node.js APIs backed by PostgreSQL/PostGIS, with live position updates and QR-based indoor relocalization.',
      contribution: 'Developed backend routing APIs and a layered architecture that separates API, application, domain, and data-access concerns; integrated GPS, WebSocket communication, and augmented reality guidance.',
      highlights: ['Graph-based shortest-path routing', 'PostGIS spatial data management', 'GPS and QR-based localization', 'WebSocket updates and AR direction cues'],
      pipeline: [
        { title: 'Locate', subtitle: 'GPS · QR', description: 'Determine an outdoor GPS position or a QR-based indoor starting point.' },
        { title: 'Model', subtitle: 'PostgreSQL / PostGIS', description: 'Look up buildings, entrances, and waypoints from spatial navigation data.' },
        { title: 'Route', subtitle: 'Node.js · graphs', description: 'Compute a connected path with a shortest-path algorithm over navigation nodes.' },
        { title: 'Guide', subtitle: 'React · AR · WS', description: 'Present directions and update navigation state using WebSockets and augmented reality cues.' }
      ],
      repoUrl: 'https://github.com/ranjitha-sridhar/Campus-Navigation-System',
      liveUrl: ''
    },
    {
      id: 'asl', number: '04', title: 'Sign Language Interpreter', subtitle: 'Computer vision in service of communication.',
      category: 'AI / COMPUTER VISION', types: ['ai'], year: '2025', image: 'assets/project-signlanguage.svg',
      alt: 'Illustration of a raised hand tracked by a computer vision recognition grid',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow / Keras', 'CNN', 'NumPy'],
      synopsis: 'A real-time American Sign Language alphabet recognition prototype that converts hand gestures from a webcam into text.',
      problem: 'Explore a more accessible way of recognizing signed alphabet gestures using affordable webcam input.',
      approach: 'Used MediaPipe to detect hands and landmarks, prepared gesture data, and trained a CNN with TensorFlow/Keras. Frames are processed to classify gestures and present a predicted letter in real time.',
      contribution: 'Worked on data preparation, preprocessing, model training, webcam inference integration, and prediction performance in a four-person team.',
      highlights: ['Hand and landmark detection', 'Dataset preprocessing and training', 'Real-time CNN inference', 'Live alphabet prediction'],
      pipeline: [
        { title: 'Observe', subtitle: 'Webcam · OpenCV', description: 'Capture hand gestures as frames from a live webcam feed.' },
        { title: 'Extract', subtitle: 'MediaPipe', description: 'Detect the hand and extract landmarks for subsequent processing.' },
        { title: 'Classify', subtitle: 'CNN · TensorFlow', description: 'Pass prepared gesture features into a trained classifier for an alphabet prediction.' },
        { title: 'Translate', subtitle: 'Live interface', description: 'Display the predicted ASL alphabet character on the screen.' }
      ],
      repoUrl: 'https://github.com/PraveenKumarM17/Gesture',
      liveUrl: ''
    },
    {
      id: 'events', number: '05', title: 'Events Management System', subtitle: 'Making event planning feel effortless.',
      category: 'FRONTEND / FULL-STACK TEAM', types: ['fullstack'], year: '2025', image: 'assets/project-events.svg',
      alt: 'Stylized event dashboard with calendar, passes, and a data visualization',
      tech: ['React', 'JavaScript', 'HTML', 'CSS', 'API Integration'],
      synopsis: 'A responsive event management interface built to help students and organizers explore and manage event information.',
      problem: 'Students and event organizers need a clear, accessible interface for event information and coordination.',
      approach: 'Designed responsive React pages, built UI components, and integrated event-data APIs while collaborating with backend developers.',
      contribution: 'Served as a frontend developer in a four-person team, focusing on UI development, responsive experiences, and GitHub-based integration with backend work.',
      highlights: ['Responsive event views', 'React frontend architecture', 'Event data API integration', 'Cross-team development'],
      pipeline: [
        { title: 'Discover', subtitle: 'Student / organizer', description: 'Understand the event information a student or organizer needs.' },
        { title: 'Design', subtitle: 'HTML · CSS', description: 'Create responsive layouts with clear navigation and accessible information hierarchy.' },
        { title: 'Integrate', subtitle: 'React · APIs', description: 'Connect frontend views to APIs that provide event data.' },
        { title: 'Collaborate', subtitle: 'GitHub', description: 'Work with backend teammates through version control and integration.' }
      ],
      repoUrl: 'https://github.com/ssarveshr/DBMS-project-',
      liveUrl: ''
    }
  ],
  skills: [
    { id: 'languages', title: 'Programming languages', short: 'Languages', skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'C', 'C#'] },
    { id: 'web', title: 'Web & backend engineering', short: 'Web / Backend', skills: ['React.js', 'FastAPI', 'Node.js', 'HTML5', 'CSS3', 'ASP.NET Core Web API', 'REST APIs', 'API Development'] },
    { id: 'ai', title: 'AI, machine learning & data', short: 'AI / Data', skills: ['TensorFlow', 'Keras', 'OpenCV', 'MediaPipe', 'Machine Learning', 'Pandas', 'NumPy', 'Matplotlib', 'EDA'] },
    { id: 'systems', title: 'Databases, tools & fundamentals', short: 'Systems', skills: ['PostgreSQL', 'PostGIS', 'MySQL', 'SQL', 'Git / GitHub', 'VS Code', 'Google Colab', 'DSA', 'OOP', 'DBMS', 'WebSockets', 'Microservices Fundamentals', 'Event-Driven Architecture Fundamentals'] }
  ]
};
