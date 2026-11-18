import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudy } from "@/components/site/case-study";
import { NotFound } from "@/components/site/not-found";
import { getProject, type Project } from "@/data/portfolio";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }): Project => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData ? `${loaderData.title} — Ranjitha S` : "Work — Ranjitha S" }],
  }),
  component: function WorkRoute() {
    const project = Route.useLoaderData();
    return <CaseStudy project={project} />;
  },
  notFoundComponent: NotFound,
});
