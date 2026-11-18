import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { J as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-3ow4r9Gc.js
/** MediaPipe Hands topology: 21 landmarks, wrist at index 0. */
var HAND_EDGES = [
	[0, 1],
	[1, 2],
	[2, 3],
	[3, 4],
	[0, 5],
	[5, 6],
	[6, 7],
	[7, 8],
	[0, 9],
	[9, 10],
	[10, 11],
	[11, 12],
	[0, 13],
	[13, 14],
	[14, 15],
	[15, 16],
	[0, 17],
	[17, 18],
	[18, 19],
	[19, 20],
	[5, 9],
	[9, 13],
	[13, 17]
];
/** Open palm — closest to ASL “B”. Coordinates are viewBox 0–100. */
var POSE_OPEN = [
	[48, 78],
	[36, 70],
	[28, 58],
	[24, 46],
	[22, 34],
	[40, 46],
	[39, 32],
	[38, 20],
	[37, 10],
	[50, 44],
	[50, 28],
	[50, 16],
	[50, 6],
	[60, 46],
	[62, 32],
	[63, 20],
	[64, 10],
	[68, 52],
	[72, 40],
	[74, 30],
	[75, 22]
];
/** Closed fist, thumb alongside — closest to ASL “A”. */
var POSE_FIST = [
	[50, 74],
	[38, 68],
	[32, 58],
	[36, 50],
	[44, 48],
	[44, 52],
	[46, 60],
	[48, 66],
	[50, 70],
	[54, 50],
	[55, 58],
	[56, 66],
	[56, 72],
	[62, 52],
	[63, 60],
	[64, 68],
	[64, 74],
	[70, 56],
	[72, 64],
	[73, 70],
	[73, 76]
];
/** Thumb and index extended — closest to ASL “L”. */
var POSE_L = [
	[50, 78],
	[38, 70],
	[28, 62],
	[22, 50],
	[18, 38],
	[46, 48],
	[46, 32],
	[46, 20],
	[46, 10],
	[56, 52],
	[57, 60],
	[58, 68],
	[58, 74],
	[64, 54],
	[66, 62],
	[67, 70],
	[67, 76],
	[72, 58],
	[74, 66],
	[75, 72],
	[75, 78]
];
/** Index and middle extended — closest to ASL “V”. */
var POSE_V = [
	[50, 80],
	[38, 72],
	[32, 64],
	[36, 56],
	[42, 52],
	[42, 48],
	[38, 32],
	[36, 20],
	[34, 10],
	[54, 46],
	[58, 30],
	[60, 18],
	[62, 8],
	[64, 54],
	[65, 62],
	[66, 70],
	[66, 76],
	[72, 58],
	[74, 66],
	[75, 72],
	[75, 78]
];
var SAMPLE_SIGNS = [
	{
		letter: "A",
		note: "Fist closed, thumb resting alongside the fingers.",
		pose: POSE_FIST,
		ranking: [
			{
				letter: "A",
				weight: .84
			},
			{
				letter: "S",
				weight: .09
			},
			{
				letter: "T",
				weight: .05
			}
		]
	},
	{
		letter: "B",
		note: "Palm open, fingers together and thumb tucked.",
		pose: POSE_OPEN,
		ranking: [
			{
				letter: "B",
				weight: .8
			},
			{
				letter: "C",
				weight: .11
			},
			{
				letter: "L",
				weight: .06
			}
		]
	},
	{
		letter: "L",
		note: "Thumb and index make a right angle; the rest stay folded.",
		pose: POSE_L,
		ranking: [
			{
				letter: "L",
				weight: .82
			},
			{
				letter: "D",
				weight: .1
			},
			{
				letter: "G",
				weight: .05
			}
		]
	},
	{
		letter: "V",
		note: "Index and middle split; ring and pinky stay down.",
		pose: POSE_V,
		ranking: [
			{
				letter: "V",
				weight: .78
			},
			{
				letter: "U",
				weight: .13
			},
			{
				letter: "K",
				weight: .06
			}
		]
	}
];
/**
* Deployed URLs and missing repositories are placeholders.
* Replace the `placeholder: true` hrefs when the real links exist.
* Known repository: the ASL project on GitHub.
*/
var projects = [
	{
		slug: "moodsync",
		index: "01",
		title: "MoodSync-AI",
		dates: "May 2026 — Present",
		role: "Full stack",
		summary: "A desk that reads a facial expression from the webcam and recommends music to match.",
		problem: "A mood is awkward to type, and a playlist that ignores it is just a list. The question was whether a camera and a small model could make the first suggestion.",
		approach: "The React page captures webcam frames and sends them over HTTP. FastAPI runs a TensorFlow/Keras model on images prepared with OpenCV, then returns an emotion and a music recommendation. The two services deploy separately.",
		distinct: "The product is the round trip — frame in, mood out, music next — not a notebook that stops once the model has a score.",
		owned: "Detection, prediction, and recommendation endpoints; the React capture loop; and the split frontend and backend deployment.",
		stack: [
			"Python",
			"FastAPI",
			"React.js",
			"TensorFlow/Keras",
			"OpenCV"
		],
		flow: [
			"Webcam frame",
			"React client",
			"FastAPI",
			"Keras model + OpenCV",
			"Music recommendation"
		],
		links: [{
			label: "Live demo",
			href: "https://example.com/moodsync",
			placeholder: true
		}, {
			label: "Repository",
			href: "https://github.com/PLACEHOLDER/moodsync",
			placeholder: true
		}],
		pose: POSE_OPEN
	},
	{
		slug: "campusar",
		index: "02",
		title: "CampusAR",
		dates: "2026",
		role: "Full stack",
		summary: "Indoor and outdoor navigation for a campus: a route on a graph, then a direction you can follow.",
		problem: "A campus map fails at the door. GPS drifts indoors, and a building is a stack of corridors rather than a single pin.",
		approach: "Routes run on a navigation graph with shortest-path search between buildings, entrances, and indoor nodes. Node.js APIs store spatial data in PostgreSQL and PostGIS. The backend is split into API, application, domain, and data-access layers. Live pieces include GPS updates, QR codes that relocalize you indoors, WebSockets, and AR directional guidance.",
		distinct: "Outdoor GPS and an indoor QR share one graph, so the route does not pretend the building is empty.",
		owned: "Graph routing, the spatial APIs, the layered backend, and the real-time loop from position update to guidance.",
		stack: [
			"React",
			"TypeScript",
			"Node.js",
			"PostgreSQL",
			"PostGIS",
			"WebSocket"
		],
		flow: [
			"Position or QR",
			"Navigation graph",
			"Shortest path",
			"Node.js API",
			"AR guidance"
		],
		links: [{
			label: "Live demo",
			href: "https://example.com/campusar",
			placeholder: true
		}, {
			label: "Repository",
			href: "https://github.com/PLACEHOLDER/campusar",
			placeholder: true
		}],
		pose: POSE_L
	},
	{
		slug: "sign-language",
		index: "03",
		title: "Sign Language Interpreter",
		dates: "2025",
		role: "Data, model, and live inference",
		team: "Team of 4",
		mentor: "Ms. Chethana H R",
		summary: "American Sign Language letters from a live webcam, named while the hand is still in frame.",
		problem: "Alphabet signs are quick. An interpreter that needs a finished recording is already late for the conversation it is meant to help.",
		approach: "MediaPipe finds the hand and its landmarks. A convolutional network built in TensorFlow and Keras classifies the gesture. Each frame is preprocessed, reduced to the features the model expects, and predicted immediately. The letter is drawn back on the screen.",
		distinct: "It runs the whole path — collected images, a trained network, a camera loop — as assistive software, not a clip played back later.",
		owned: "Dataset preparation, preprocessing, training and evaluation, the webcam inference path, and work on accuracy and speed.",
		stack: [
			"Python",
			"OpenCV",
			"MediaPipe",
			"TensorFlow",
			"Keras",
			"NumPy",
			"CNN"
		],
		flow: [
			"Webcam frame",
			"MediaPipe landmarks",
			"Preprocess",
			"CNN classifier",
			"Letter on screen"
		],
		links: [{
			label: "Live demo",
			href: "https://example.com/sign-language",
			placeholder: true
		}, {
			label: "Repository",
			href: "https://github.com/PraveenKumarM17/Gesture",
			placeholder: false
		}],
		pose: POSE_V
	},
	{
		slug: "events",
		index: "04",
		title: "Events Management System",
		dates: "March 2025 — July 2025",
		role: "Frontend developer",
		team: "Team of 4",
		summary: "A campus events desk: responsive pages for students and organizers, fed by the team’s APIs.",
		problem: "Event information was scattered. Students needed one clear place to look; organizers needed the same system to hold the data.",
		approach: "I built the interface in HTML, CSS, JavaScript, and React — responsive pages, event data from APIs, and a flow that still makes sense on a phone. Version control and integration with the backend went through GitHub.",
		distinct: "The constraint was shared ownership. The UI had to meet a backend other people were still moving.",
		owned: "Layout, responsive behavior, and the client side of the event APIs. Backend integration was a team effort on GitHub.",
		stack: [
			"HTML",
			"CSS",
			"JavaScript",
			"React.js"
		],
		flow: [
			"Organizer data",
			"REST API",
			"React interface",
			"Student"
		],
		links: [{
			label: "Live demo",
			href: "https://example.com/events",
			placeholder: true
		}, {
			label: "Repository",
			href: "https://github.com/ssarveshr/DBMS-project-",
			placeholder: true
		}],
		pose: POSE_FIST
	}
];
function getProject(slug) {
	return projects.find((project) => project.slug === slug);
}
var profile = {
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
	github: "https://github.com/PLACEHOLDER-RANJITHA",
	githubPlaceholder: true,
	languages: [
		"English",
		"Kannada",
		"Hindi",
		"German"
	],
	interests: [
		"Badminton",
		"Drawing",
		"Reading"
	]
};
var stats = [
	{
		value: "9.49",
		label: "CGPA at RNSIT"
	},
	{
		value: "98",
		label: "ICSE, class 10"
	},
	{
		value: "93.5",
		label: "PUC, class 12"
	},
	{
		value: "78",
		label: "NPTEL networking"
	}
];
var toolkit = [
	{
		title: "Languages",
		items: [
			"Python",
			"C",
			"C++",
			"Java",
			"C#",
			"JavaScript"
		]
	},
	{
		title: "Web & APIs",
		items: [
			"HTML",
			"CSS",
			"React.js",
			"TypeScript",
			"Node.js",
			"FastAPI",
			"ASP.NET Core",
			"REST"
		]
	},
	{
		title: "Data",
		items: [
			"MySQL",
			"SQL",
			"PostgreSQL",
			"PostGIS"
		]
	},
	{
		title: "Vision & learning",
		items: [
			"OpenCV",
			"MediaPipe",
			"TensorFlow",
			"Keras",
			"NumPy",
			"Pandas",
			"Matplotlib"
		]
	},
	{
		title: "Tools",
		items: [
			"Git",
			"GitHub",
			"VS Code",
			"Google Colab",
			"LeetCode",
			"CodeChef"
		]
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
			"Event-driven fundamentals"
		]
	}
];
var experience = [{
	when: "Nov 2024 — Feb 2025",
	title: "Student trainee",
	place: "Samsung Innovation Campus, Bengaluru",
	body: "Industry training in Python, problem solving, and core computer science. I practiced competitive programming on LeetCode and CodeChef — algorithms and data structures, written under a clock — and worked through structured assignments and small datasets with mentorship."
}];
var education = [
	{
		when: "2023 — 2027",
		title: "B.E. Computer Science & Engineering",
		place: "RNS Institute of Technology, Rajarajeshwari Nagar",
		detail: "CGPA 9.49 / 10"
	},
	{
		when: "2023",
		title: "Class 12 · PUE Karnataka",
		place: "Deeksha Centre for Learning, Kanakapura Road",
		detail: "93.50%"
	},
	{
		when: "2021",
		title: "Class 10 · ICSE",
		place: "Swargarani School, Rajarajeshwari Nagar",
		detail: "98%"
	}
];
var alongside = [
	{
		title: "IEEE Consumer Technology Society",
		detail: "Secretary"
	},
	{
		title: "Google Developer Student Clubs",
		detail: "Member"
	},
	{
		title: "NPTEL · Demystifying Networking",
		detail: "IIT Madras · 78 / 100. Architecture, TCP/IP, routing, switching, and how data actually moves."
	}
];
var studioSteps = [
	{
		id: "capture",
		kicker: "01",
		title: "Capture",
		body: "A webcam frame. The letter only counts if it can be named while the hand is still up."
	},
	{
		id: "landmarks",
		kicker: "02",
		title: "Landmarks",
		body: "MediaPipe detects the hand and returns landmarks — wrist, knuckles, fingertips — instead of a raw crop."
	},
	{
		id: "prepare",
		kicker: "03",
		title: "Prepare",
		body: "The frame is preprocessed and reduced to the features the network was trained on. NumPy does the unglamorous work."
	},
	{
		id: "classify",
		kicker: "04",
		title: "Classify",
		body: "A convolutional network in TensorFlow and Keras scores the alphabet. I trained it, then judged it on held-out signs."
	},
	{
		id: "show",
		kicker: "05",
		title: "Show",
		body: "The predicted letter is drawn back onto the screen. That last step is the product."
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/cn-Ccejyh36.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
require_jsx_runtime();
var buttonVariants = cva("tap inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		tone: {
			lacquer: "bg-lacquer text-paper hover:opacity-90",
			ghost: "border border-line bg-transparent text-ink hover:border-ink",
			ghostInk: "border border-paper/30 bg-transparent text-paper hover:border-paper",
			text: "h-auto bg-transparent px-0 text-ink underline decoration-line underline-offset-4 hover:decoration-lacquer"
		},
		size: {
			md: "h-11 px-5 text-sm",
			sm: "h-10 px-4 text-sm"
		}
	},
	defaultVariants: {
		tone: "lacquer",
		size: "md"
	}
});
//#endregion
export { SAMPLE_SIGNS as a, experience as c, projects as d, stats as f, POSE_OPEN as i, getProject as l, toolkit as m, cn as n, alongside as o, studioSteps as p, HAND_EDGES as r, education as s, buttonVariants as t, profile as u };
