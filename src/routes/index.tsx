import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { TipsSection } from "@/components/TipsSection";
import { SDGSection } from "@/components/SDGSection";
import { Footer } from "@/components/Footer";
import { useReveal } from "@/hooks/use-reveal";
import type { Category } from "@/data/tips";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [filter, setFilter] = useState<Category | "all">("all");
  useReveal();

  return (
    <main>
      <Navbar />
      <Hero />
      <Categories active={filter} onSelect={setFilter} />
      <TipsSection filter={filter} />
      <SDGSection />
      <Footer />
    </main>
  );
}
