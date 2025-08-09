import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1494314671902-399b18174975?q=80&w=500&auto=format&fit=crop",
    alt: "Modern coffee shop interior with warm ambient lighting",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=500&auto=format&fit=crop",
    alt: "Freshly roasted coffee beans with aromatic steam",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=500&auto=format&fit=crop",
    alt: "Expert barista operating professional espresso machine",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1461988091159-192b6df7054f?q=80&w=500&auto=format&fit=crop",
    alt: "Beautiful latte art creation in progress",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=500&auto=format&fit=crop",
    alt: "Artisanal pour-over coffee brewing with Chemex dripper",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1494314671902-399b18174975?q=80&w=500&auto=format&fit=crop",
    alt: "Comfortable seating area with warm ambiance",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-900/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Coffee <span className="gradient-text">Gallery</span>
          </h3>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto">
            Step inside our world of coffee craftsmanship and community. Every image tells a story of
            passion, precision, and the perfect cup.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer overflow-hidden rounded-xl"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
