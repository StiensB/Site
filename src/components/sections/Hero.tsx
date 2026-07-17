import Image from "next/image";
import { siteContent } from "@/content/site";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section id="top" className="grid items-center gap-8 rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur md:grid-cols-[1.25fr_320px] md:p-10 lg:p-12">
      <div className="space-y-6">
        <Badge tone="accent">{`${hero.title} · Cloud-Native Systems · React/Next.js`}</Badge>

        <div className="space-y-4">
          <h1 className="font-[family:var(--font-heading)] text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.name}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{hero.summary}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {hero.primaryCtas.map((cta, index) => (
            <Button key={cta.href} href={cta.href} variant={index === 0 ? "primary" : "secondary"}>
              {cta.label}
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {hero.secondaryCtas.map((cta) => (
            <Button key={cta.href} href={cta.href} variant="ghost">
              {cta.label}
            </Button>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {hero.highlights.map((item) => (
            <Card key={item.label} className="p-4">
              <p className="text-2xl font-semibold text-white">{item.value}</p>
              <p className="mt-1 text-sm text-slate-400">{item.label}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-xs">
        <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-sky-500/20 via-violet-500/20 to-amber-400/20 blur-2xl" />
        <Card className="relative overflow-hidden rounded-[28px] bg-slate-900/80 p-3">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            width={640}
            height={760}
            className="h-auto w-full rounded-[24px] object-cover"
            priority
          />
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-medium text-slate-200">{hero.location}</p>
          </div>
        </Card>
      </div>
    </section>
  );
}
