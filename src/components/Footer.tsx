import { Leaf, Github, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-center gap-2 font-display font-semibold text-lg">
            <span className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </span>
            Eco Tips
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            A simple guide to sustainable living — built with care for people and planet.
          </p>
        </div>

        <div className="md:text-center">
          <p className="font-display text-xl italic text-foreground/80">
            “Small steps today,<br />a greener tomorrow.”
          </p>
        </div>

        <div className="md:text-right">
          <p className="text-sm font-medium mb-3">Follow the journey</p>
          <div className="flex md:justify-end gap-3">
            {[Twitter, Instagram, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Eco Tips · Made with 🌱 for a sustainable future
      </div>
    </footer>
  );
}
