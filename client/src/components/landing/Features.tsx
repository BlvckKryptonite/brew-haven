import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sprout, Flame, Users, Award, Leaf, Clock } from "lucide-react";

const features = [
  {
    icon: Sprout,
    title: "Ethically Sourced",
    description:
      "We partner directly with coffee farmers to ensure fair trade practices and the highest quality beans from around the world.",
  },
  {
    icon: Flame,
    title: "Fresh Roasted Daily",
    description:
      "Our expert roasters craft small batches daily to ensure every cup delivers the perfect balance of flavor and aroma.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description:
      "We're committed to creating a welcoming space where connections are made and memories are shared over great coffee.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description:
      "Recognized by the Specialty Coffee Association for our outstanding commitment to coffee excellence and innovation.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "From biodegradable cups to solar-powered roasting, we're committed to protecting the environment we all share.",
  },
  {
    icon: Clock,
    title: "Extended Hours",
    description:
      "Open early for morning commuters and late for night owls, we're here when you need that perfect cup of coffee.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">Brew Haven</span>
          </h3>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto">
            We're more than just a coffee shop. We're a community of coffee enthusiasts dedicated to
            delivering exceptional experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-stone-900/70 glass-effect rounded-xl p-8 hover:bg-stone-900/90 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="text-amber-400 mb-6"
                >
                  <Icon className="h-12 w-12" />
                </motion.div>
                <h4 className="text-2xl font-bold mb-4 text-stone-100">{feature.title}</h4>
                <p className="text-stone-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
