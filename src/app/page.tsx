import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import CollatzVisualizer from "@/components/CollatzVisualizer";
import BentoGrid from "@/components/BentoGrid";
import Collaborations from "@/components/Collaborations";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <div className="py-12">
        <CollatzVisualizer />
      </div>
      <BentoGrid />
      <Collaborations />
      <Education />
      <Skills />
      <Footer />
    </main>
  );
}

