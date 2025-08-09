import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const galleryImages = [
  {
    id: 1,
    src: "/assets/artisan-latte_1754775310994.jpg",
    alt: "Artisan latte with beautiful leaf pattern latte art",
  },
  {
    id: 2,
    src: "/assets/double-espresso_1754775311003.jpg",
    alt: "Double espresso shot being extracted from professional machine",
  },
  {
    id: 3,
    src: "/assets/lavender-honey-latte_1754776202134.jpg",
    alt: "Lavender honey latte with dried lavender garnish",
  },
  {
    id: 4,
    src: "/assets/vanilla-oat-corcado_1754775311006.jpg",
    alt: "Vanilla oat cortado in gibraltar glass with latte art",
  },
  {
    id: 5,
    src: "/assets/single-pour-over_1754776207854.jpg",
    alt: "Pour-over coffee preparation with Chemex dripper",
  },
  {
    id: 6,
    src: "/assets/nitro-cold-brew_1754775311004.jpg",
    alt: "Cold brew coffee served in tall glass with ice",
  },
  {
    id: 7,
    src: "/assets/artisan-pastries_1754775311002.jpg",
    alt: "Artisanal pastries and croissants on wooden serving board",
  },
  {
    id: 8,
    src: "/assets/strawberry-crepes_1754775311005.jpg",
    alt: "Strawberry crepes with berry drizzle and mint garnish",
  },
  {
    id: 9,
    src: "/assets/wembley-waffles_1754775311006.jpg",
    alt: "Belgian waffles with blueberries and syrup drizzle",
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
