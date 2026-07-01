import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import Brands from "@/components/Brands";
import WhyChooseUs from "@/components/WhyChooseUs";
import Location from "@/components/Location";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <WhatWeDo />
        <Brands />
        <WhyChooseUs />
        <Location />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
