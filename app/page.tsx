import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Workflow from "@/components/sections/Workflow";
import Portfolio from "@/components/sections/Portfolio";
export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <Hero />
      <Services />
      <Workflow />
      <Portfolio />

    </main>
  );
}