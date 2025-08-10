import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const galleryImages = [
  {
    id: 1,
    src: "/assets/brew-haven-gallery_1754832751394.avif",
    alt: "Brew Haven coffee shop interior with warm lighting and comfortable seating",
  },
  {
    id: 2,
    src: "/assets/gallery-1_1754832751403.avif",
    alt: "Coffee preparation and artisanal brewing equipment",
  },
  {
    id: 3,
    src: "/assets/gallery-2_1754832751404.avif",
    alt: "Fresh pastries and baked goods display",
  },
  {
    id: 4,
    src: "/assets/gallery-3_1754832751404.avif",
    alt: "Specialty coffee drinks and latte art creations",
  },
  {
    id: 5,
    src: "/assets/gallery-4_1754832751404.avif",
    alt: "Coffee beans and roasting process showcase",
  },
  {
    id: 6,
    src: "/assets/gallery-5_1754832751405.avif",
    alt: "Cozy coffee shop atmosphere with customers enjoying drinks",
  },
  {
    id: 7,
    src: "/assets/gallery-6_1754832751405.avif",
    alt: "Professional barista crafting the perfect cup of coffee",
  },
  {
    id: 8,
    src: "/assets/gallery-7_1754832751405.jpg",
    alt: "Overhead view of coffee table with multiple drinks, pastries, and open book creating a social coffee experience",
  },
  
  {
    id: 10,
    src: "/assets/gallery-9_1754832751406.jpg",
    alt: "Golden croissant breakfast with coffee, butter, and fresh berries on elegant blue plate",
  },
  {
    id: 11,
    src: "/assets/gallery-10_1754832751407.jpg",
    alt: "Customer enjoying coffee in warm ambient lighting with glasses creating intimate coffee shop moment",
  },
  {
    id: 12,
    src: "/assets/gallery-12_1754832751407.avif",
    alt: "Coffee shop community and social gathering atmosphere",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-900/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            The Haven <span className="gradient-text">Gallery</span>
          </h3>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto">
            Step inside our world of coffee craftsmanship and community. Every image tells a story of
            passion, precision, and the perfect cup.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer overflow-hidden rounded-xl aspect-[3/4]"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
