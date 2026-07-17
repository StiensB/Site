import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { siteContent } from "@/content/site";

const accentClasses = {
  blue: "from-sky-500/18 to-transparent",
  amber: "from-amber-400/18 to-transparent",
  violet: "from-violet-500/18 to-transparent",
};

export function OffKeyboardSection() {
  return (
    <Section
      id="off-the-keyboard"
      eyebrow="Off the Keyboard"
      title="Craft, patience, and systems thinking outside of shipping software"
      description="The hobbies that matter most to me are deliberate and hands-on. They keep me balanced while reinforcing the same qualities that show up in my engineering work: discipline, iteration, and care for the details."
    >
      <Card className="p-6 md:p-8">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">Education</p>
              <h3 className="mt-2 font-[family:var(--font-heading)] text-2xl font-semibold text-white">
                {siteContent.education.school}
              </h3>
              <p className="mt-2 text-sm text-sky-300">{siteContent.education.period}</p>
            </div>
            <p className="text-base leading-7 text-slate-300">{siteContent.education.details}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {siteContent.hobbies.map((item) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-[22px] border border-white/10 bg-slate-950/60 p-5"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentClasses[item.accent]}`} />
                <div className="relative">
                  <h4 className="font-[family:var(--font-heading)] text-xl font-semibold text-white">{item.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Section>
  );
}
