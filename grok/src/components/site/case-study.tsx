import { Link } from "@tanstack/react-router";
import { projects, type Project } from "@/data/portfolio";
import { OutLink } from "@/components/site/out-link";
import { Reveal } from "@/components/site/reveal";
import { Studio } from "@/components/site/studio";

export function CaseStudy({ project }: { project: Project }) {
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="bg-paper pt-16">
      <header className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Link to="/" hash="work" className="text-sm text-muted nav-link">
            All work
          </Link>
          <p className="mt-8 text-xs tracking-widest text-lacquer uppercase">
            {project.index} · {project.dates}
          </p>
          <h1 className="mt-3 max-w-3xl text-5xl sm:text-6xl lg:text-7xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-xl">{project.summary}</p>
          <p className="mt-4 text-sm text-muted">
            {project.role}
            {project.team ? ` · ${project.team}` : ""}
            {project.mentor ? ` · Mentor ${project.mentor}` : ""}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6">
            {project.links.map((link) => (
              <OutLink key={link.label} href={link.href} placeholder={link.placeholder}>
                {link.label}
              </OutLink>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Section title="Problem" body={project.problem} />
            <Section title="Approach" body={project.approach} />
            <Section title="What I owned" body={project.owned} />
            <Section title="What’s distinct" body={project.distinct} />
          </Reveal>
        </div>
        <aside className="lg:col-span-5">
          <p className="text-xs tracking-widest text-lacquer uppercase">Through the system</p>
          <ol className="mt-4 border border-line">
            {project.flow.map((step, stepIndex) => (
              <li key={step} className="flex items-baseline gap-4 border-b border-line px-4 py-4 last:border-b-0">
                <span className="font-display text-lacquer">0{stepIndex + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li key={item} className="border border-line px-3 py-1 text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {project.slug === "sign-language" ? (
        <section className="bg-ink py-20 text-paper">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="max-w-xl text-4xl">Walk the same pipeline.</h2>
            <p className="mt-3 max-w-xl text-paper/75">
              An illustration of the stages above. It does not call the model.
            </p>
            <div className="mt-10">
              <Studio />
            </div>
          </div>
        </section>
      ) : null}

      {next ? (
        <div className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
            <p className="text-sm text-muted">Next</p>
            <Link to="/work/$slug" params={{ slug: next.slug }} className="font-display text-4xl nav-link">
              {next.title}
            </Link>
          </div>
        </div>
      ) : null}
    </article>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <section className="mb-10">
      <h2 className="font-sans text-xs tracking-widest text-lacquer uppercase">{title}</h2>
      <p className="mt-3 text-lg">{body}</p>
    </section>
  );
}
