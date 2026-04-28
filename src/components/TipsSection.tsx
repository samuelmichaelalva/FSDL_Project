import { useEffect, useMemo, useState } from "react";
import { Check, Droplets, Recycle, Zap } from "lucide-react";
import { tips, type Category } from "@/data/tips";

const STORAGE_KEY = "eco-tips-completed";

const iconMap = {
  water: Droplets,
  energy: Zap,
  waste: Recycle,
};

interface Props {
  filter: Category | "all";
}

export function TipsSection({ filter }: Props) {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
  }, [done, hydrated]);

  const visible = useMemo(
    () => (filter === "all" ? tips : tips.filter((t) => t.category === filter)),
    [filter],
  );

  const completedCount = Object.values(done).filter(Boolean).length;
  const total = tips.length;
  const pct = Math.round((completedCount / total) * 100);

  const toggle = (id: string) =>
    setDone((d) => ({ ...d, [id]: !d[id] }));

  return (
    <section id="tips" className="py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider">Daily Tips</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              {filter === "all" ? "Pick your next green action" : `${filter[0].toUpperCase()}${filter.slice(1)} tips`}
            </h2>
          </div>

          {/* Progress tracker */}
          <div className="w-full md:w-80 bg-card border border-border rounded-2xl p-5 shadow-soft">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Your progress</span>
              <span className="text-primary font-semibold">
                {completedCount} / {total}
              </span>
            </div>
            <div className="mt-3 h-2.5 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full gradient-primary transition-all duration-700 ease-out"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {pct === 100 ? "🌟 Eco hero! Every habit counts." : `${pct}% completed — keep going!`}
            </p>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((tip, i) => {
            const Icon = iconMap[tip.category];
            const isDone = !!done[tip.id];
            return (
              <article
                key={tip.id}
                style={{ animationDelay: `${i * 0.05}s` }}
                className={`reveal relative bg-card border rounded-3xl p-6 flex flex-col hover-lift transition-colors ${
                  isDone ? "border-primary/60" : "border-border"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {tip.category}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug">{tip.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{tip.description}</p>

                <button
                  onClick={() => toggle(tip.id)}
                  className={`mt-6 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-full font-medium text-sm transition-all ${
                    isDone
                      ? "bg-success text-success-foreground animate-pop"
                      : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {isDone ? (
                    <>
                      <Check className="w-4 h-4" />
                      Completed
                    </>
                  ) : (
                    "Mark as Done"
                  )}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
