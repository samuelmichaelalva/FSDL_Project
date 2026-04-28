import { Droplets, Zap, Recycle } from "lucide-react";
import type { Category } from "@/data/tips";

const cats: { id: Category; icon: typeof Droplets; title: string; desc: string; tint: string }[] = [
  { id: "water", icon: Droplets, title: "Water Saving", desc: "Smart habits to protect every drop.", tint: "from-sky-400/20 to-cyan-300/10" },
  { id: "energy", icon: Zap, title: "Energy Saving", desc: "Reduce your power footprint daily.", tint: "from-amber-400/20 to-yellow-300/10" },
  { id: "waste", icon: Recycle, title: "Waste Reduction", desc: "Reuse, recycle, and rethink waste.", tint: "from-emerald-400/20 to-lime-300/10" },
];

interface Props {
  active: Category | "all";
  onSelect: (c: Category | "all") => void;
}

export function Categories({ active, onSelect }: Props) {
  return (
    <section id="categories" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Categories</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Where will you start?</h2>
          <p className="mt-4 text-muted-foreground">
            Pick a focus area. Each category opens a curated set of tips you can act on today.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {cats.map((c, i) => {
            const Icon = c.icon;
            const isActive = active === c.id;
            return (
              <button
                key={c.id}
                onClick={() => onSelect(isActive ? "all" : c.id)}
                style={{ animationDelay: `${i * 0.08}s` }}
                className={`reveal text-left group relative overflow-hidden rounded-3xl p-8 bg-card border transition-all hover-lift ${
                  isActive ? "border-primary shadow-glow" : "border-border"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.tint} opacity-60`} />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{c.title}</h3>
                  <p className="mt-2 text-muted-foreground">{c.desc}</p>
                  <span className="mt-6 inline-flex text-sm font-medium text-primary">
                    {isActive ? "Showing tips ↓" : "View tips →"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
