import { d as projects } from "./_ssr/button-2ZvM81S8.mjs";
import { J as require_jsx_runtime, y as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./_ssr/router-CpzX7VCH.mjs";
import { i as Studio, n as OutLink, r as Reveal } from "./_ssr/studio-DPCdZXOD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BEq4hjYw.js
var import_jsx_runtime = require_jsx_runtime();
function CaseStudy({ project }) {
	const index = projects.findIndex((item) => item.slug === project.slug);
	const next = projects[(index + 1) % projects.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "bg-paper pt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "work",
							className: "text-sm text-muted nav-link",
							children: "All work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 text-xs tracking-widest text-lacquer uppercase",
							children: [
								project.index,
								" · ",
								project.dates
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 max-w-3xl text-5xl sm:text-6xl lg:text-7xl",
							children: project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-xl",
							children: project.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-muted",
							children: [
								project.role,
								project.team ? ` · ${project.team}` : "",
								project.mentor ? ` · Mentor ${project.mentor}` : ""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap gap-x-6",
							children: project.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutLink, {
								href: link.href,
								placeholder: link.placeholder,
								children: link.label
							}, link.label))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Problem",
							body: project.problem
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Approach",
							body: project.approach
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "What I owned",
							body: project.owned
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "What’s distinct",
							body: project.distinct
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-lacquer uppercase",
							children: "Through the system"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-4 border border-line",
							children: project.flow.map((step, stepIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-baseline gap-4 border-b border-line px-4 py-4 last:border-b-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-lacquer",
									children: ["0", stepIndex + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step })]
							}, step))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex flex-wrap gap-2",
							children: project.stack.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border border-line px-3 py-1 text-sm text-muted",
								children: item
							}, item))
						})
					]
				})]
			}),
			project.slug === "sign-language" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-ink py-20 text-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 md:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-xl text-4xl",
							children: "Walk the same pipeline."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-paper/75",
							children: "An illustration of the stages above. It does not call the model."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {})
						})
					]
				})
			}) : null,
			next ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-3 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Next"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/work/$slug",
						params: { slug: next.slug },
						className: "font-display text-4xl nav-link",
						children: next.title
					})]
				})
			}) : null
		]
	});
}
function Section({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mb-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-sans text-xs tracking-widest text-lacquer uppercase",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-lg",
			children: body
		})]
	});
}
var SplitComponent = function WorkRoute() {
	const project = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStudy, { project });
};
//#endregion
export { SplitComponent as component };
