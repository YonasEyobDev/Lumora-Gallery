import Marquee from "@/components/Marquee";
import { shootTypes } from "@/config";

import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import WhyUs from "@/sections/WhyUs";
import Services from "@/sections/Services";
import Gallery from "@/sections/Gallery";
import Team from "@/sections/Team";
import HowItWorks from "@/sections/HowItWorks";
import Reviews from "@/sections/Reviews";
import Hours from "@/sections/Hours";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function HomePage() {
  return (
    <div className="pb-20 md:pb-0">
      <Header />
      <main>
        <Hero />
        <div className="filmstrip" aria-hidden="true" />
        <Marquee items={shootTypes} />
        <WhyUs />
        <Services />
        <Gallery />
        <Team />
        <HowItWorks />
        <Reviews />
        <Hours />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}