import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-[24px] border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(2,6,23,0.32)] backdrop-blur ${className}`.trim()}
    >
      {children}
    </div>
  );
}
