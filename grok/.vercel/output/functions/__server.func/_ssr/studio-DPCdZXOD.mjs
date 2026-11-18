import { i as __toESM } from "../_runtime.mjs";
import { a as SAMPLE_SIGNS, n as cn, p as studioSteps, r as HAND_EDGES } from "./button-2ZvM81S8.mjs";
import { J as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Pause, o as ArrowUpRight, r as Play } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio-DPCdZXOD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function lerpPose(from, to, t) {
	return from.map((point, index) => {
		const target = to[index] ?? point;
		return [point[0] + (target[0] - point[0]) * t, point[1] + (target[1] - point[1]) * t];
	});
}
function breathePose(pose, amount) {
	const wrist = pose[0] ?? [50, 70];
	return pose.map((point, index) => {
		if (index === 0) return point;
		return [wrist[0] + (point[0] - wrist[0]) * amount, wrist[1] + (point[1] - wrist[1]) * amount];
	});
}
var TIPS = /* @__PURE__ */ new Set([
	4,
	8,
	12,
	16,
	20
]);
function HandCanvas({ pose, breathe = false, variant = "onInk", className }) {
	const svgRef = (0, import_react.useRef)(null);
	const poseRef = (0, import_react.useRef)(pose);
	poseRef.current = pose;
	(0, import_react.useEffect)(() => {
		const svg = svgRef.current;
		if (!svg) return;
		const lines = Array.from(svg.querySelectorAll("line"));
		const dots = Array.from(svg.querySelectorAll("circle"));
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let frame = 0;
		let visible = true;
		let current = poseRef.current.map((point) => [...point]);
		const paint = (time) => {
			const target = poseRef.current;
			current = reduce ? target.map((point) => [...point]) : lerpPose(current, target, .16);
			const drawn = breathe && !reduce ? breathePose(current, .94 + Math.sin(time / 900) * .06) : current;
			lines.forEach((line, index) => {
				const edge = HAND_EDGES[index];
				if (!edge) return;
				const a = drawn[edge[0]];
				const b = drawn[edge[1]];
				if (!a || !b) return;
				line.setAttribute("x1", String(a[0]));
				line.setAttribute("y1", String(a[1]));
				line.setAttribute("x2", String(b[0]));
				line.setAttribute("y2", String(b[1]));
			});
			dots.forEach((dot, index) => {
				const point = drawn[index];
				if (!point) return;
				dot.setAttribute("cx", String(point[0]));
				dot.setAttribute("cy", String(point[1]));
			});
			if (visible && !reduce) frame = requestAnimationFrame(paint);
		};
		frame = requestAnimationFrame(paint);
		const observer = new IntersectionObserver(([entry]) => {
			visible = entry?.isIntersecting ?? true;
			if (visible && !reduce) {
				cancelAnimationFrame(frame);
				frame = requestAnimationFrame(paint);
			}
		});
		observer.observe(svg);
		return () => {
			cancelAnimationFrame(frame);
			observer.disconnect();
		};
	}, [breathe]);
	const lineClass = variant === "onInk" ? "stroke-paper/70" : "stroke-ink/50";
	const dotClass = variant === "onInk" ? "fill-paper" : "fill-ink";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		ref: svgRef,
		viewBox: "8 0 84 100",
		className: cn("h-full w-full", className),
		"aria-hidden": "true",
		children: [HAND_EDGES.map((edge, index) => {
			const a = pose[edge[0]] ?? [0, 0];
			const b = pose[edge[1]] ?? [0, 0];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: a[0],
				y1: a[1],
				x2: b[0],
				y2: b[1],
				className: lineClass,
				strokeWidth: "1.1",
				strokeLinecap: "round"
			}, index);
		}), pose.map((point, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: point[0],
			cy: point[1],
			r: index === 0 ? 2.1 : TIPS.has(index) ? 1.7 : 1.25,
			className: TIPS.has(index) ? "fill-lacquer" : dotClass
		}, index))]
	});
}
function OutLink({ href, children, placeholder = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className: "tap inline-flex h-11 items-center gap-2 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "border-b border-current pb-px",
				children
			}),
			placeholder ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs tracking-widest text-lacquer uppercase",
				children: "Placeholder"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
				className: "size-4",
				"aria-hidden": true
			})
		]
	});
}
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setShown(true);
			return;
		}
		const observer = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setShown(true);
				observer.disconnect();
			}
		}, {
			threshold: .16,
			rootMargin: "0px 0px -8% 0px"
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: cn("reveal", shown && "is-in", className),
		children
	});
}
function Studio() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [signIndex, setSignIndex] = (0, import_react.useState)(1);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const sign = SAMPLE_SIGNS[signIndex] ?? SAMPLE_SIGNS[0];
	const current = studioSteps[step] ?? studioSteps[0];
	(0, import_react.useEffect)(() => {
		if (!playing) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const timer = window.setInterval(() => {
			setStep((value) => (value + 1) % studioSteps.length);
		}, 1600);
		return () => window.clearInterval(timer);
	}, [playing]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-12 lg:gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-2",
				children: studioSteps.map((item, index) => {
					const active = index === step;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setPlaying(false);
							setStep(index);
						},
						className: cn("tap flex w-full items-baseline gap-4 border px-4 py-3 text-left transition-colors duration-200", active ? "border-lacquer bg-paper/5 text-paper" : "border-paper/15 text-paper/70 hover:border-paper/40 hover:text-paper"),
						"aria-current": active ? "step" : void 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg text-lacquer",
							children: item.kicker
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium tracking-wide",
							children: item.title
						})]
					}) }, item.id);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setPlaying((value) => !value),
				className: "tap mt-4 inline-flex h-11 items-center gap-3 border border-paper/30 px-4 text-sm text-paper hover:border-paper",
				"aria-pressed": playing,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative grid size-4 place-items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
						className: cn("col-start-1 row-start-1 size-4 transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]", playing ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-none"),
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {
						className: cn("col-start-1 row-start-1 size-4 transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]", playing ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]"),
						"aria-hidden": true
					})]
				}), playing ? "Pause the walkthrough" : "Play the walkthrough"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-80 flex-col border border-paper/15 bg-ink",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-paper/15 px-4 py-3 text-xs tracking-widest text-paper/60 uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Stage · ", current.title] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Illustration, not a live model" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stage-in relative flex flex-1 flex-col justify-center px-4 py-6 md:px-8",
						children: [
							current.id === "capture" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaptureStage, {}) : null,
							current.id === "landmarks" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto aspect-square w-full max-w-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandCanvas, {
									pose: sign.pose,
									variant: "onInk",
									className: "h-full w-full"
								})
							}) : null,
							current.id === "prepare" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrepareStage, {}) : null,
							current.id === "classify" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassifyStage, { weights: sign.ranking }) : null,
							current.id === "show" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShowStage, {
								letter: sign.letter,
								note: sign.note
							}) : null
						]
					}, current.id),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "border-t border-paper/15 px-4 py-4 text-sm text-paper/80 md:px-8",
						children: current.body
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				role: "group",
				"aria-label": "Sample letters",
				children: [SAMPLE_SIGNS.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSignIndex(index),
					className: cn("tap h-11 w-11 border text-sm transition-colors duration-200", index === signIndex ? "border-lacquer bg-lacquer text-paper" : "border-paper/25 text-paper hover:border-paper"),
					"aria-pressed": index === signIndex,
					children: item.letter
				}, item.letter)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "basis-full pt-1 text-sm text-paper/60",
					children: "Sample poses for the interface. Rankings on the classify step are illustrative — this page does not run the trained network."
				})]
			})]
		})]
	});
}
function CaptureStage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-video overflow-hidden border border-paper/30",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "frame-glow absolute inset-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scan-line absolute inset-x-0 top-0 h-px bg-lacquer" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute bottom-3 left-3 text-xs tracking-widest text-paper/70 uppercase",
					children: "Frame"
				})
			]
		})
	});
}
function PrepareStage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid w-full max-w-sm grid-cols-6 gap-2",
		children: Array.from({ length: 24 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "feature-cell aspect-square border border-paper/20 bg-lacquer/80",
			style: { animationDelay: `${index * 35}ms` }
		}, index))
	});
}
function ClassifyStage({ weights }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const frame = requestAnimationFrame(() => setReady(true));
		return () => cancelAnimationFrame(frame);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid w-full max-w-md gap-4",
		children: [weights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[2rem_1fr] items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-2xl text-paper",
				children: item.letter
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block h-2 bg-paper/15",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rank-bar block h-full bg-lacquer",
					style: { width: ready ? `${Math.round(item.weight * 100)}%` : "0%" }
				})
			})]
		}, item.letter)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-widest text-paper/50 uppercase",
			children: "Sample ranking, not a measured score"
		})]
	});
}
function ShowStage({ letter, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-2 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-8xl text-lacquer italic md:text-9xl",
			children: letter
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mx-auto mt-3 max-w-sm text-sm text-paper/75",
			children: note
		})]
	});
}
//#endregion
export { Studio as i, OutLink as n, Reveal as r, HandCanvas as t };
