import heroImg from "@/assets/hero-leaves.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Lush green ferns"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-background/30 dark:bg-background/60" />

      <div className="relative max-w-4xl mx-auto px-6 text-center py-32">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/80 backdrop-blur border border-border text-xs font-medium text-primary shadow-soft animate-fade-in">
          <Sparkles className="w-3.5 h-3.5" />
          Simple Guide for Sustainable Living
        </span>
        <h1 className="mt-6 text-6xl md:text-8xl font-bold animate-fade-in-up">
          <span className="text-gradient">Eco Tips</span>
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          Tiny daily habits that protect water, save energy, and reduce waste.
          Track your green journey, one tip at a time.
        </p>
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#tips"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-105 transition-transform"
          >
            Start Living Green
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#categories"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border bg-card/70 backdrop-blur font-medium hover:bg-card transition-colors"
          >
            Explore categories
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-muted-foreground text-xs tracking-widest uppercase">
        scroll
      </div>
    </section>
  );
}
