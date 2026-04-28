import { Globe, ShoppingBag } from "lucide-react";

const goals = [
  {
    n: 12,
    icon: ShoppingBag,
    title: "Responsible Consumption",
    desc: "Choose mindfully, waste less, and support products built to last. Every conscious purchase shapes a more sustainable economy.",
    color: "from-amber-500/20 to-orange-400/10",
  },
  {
    n: 13,
    icon: Globe,
    title: "Climate Action",
    desc: "Cut emissions through small daily choices — energy, transport, and food. Together, individual habits become global impact.",
    color: "from-emerald-500/20 to-teal-400/10",
  },
];

export function SDGSection() {
  return (
    <section id="sdg" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">UN Goals</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Aligned with the SDGs</h2>
          <p className="mt-4 text-muted-foreground">
            Eco Tips supports the United Nations Sustainable Development Goals — global targets for a fairer, greener future.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {goals.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.n}
                className={`reveal relative overflow-hidden rounded-3xl p-8 bg-card border border-border hover-lift`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${g.color}`} />
                <div className="relative flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex flex-col items-center justify-center text-primary-foreground shadow-soft">
                    <span className="text-[10px] uppercase tracking-wider opacity-80">SDG</span>
                    <span className="text-xl font-bold leading-none">{g.n}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold">{g.title}</h3>
                    </div>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
