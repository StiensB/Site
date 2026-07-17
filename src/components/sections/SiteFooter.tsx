import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-[family:var(--font-heading)] text-xl font-semibold text-white">Let&apos;s build something resilient.</p>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">{siteContent.footer.closing}</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
          <a href={`mailto:${siteContent.footer.email}`} className="transition hover:text-white">
            {siteContent.footer.email}
          </a>
          <a href={siteContent.footer.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
            LinkedIn
          </a>
          <a href={siteContent.footer.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
