import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { siteContent } from "@/content/site";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Professional Experience"
      title="Enterprise delivery across architecture, APIs, and product execution"
      description={siteContent.profile}
    >
      <div className="grid gap-5">
        {siteContent.experience.map((item) => (
          <Card
            key={`${item.company}-${item.role}`}
            className="group p-6 transition duration-200 hover:-translate-y-1 hover:border-sky-300/30"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">{item.company}</p>
                  <h3 className="mt-2 font-[family:var(--font-heading)] text-2xl font-semibold text-white">
                    {item.role}
                  </h3>
                </div>
                <p className="max-w-3xl text-base leading-7 text-slate-300">{item.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="shrink-0 text-sm font-medium text-sky-300">{item.period}</p>
            </div>
            <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-400 sm:text-base">
              {item.impact.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
