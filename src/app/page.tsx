import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header"
import Hero from "./components/Hero"
import LogoCarousel from "./components/LogoCarousel"
import ValueProposition from "./components/ValueProposition"
import Team from "./components/Team"
import Testimonial from "./components/Testimonial"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import Collaboration from "./components/Collaboration"

export default function Home() {

  return (
    <main>
      <Header />
      <Hero />
      <LogoCarousel />
      <ValueProposition />
      <Collaboration />
      <Team />
      <Testimonial />
      <FAQ />
      <Footer />
    </main>
  );
}
