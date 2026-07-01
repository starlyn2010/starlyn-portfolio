import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Projects />
      <Skills />
      <Timeline />
      <Footer />
    </main>
  );
}

