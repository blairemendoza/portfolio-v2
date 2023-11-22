import Hero from "@/components/home/hero/Hero";
import WorksSnippet from "@/components/home/featured/Featured";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <WorksSnippet />
    </main>
  );
}
