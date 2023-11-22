import Hero from "@/components/home/hero/Hero";
import Featured from "@/components/home/featured/Featured";
import AboutSnippet from "@/components/home/skills/AboutSnippet";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <Featured />
      <AboutSnippet />
    </main>
  );
}
