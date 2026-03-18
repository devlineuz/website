import Hero from "@/shared/components/hero/Hero";
import Clients from "../shared/components/clients/Clients";
import Partners from "../shared/components/partners/Partners";
import Services from "../shared/components/services/Services";
import Projects from "../shared/components/projects/Projects";
import About from "@/shared/components/about/About";
import ContactSection from "@/shared/components/contact/ContactSection";
import { ContactSection2 } from "./contact-us";

export default function Home() {
  return (
    <div className="w-full font-sans">
      <main className="flex w-full flex-col">
        <Hero />
        <About />
        <Clients />
        <Services />
        <Projects />
        <Partners />
        {/* <ContactSection /> */}
        <ContactSection2 />
      </main>
    </div>
  );
}
