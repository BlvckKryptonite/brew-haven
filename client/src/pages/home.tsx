import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Menu from "@/components/landing/Menu";
import Story from "@/components/landing/Story";
import Gallery from "@/components/landing/Gallery";
import Testimonials from "@/components/landing/Testimonials";
import Contact from "@/components/landing/Contact";
import Newsletter from "@/components/landing/Newsletter";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="bg-stone-950 text-stone-100 selection:bg-amber-400 selection:text-stone-950">
      <Navigation />
      <Hero />
      <Features />
      <Menu />
      <Story />
      <Gallery />
      <Testimonials />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}
