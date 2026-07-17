import { siteContent } from "@/content/site";

export const metadata = {
  title: "Bray Stiens | Resume",
  description: "Resume overview for Bray Stiens, Senior Software Engineer.",
};

export default function ResumePage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-12 md:px-10">
      <header className="space-y-4 border-b border-white/10 pb-8">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300">Resume</p>
        <div className="space-y-3">
          <h1 className="font-[family:var(--font-heading)] text-4xl font-bold text-white">
            {siteContent.hero.name}
          </h1>
          <p className="text-lg text-slate-300">{siteContent.hero.title}</p>
          <p className="max-w-3xl text-base leading-7 text-slate-400">{siteContent.hero.summary}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          <a href={`mailto:${siteContent.footer.email}`}>{siteContent.footer.email}</a>
          <a href={siteContent.footer.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={siteContent.footer.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="font-[family:var(--font-heading)] text-2xl font-semibold text-white">Experience</h2>
        <div className="grid gap-6">
          {siteContent.experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.company}</p>
                </div>
                <p className="text-sm text-sky-300">{item.period}</p>
              </div>
              <p className="text-sm leading-7 text-slate-300">{item.summary}</p>
              <ul className="grid gap-2 text-sm leading-7 text-slate-400">
                {item.impact.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="font-[family:var(--font-heading)] text-2xl font-semibold text-white">Skills</h2>
          <div className="grid gap-4">
            {siteContent.skills.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">{group.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div>
            <h2 className="font-[family:var(--font-heading)] text-2xl font-semibold text-white">Education</h2>
            <p className="mt-3 text-sm text-sky-300">{siteContent.education.period}</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">{siteContent.education.school}</p>
            <p className="text-sm leading-7 text-slate-400">{siteContent.education.details}</p>
          </div>
          <div>
            <h2 className="font-[family:var(--font-heading)] text-2xl font-semibold text-white">Projects</h2>
            <ul className="mt-3 grid gap-3 text-sm leading-7 text-slate-400">
              {siteContent.projects.map((project) => (
                <li key={project.title}>
                  <span className="font-medium text-slate-200">{project.title}:</span> {project.outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
