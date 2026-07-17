import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { siteContent } from "@/content/site";

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Technical Capabilities"
      title="Problem-domain fluency across cloud, backend, frontend, and delivery systems"
      description="The strongest through-line in my work is architectural range: I can move from infrastructure and distributed messaging to application APIs and polished user-facing experiences without losing clarity or product intent."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {siteContent.skills.map((group) => (
          <Card key={group.title} className="p-6">
            <h3 className="font-[family:var(--font-heading)] text-xl font-semibold text-white">{group.title}</h3>
            <ul className="mt-4 grid gap-2 text-sm leading-7 text-slate-400 sm:text-base">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
