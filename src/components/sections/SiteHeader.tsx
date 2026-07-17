import { siteContent } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 -mx-6 border-b border-white/8 bg-[#0B1020]/80 px-6 py-4 backdrop-blur md:-mx-10 md:px-10 lg:-mx-12 lg:px-12">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <a href="#top" className="font-[family:var(--font-heading)] text-lg font-semibold tracking-tight text-white">
          Bray Stiens
        </a>
        <nav className="hidden flex-wrap items-center gap-6 text-sm text-slate-300 md:flex">
          {siteContent.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
