import { i as __toESM } from "../_runtime.mjs";
import { c as experience, d as projects, f as stats, i as POSE_OPEN, m as toolkit, o as alongside, s as education, t as buttonVariants, u as profile } from "./button-2ZvM81S8.mjs";
import { J as require_jsx_runtime, q as require_react, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Studio, n as OutLink, r as Reveal, t as HandCanvas } from "./studio-DPCdZXOD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DrBTint4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toolkit, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Path, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex min-h-svh flex-col bg-ink pt-16 text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl flex-1 items-center gap-8 px-5 py-8 md:grid-cols-2 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs tracking-widest text-lacquer uppercase",
					children: [
						profile.degree,
						" · RNSIT · ",
						profile.location
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 text-6xl sm:text-7xl lg:text-8xl",
					children: ["Ranjitha", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-lacquer italic",
						children: "S."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-md font-display text-2xl leading-snug text-paper sm:text-3xl",
					children: "I build the piece between a model and a person."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-md text-paper/75",
					children: "Sign letters from a webcam, a route that continues indoors, music chosen from a face. I study in Bengaluru, and I like the work that has to run while someone is watching."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4",
					children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-display text-2xl text-paper",
						children: item.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-xs tracking-wide text-paper/55 uppercase",
						children: item.label
					})] }, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#work",
						className: buttonVariants({ tone: "lacquer" }),
						children: "Selected work"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: buttonVariants({ tone: "ghostInk" }),
						children: "Write to me"
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "mx-auto w-40 md:w-full md:max-w-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-square border border-paper/15",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandCanvas, {
						pose: POSE_OPEN,
						breathe: true,
						variant: "onInk",
						className: "h-full w-full"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-3 text-sm text-paper/60",
					children: "Twenty-one landmarks — the skeleton the sign-language model reads. The drawing breathes; it is not your camera."
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-paper/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto max-w-6xl px-5 py-4 text-sm text-paper/75 md:px-8",
				children: [
					"Now ·",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/work/$slug",
						params: { slug: "moodsync" },
						className: "nav-link",
						children: "MoodSync-AI"
					}),
					" ",
					"and",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/work/$slug",
						params: { slug: "campusar" },
						className: "nav-link",
						children: "CampusAR"
					})
				]
			})
		})]
	});
}
function Work() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "scroll-mt-20 bg-paper py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-lacquer uppercase",
				children: "Selected work"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 max-w-xl text-4xl sm:text-5xl",
				children: "Four systems, each with a person at the end of it."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 divide-y divide-line border-y border-line",
				children: projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group relative py-10 md:py-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-0 left-0 h-full w-px origin-top scale-y-0 bg-lacquer transition-transform duration-300 group-hover:scale-y-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index * 40,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 md:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lacquer md:col-span-2",
								children: project.index
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-baseline justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl leading-none sm:text-4xl",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/work/$slug",
												params: { slug: project.slug },
												className: "nav-link decoration-transparent",
												children: project.title
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted",
											children: project.dates
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 max-w-2xl text-lg",
										children: project.summary
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm text-muted",
										children: [
											project.role,
											project.team ? ` · ${project.team}` : "",
											project.mentor ? ` · Mentor ${project.mentor}` : ""
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 grid gap-6 md:grid-cols-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beat, {
												title: "Problem",
												body: project.problem
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beat, {
												title: "Approach",
												body: project.approach
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beat, {
												title: "What’s distinct",
												body: project.distinct
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-6 flex flex-wrap gap-2",
										children: project.stack.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "border border-line px-3 py-1 text-sm text-muted",
											children: item
										}, item))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap items-center gap-x-6 gap-y-1",
										children: [project.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutLink, {
											href: link.href,
											placeholder: link.placeholder,
											children: link.label
										}, link.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/work/$slug",
											params: { slug: project.slug },
											className: "tap inline-flex h-11 items-center text-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "border-b border-current pb-px",
												children: "Read the case study"
											})
										})]
									})
								]
							})]
						})
					})]
				}, project.slug))
			})]
		})
	});
}
function Beat({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
		className: "text-xs tracking-widest text-lacquer uppercase",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-2 text-sm text-ink/80",
		children: body
	})] });
}
function StudioSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "studio",
		className: "scroll-mt-20 bg-ink py-20 text-paper md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-lacquer uppercase",
					children: "Studio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl text-4xl sm:text-5xl",
					children: "From a frame to a letter."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-paper/75",
					children: "The sign-language interpreter, walked one stage at a time. I prepared the dataset, trained the network, and wired the webcam. Press play, or pick a step. Pick a letter to change the pose."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {})
			})]
		})
	});
}
function Toolkit() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "toolkit",
		className: "scroll-mt-20 bg-paper py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-lacquer uppercase",
					children: "Toolkit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-xl text-4xl sm:text-5xl",
					children: "What I actually use."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-muted",
					children: "Languages from coursework and projects, the web stack I ship interfaces with, and the vision tools behind the camera work. Soft skills stay in the work: I coordinate a team, present it, and keep the deadline."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3",
				children: toolkit.map((group, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: index * 50,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-sans text-sm tracking-widest text-lacquer uppercase",
						children: group.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-wrap gap-2",
						children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border border-line px-3 py-2 text-sm transition-colors duration-200 hover:border-lacquer",
							children: item
						}, item))
					})]
				}, group.title))
			})]
		})
	});
}
function Path() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "path",
		className: "scroll-mt-20 border-t border-line bg-paper py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-lacquer uppercase",
					children: "Path"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl sm:text-5xl",
					children: "Study, a semester inside Samsung, and the rooms I show up in."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-16 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-sans text-sm tracking-widest text-muted uppercase",
						children: "Experience"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-6 border-l border-line",
						children: experience.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative pb-10 pl-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1.5 -left-1.5 size-3 rounded-full bg-lacquer" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: item.when
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-2xl",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm",
									children: item.place
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-ink/80",
									children: item.body
								})
							]
						}, item.title))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-sans text-sm tracking-widest text-muted uppercase",
						children: "Education"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-6 border-l border-line",
						children: education.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative pb-10 pl-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1.5 -left-1.5 size-3 rounded-full bg-ink" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: item.when
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-2xl",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm",
									children: item.place
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-lacquer",
									children: item.detail
								})
							]
						}, item.title))
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-6 border-t border-line pt-10 md:grid-cols-3",
					children: alongside.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: item.detail
					})] }, item.title))
				})
			]
		})
	});
}
function Contact() {
	const [note, setNote] = (0, import_react.useState)("");
	function onSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const name = String(data.get("name") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const message = String(data.get("message") ?? "").trim();
		const subject = encodeURIComponent(`Note from ${name}`);
		const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
		window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
		setNote("Your mail app should open with the note filled in. If it doesn’t, use the address below.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-20 bg-ink py-20 text-paper md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-lacquer uppercase",
						children: "A note"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl sm:text-5xl",
						children: "Send a note."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-paper/75",
						children: "Internships, a project, or a question about the work. I read English, Kannada, Hindi, and German — write in whichever is easiest."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 grid gap-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "nav-link",
								href: `mailto:${profile.email}`,
								children: profile.email
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "nav-link text-paper/70",
								href: `mailto:${profile.collegeEmail}`,
								children: profile.collegeEmail
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "nav-link",
								href: profile.phoneHref,
								children: profile.phoneDisplay
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "nav-link",
								href: profile.whatsapp,
								target: "_blank",
								rel: "noreferrer",
								children: "WhatsApp"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "nav-link",
								href: profile.linkedin,
								target: "_blank",
								rel: "noreferrer",
								children: "LinkedIn"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutLink, {
								href: profile.github,
								placeholder: profile.githubPlaceholder,
								children: "GitHub"
							}) })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-sm text-paper/55",
						children: [
							profile.interests.join(" · "),
							" · ",
							profile.location
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "grid gap-6 lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2 text-sm",
						children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "name",
							required: true,
							autoComplete: "name",
							className: "h-12 border-b border-paper/25 bg-transparent text-paper outline-none focus:border-lacquer"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2 text-sm",
						children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "email",
							type: "email",
							required: true,
							autoComplete: "email",
							className: "h-12 border-b border-paper/25 bg-transparent text-paper outline-none focus:border-lacquer"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-2 text-sm",
						children: ["Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							required: true,
							rows: 5,
							className: "border-b border-paper/25 bg-transparent py-3 text-paper outline-none focus:border-lacquer"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: buttonVariants({ tone: "lacquer" }),
							children: "Send the note"
						}), note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-paper/75",
							role: "status",
							children: note
						}) : null]
					})
				]
			})]
		})
	});
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
