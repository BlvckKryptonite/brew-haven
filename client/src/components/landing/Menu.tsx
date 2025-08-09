import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    id: 1,
    name: "Artisan Latte",
    description: "Perfectly steamed milk meets our signature espresso blend, topped with intricate latte art.",
    price: "$4.95",
    image: "https://images.unsplash.com/photo-1461988091159-192b6df7054f?q=80&w=400&auto=format&fit=crop",
    alt: "Artisan Latte with beautiful leaf pattern latte art",
  },
  {
    id: 2,
    name: "Single Origin Pour-Over",
    description: "Hand-brewed to perfection using beans from our featured single-origin farms.",
    price: "$6.50",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=400&auto=format&fit=crop",
    alt: "Pour-over coffee preparation with Chemex dripper",
  },
  {
    id: 3,
    name: "Double Espresso",
    description: "Intense and complex shot showcasing the full character of our house blend.",
    price: "$3.25",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=400&auto=format&fit=crop",
    alt: "Double espresso shot being extracted from professional machine",
  },
  {
    id: 4,
    name: "Nitro Cold Brew",
    description: "Smooth and creamy cold brew infused with nitrogen for a velvety cascade effect.",
    price: "$4.75",
    image: "https://images.unsplash.com/photo-1461988091159-192b6df7054f?q=80&w=400&auto=format&fit=crop",
    alt: "Cold brew coffee served in tall glass with ice",
  },
  {
    id: 5,
    name: "Artisan Pastries",
    description: "Freshly baked croissants, muffins, and seasonal pastries made with locally sourced ingredients.",
    price: "$3.95",
    image: "https://images.unsplash.com/photo-1494314671902-399b18174975?q=80&w=400&auto=format&fit=crop",
    alt: "Artisanal pastries and croissants on wooden serving board",
  },
  {
    id: 6,
    name: "House Blend Beans",
    description: "Take home our signature roast. Freshly roasted beans available whole or ground to order.",
    price: "$14.95",
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=400&auto=format&fit=crop",
    alt: "Premium coffee beans in burlap sack with roasting equipment",
  },
];

export default function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-900/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Signature <span className="gradient-text">Menu</span>
          </h3>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto">
            Discover our carefully crafted selection of premium coffees, each with its own unique
            character and story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-stone-900/70 glass-effect rounded-xl overflow-hidden transition-all duration-300 group"
            >
              <div className="overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-2 text-stone-100">{item.name}</h4>
                <p className="text-stone-400 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-400">{item.price}</span>
                  <Button className="bg-amber-400 text-stone-950 px-4 py-2 rounded-lg font-semibold hover:bg-amber-300 transition-colors duration-200">
                    Order Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-400 hover:text-stone-950 transition-all duration-200"
          >
            View Full Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
