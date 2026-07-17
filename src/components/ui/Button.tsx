import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variantClasses = {
  primary: "bg-sky-400 text-slate-950 hover:bg-sky-300",
  secondary: "border border-white/12 bg-white/6 text-white hover:border-sky-300/40 hover:bg-white/10",
  ghost: "border border-white/10 bg-transparent text-slate-300 hover:border-white/20 hover:bg-white/5 hover:text-white",
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const className = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${variantClasses[variant]}`;
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        className={className}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
