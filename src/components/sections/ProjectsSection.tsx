import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { siteContent } from "@/content/site";

export function ProjectsSection() {
  const [featuredProject, ...otherProjects] = siteContent.projects;

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Flagship projects that show architectural depth and delivery ownership"
      description="Each project highlights a different strength: secure product integration, large-scale migration execution, and high-throughput API performance in production."
    >
      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="p-6 md:p-8">
          <div className="space-y-5">
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300">{featuredProject.eyebrow}</p>
              <h3 className="font-[family:var(--font-heading)] text-3xl font-semibold text-white">
                {featuredProject.title}
              </h3>
              <p className="text-base leading-7 text-slate-300">{featuredProject.challenge}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-sm font-medium text-slate-200">Role</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{featuredProject.role}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-200">Architecture</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{featuredProject.architecture}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-200">Outcome</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{featuredProject.outcome}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {featuredProject.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Card>

        <div className="grid gap-5">
          {otherProjects.map((project) => (
            <Card key={project.title} className="group p-6 transition duration-200 hover:-translate-y-1 hover:border-violet-300/30">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">{project.eyebrow}</p>
              <h3 className="mt-3 font-[family:var(--font-heading)] text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
                <p><span className="font-medium text-slate-200">Challenge:</span> {project.challenge}</p>
                <p><span className="font-medium text-slate-200">Architecture:</span> {project.architecture}</p>
                <p><span className="font-medium text-slate-200">Outcome:</span> {project.outcome}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
