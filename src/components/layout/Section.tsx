import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 space-y-6">
      <div className="max-w-3xl space-y-3">
        {eyebrow ? (
          <p className="text-sm font-medium tracking-[0.24em] text-sky-300 uppercase">{eyebrow}</p>
        ) : null}
        <h2 className="font-[family:var(--font-heading)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {description ? <p className="text-base leading-7 text-slate-400 sm:text-lg">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
