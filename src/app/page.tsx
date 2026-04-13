import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import CollatzVisualizer from "@/components/CollatzVisualizer";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BentoGrid />
      <CollatzVisualizer />
      <Research />
      <Skills />
      <Timeline />
      <Vision />
      <Footer />
    </main>
  );
}
