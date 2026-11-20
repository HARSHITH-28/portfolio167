import { Link } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { POSE_OPEN } from "@/data/landmarks";
import {
  alongside,
  education,
  experience,
  profile,
  projects,
  stats,
  toolkit,
} from "@/data/portfolio";
import { buttonVariants } from "@/components/ui/button";
import { HandCanvas } from "@/components/site/hand-canvas";
import { OutLink } from "@/components/site/out-link";
import { Reveal } from "@/components/site/reveal";
import { Studio } from "@/components/site/studio";

export function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <StudioSection />
      <Toolkit />
      <Path />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section className="flex min-h-svh flex-col bg-ink pt-16 text-paper">
      <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-8 px-5 py-8 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-xs tracking-widest text-lacquer uppercase">
            {profile.degree} · RNSIT · {profile.location}
          </p>
          <h1 className="mt-4 text-6xl sm:text-7xl lg:text-8xl">
            Ranjitha
            <span className="mt-1 block text-lacquer italic">S.</span>
          </h1>
          <p className="mt-5 max-w-md font-display text-2xl leading-snug text-paper sm:text-3xl">
            I build the piece between a model and a person.
          </p>
          <p className="mt-3 max-w-md text-paper/75">
            Sign letters from a webcam, a route that continues indoors, music chosen from a face. I study in
            Bengaluru, and I like the work that has to run while someone is watching.
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label}>
                <dt className="font-display text-2xl text-paper">{item.value}</dt>
                <dd className="text-xs tracking-wide text-paper/55 uppercase">{item.label}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className={buttonVariants({ tone: "lacquer" })}>
              Selected work
            </a>
            <a href="#contact" className={buttonVariants({ tone: "ghostInk" })}>
              Write to me
            </a>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://retailpulse.up.railway.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-lacquer/60 bg-lacquer/15 px-4 text-xs font-medium tracking-wide text-paper transition-colors hover:bg-lacquer"
            >
              <span className="size-1.5 rounded-full bg-lacquer" aria-hidden="true" />
              RetailPulse Live Demo &#8599;
            </a>
            <a
              href="https://mood-sync-ai-v2-ranjitha-s.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-paper/25 bg-paper/10 px-4 text-xs font-medium tracking-wide text-paper transition-colors hover:border-lacquer hover:bg-lacquer"
            >
              <span className="size-1.5 rounded-full bg-paper" aria-hidden="true" />
              MoodSync-AI V2 Live Demo &#8599;
            </a>
          </div>
        </div>
        <figure className="mx-auto w-40 md:w-full md:max-w-sm">
          <div className="aspect-square border border-paper/15">
            <HandCanvas pose={POSE_OPEN} breathe variant="onInk" className="h-full w-full" />
          </div>
          <figcaption className="mt-3 text-sm text-paper/60">
            Twenty-one landmarks — the skeleton the sign-language model reads. The drawing breathes; it is not your camera.
          </figcaption>
        </figure>
      </div>
      <div className="border-t border-paper/15">
        <p className="mx-auto max-w-6xl px-5 py-4 text-sm text-paper/75 md:px-8">
          Now ·{" "}
          <Link to="/work/$slug" params={{ slug: "retailpulse" }} className="nav-link">
            RetailPulse
          </Link>
          ,{" "}
          <Link to="/work/$slug" params={{ slug: "moodsync" }} className="nav-link">
            MoodSync-AI V2
          </Link>{" "}
          and{" "}
          <Link to="/work/$slug" params={{ slug: "campusar" }} className="nav-link">
            CampusAR
          </Link>
        </p>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="scroll-mt-20 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-widest text-lacquer uppercase">Selected work</p>
          <h2 className="mt-3 max-w-xl text-4xl sm:text-5xl">Five systems, each with a person at the end of it.</h2>
        </Reveal>
        <div className="mt-14 divide-y divide-line border-y border-line">
          {projects.map((project, index) => (
            <article key={project.slug} className="group relative py-10 md:py-14">
              <span className="absolute top-0 left-0 h-full w-px origin-top scale-y-0 bg-lacquer transition-transform duration-300 group-hover:scale-y-100" />
              <Reveal delay={index * 40}>
                <div className="grid gap-6 md:grid-cols-12">
                  <p className="font-display text-lacquer md:col-span-2">{project.index}</p>
                  <div className="md:col-span-10">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-display text-3xl leading-none sm:text-4xl">
                        <Link
                          to="/work/$slug"
                          params={{ slug: project.slug }}
                          className="nav-link decoration-transparent"
                        >
                          {project.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted">{project.dates}</p>
                    </div>
                    <p className="mt-3 max-w-2xl text-lg">{project.summary}</p>
                    <p className="mt-2 text-sm text-muted">
                      {project.role}
                      {project.team ? ` · ${project.team}` : ""}
                      {project.mentor ? ` · Mentor ${project.mentor}` : ""}
                    </p>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                      <Beat title="Problem" body={project.problem} />
                      <Beat title="Approach" body={project.approach} />
                      <Beat title="What’s distinct" body={project.distinct} />
                    </div>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <li key={item} className="border border-line px-3 py-1 text-sm text-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1">
                      {project.links.map((link) => (
                        <OutLink key={link.label} href={link.href} placeholder={link.placeholder}>
                          {link.label}
                        </OutLink>
                      ))}
                      <Link
                        to="/work/$slug"
                        params={{ slug: project.slug }}
                        className="tap inline-flex h-11 items-center text-sm"
                      >
                        <span className="border-b border-current pb-px">Read the case study</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Beat({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h4 className="text-xs tracking-widest text-lacquer uppercase">{title}</h4>
      <p className="mt-2 text-sm text-ink/80">{body}</p>
    </div>
  );
}

function StudioSection() {
  return (
    <section id="studio" className="scroll-mt-20 bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-widest text-lacquer uppercase">Studio</p>
          <h2 className="mt-3 max-w-2xl text-4xl sm:text-5xl">From a frame to a letter.</h2>
          <p className="mt-4 max-w-xl text-paper/75">
            The sign-language interpreter, walked one stage at a time. I prepared the dataset, trained the
            network, and wired the webcam. Press play, or pick a step. Pick a letter to change the pose.
          </p>
        </Reveal>
        <div className="mt-12">
          <Studio />
        </div>
      </div>
    </section>
  );
}

function Toolkit() {
  return (
    <section id="toolkit" className="scroll-mt-20 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-widest text-lacquer uppercase">Toolkit</p>
          <h2 className="mt-3 max-w-xl text-4xl sm:text-5xl">What I actually use.</h2>
          <p className="mt-4 max-w-xl text-muted">
            Languages from coursework and projects, the web stack I ship interfaces with, and the vision tools
            behind the camera work. Soft skills stay in the work: I coordinate a team, present it, and keep the deadline.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {toolkit.map((group, index) => (
            <Reveal key={group.title} delay={index * 50}>
              <h3 className="font-sans text-sm tracking-widest text-lacquer uppercase">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-line px-3 py-2 text-sm transition-colors duration-200 hover:border-lacquer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Path() {
  return (
    <section id="path" className="scroll-mt-20 border-t border-line bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs tracking-widest text-lacquer uppercase">Path</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Study, a semester inside Samsung, and the rooms I show up in.</h2>
        </Reveal>
        <div className="mt-14 grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="font-sans text-sm tracking-widest text-muted uppercase">Experience</h3>
            <ol className="mt-6 border-l border-line">
              {experience.map((item) => (
                <li key={item.title} className="relative pb-10 pl-8">
                  <span className="absolute top-1.5 -left-1.5 size-3 rounded-full bg-lacquer" />
                  <p className="text-sm text-muted">{item.when}</p>
                  <p className="mt-1 font-display text-2xl">{item.title}</p>
                  <p className="text-sm">{item.place}</p>
                  <p className="mt-3 text-sm text-ink/80">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="font-sans text-sm tracking-widest text-muted uppercase">Education</h3>
            <ol className="mt-6 border-l border-line">
              {education.map((item) => (
                <li key={item.title} className="relative pb-10 pl-8">
                  <span className="absolute top-1.5 -left-1.5 size-3 rounded-full bg-ink" />
                  <p className="text-sm text-muted">{item.when}</p>
                  <p className="mt-1 font-display text-2xl">{item.title}</p>
                  <p className="text-sm">{item.place}</p>
                  <p className="mt-2 text-sm text-lacquer">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="mt-4 grid gap-6 border-t border-line pt-10 md:grid-cols-3">
          {alongside.map((item) => (
            <Reveal key={item.title}>
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [note, setNote] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
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

  return (
    <section id="contact" className="scroll-mt-20 bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs tracking-widest text-lacquer uppercase">A note</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Send a note.</h2>
          <p className="mt-4 text-paper/75">
            Internships, a project, or a question about the work. I read English, Kannada, Hindi, and German —
            write in whichever is easiest.
          </p>
          <ul className="mt-8 grid gap-3 text-sm">
            <li>
              <a className="nav-link" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>
            <li>
              <a className="nav-link text-paper/70" href={`mailto:${profile.collegeEmail}`}>
                {profile.collegeEmail}
              </a>
            </li>
            <li>
              <a className="nav-link" href={profile.phoneHref}>
                {profile.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="nav-link" href={profile.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a className="nav-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <OutLink href={profile.github} placeholder={profile.githubPlaceholder}>
                GitHub
              </OutLink>
            </li>
          </ul>
          <p className="mt-8 text-sm text-paper/55">
            {profile.interests.join(" · ")} · {profile.location}
          </p>
        </div>
        <form onSubmit={onSubmit} className="grid gap-6 lg:col-span-7">
          <label className="grid gap-2 text-sm">
            Name
            <input
              name="name"
              required
              autoComplete="name"
              className="h-12 border-b border-paper/25 bg-transparent text-paper outline-none focus:border-lacquer"
            />
          </label>
          <label className="grid gap-2 text-sm">
            Email
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="h-12 border-b border-paper/25 bg-transparent text-paper outline-none focus:border-lacquer"
            />
          </label>
          <label className="grid gap-2 text-sm">
            Message
            <textarea
              name="message"
              required
              rows={5}
              className="border-b border-paper/25 bg-transparent py-3 text-paper outline-none focus:border-lacquer"
            />
          </label>
          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" className={buttonVariants({ tone: "lacquer" })}>
              Send the note
            </button>
            {note ? (
              <p className="text-sm text-paper/75" role="status">
                {note}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
