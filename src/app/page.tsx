import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductShowcase from "@/components/ProductShowcase";
import Featured from "@/components/Featured";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import About from "@/components/About";
import AgeNotice from "@/components/AgeNotice";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Categories />
        <ProductShowcase />
        <Featured />
        <Location />
        <Contact />
        <About />
        <AgeNotice />
      </main>
      <Footer />
    </>
  );
}
