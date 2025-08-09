import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LazyImage } from "@/components/ui/LazyImage";

const menuItems = [
  {
    id: 1,
    name: "Artisan Latte",
    description: "Perfectly steamed milk meets our signature espresso blend, topped with intricate latte art.",
    price: "$4.95",
    image: "/assets/artisan-latte_1754775310994.jpg",
    alt: "Artisan Latte with beautiful leaf pattern latte art",
  },
  {
    id: 2,
    name: "Single Origin Pour-Over",
    description: "Hand-brewed to perfection using beans from our featured single-origin farms.",
    price: "$6.50",
    image: "/assets/single-pour-over_1754776207854.jpg",
    alt: "Pour-over coffee preparation with Chemex dripper",
  },
  {
    id: 3,
    name: "Vanilla Oat Cortado",
    description: "Silky espresso with steamed oat milk and a hint of vanilla, perfectly balanced in a gibraltar glass.",
    price: "$4.25",
    image: "/assets/vanilla-oat-corcado_1754775311006.jpg",
    alt: "Vanilla oat cortado in gibraltar glass with latte art",
  },
  {
    id: 4,
    name: "Strawberry Crepes",
    description: "Delicate crepes filled with fresh strawberries and cream, drizzled with berry compote.",
    price: "$8.75",
    image: "/assets/strawberry-crepes_1754775311005.jpg",
    alt: "Strawberry crepes with berry drizzle and mint garnish",
  },
  {
    id: 5,
    name: "Double Espresso",
    description: "Intense and complex shot showcasing the full character of our house blend.",
    price: "$3.25",
    image: "/assets/double-espresso_1754775311003.jpg",
    alt: "Double espresso shot being extracted from professional machine",
  },
  {
    id: 6,
    name: "Wembley Waffles",
    description: "Golden Belgian waffles topped with fresh fruit, maple syrup, and a drizzle of honey.",
    price: "$9.25",
    image: "/assets/wembley-waffles_1754775311006.jpg",
    alt: "Belgian waffles with blueberries and syrup drizzle",
  },
  {
    id: 7,
    name: "House Blend Beans",
    description: "Take home our signature roast. Freshly roasted beans available whole or ground to order.",
    price: "$14.95",
    image: "/assets/house-blend-beans_1754775311004.jpg",
    alt: "Premium coffee beans in burlap sack with roasting equipment",
  },
  {
    id: 8,
    name: "Lavender Honey Latte",
    description: "Aromatic lavender meets local wildflower honey in our signature espresso blend with steamed milk.",
    price: "$5.25",
    image: "/assets/lavender-honey-latte_1754776202134.jpg",
    alt: "Lavender honey latte with dried lavender garnish",
  },
  {
    id: 9,
    name: "Chocolate Pancake Stack",
    description: "Decadent chocolate pancakes with chocolate sauce, fresh berries, and powdered sugar.",
    price: "$9.95",
    image: "/assets/chocolate-pan.stash_1754775311003.jpg",
    alt: "Chocolate pancake stack with berries and chocolate drizzle",
  },
  {
    id: 10,
    name: "Artisan Pastries",
    description: "Freshly baked croissants, muffins, and seasonal pastries made with locally sourced ingredients.",
    price: "$3.95",
    image: "/assets/artisan-pastries_1754775311002.jpg",
    alt: "Artisanal pastries and croissants on wooden serving board",
  },
  {
    id: 11,
    name: "Nitro Cold Brew",
    description: "Smooth and creamy cold brew infused with nitrogen for a velvety cascade effect.",
    price: "$4.75",
    image: "/assets/nitro-cold-brew_1754775311004.jpg",
    alt: "Cold brew coffee served in tall glass with ice",
  },
  {
    id: 12,
    name: "The Haven Club Sandwich",
    description: "Our signature sandwich with premium ingredients, served with arugula and house-made aioli.",
    price: "$12.95",
    image: "/assets/the-haven-club sandwich_1754775311005.jpg",
    alt: "Gourmet club sandwich on wooden cutting board",
  },
  {
    id: 13,
    name: "Blueberry Pancakes",
    description: "Fluffy pancakes topped with fresh blueberries, whipped cream, and maple syrup drizzle.",
    price: "$8.95",
    image: "/assets/blueberry-pancake_1754775311002.jpg",
    alt: "Stack of blueberry pancakes with whipped cream and berries",
  },
  {
    id: 14,
    name: "Seasonal Affogato",
    description: "Rich vanilla gelato drowned in our double espresso shot. Seasonal variations include caramel or berry compote.",
    price: "$6.75",
    image: "/assets/Seasonal-Affogato_1754775311005.webp",
    alt: "Affogato with vanilla gelato and espresso in glass bowl",
  },
  {
    id: 15,
    name: "Crusty Crumble",
    description: "Warm seasonal fruit crumble with a crispy oat topping, served with vanilla ice cream.",
    price: "$7.25",
    image: "/assets/crusty-crumble_1754775311003.jpg",
    alt: "Fruit crumble slice with fork and coffee in background",
  },
];

export default function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [showAllItems, setShowAllItems] = useState(false);
  const [loadedItems, setLoadedItems] = useState(6);

  const displayedItems = showAllItems ? menuItems : menuItems.slice(0, loadedItems);

  // Progressive loading for mobile performance
  const loadMoreItems = useCallback(() => {
    if (loadedItems < menuItems.length) {
      setLoadedItems(prev => Math.min(prev + 3, menuItems.length));
    }
  }, [loadedItems]);

  // Auto-load more items when user scrolls near bottom on mobile
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768 && !showAllItems) {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        
        if (scrollTop + clientHeight >= scrollHeight - 1000) {
          loadMoreItems();
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreItems, showAllItems]);

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-900/30 mobile-scroll-container" ref={ref}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 sm:gap-6">
          {displayedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-stone-900/70 glass-effect rounded-xl overflow-hidden transition-all duration-300 group menu-item-mobile"
            >
              <div className="overflow-hidden">
                <LazyImage
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-64 object-cover object-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
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

        {!showAllItems && loadedItems < menuItems.length && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => {
                setShowAllItems(true);
                setLoadedItems(menuItems.length);
              }}
              className="bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 px-8 py-3 rounded-lg font-semibold text-lg hover:from-amber-300 hover:to-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Full Menu
            </Button>
          </motion.div>
        )}

        {showAllItems && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => {
                setShowAllItems(false);
                setLoadedItems(6);
                // Smooth scroll to menu section
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              className="border-amber-400 text-amber-400 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-amber-400 hover:text-stone-950 transition-all duration-300"
            >
              Show Less
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
