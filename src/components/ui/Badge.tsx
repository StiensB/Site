import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "default" | "accent" | "warm";
};

const toneClasses = {
  default: "border-white/10 bg-white/5 text-slate-300",
  accent: "border-sky-400/20 bg-sky-400/10 text-sky-300",
  warm: "border-amber-400/20 bg-amber-400/10 text-amber-300",
};

export function Badge({ children, tone = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium tracking-[0.18em] uppercase ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
