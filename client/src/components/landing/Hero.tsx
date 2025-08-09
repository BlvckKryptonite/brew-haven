import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/hero-image_1754775311004.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-stone-950/60" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Where Every <span className="gradient-text">Brew</span>
            <br />
            Tells a Story
          </h2>
          <p className="text-xl md:text-2xl text-stone-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of artisanal coffee craftsmanship and modern comfort in our
            carefully curated coffee sanctuary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("menu")}
              className="bg-amber-400 text-stone-950 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-300 transition-all duration-200 transform hover:scale-105"
            >
              Explore Our Menu
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-400 hover:text-stone-950 transition-all duration-200"
            >
              Reserve a Table
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => scrollToSection("features")}
        >
          <ChevronDown className="text-amber-400 h-8 w-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
