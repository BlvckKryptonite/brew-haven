import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Regular Customer",
    content:
      "The best coffee in the city, hands down. The baristas here are true artists, and you can taste the passion in every cup. The atmosphere is perfect for both work and relaxation.",
    initial: "S",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Coffee Enthusiast",
    content:
      "I've been coming here for three years and the quality never disappoints. The single-origin pour-overs are exceptional, and the staff always remembers my order. It feels like home.",
    initial: "M",
  },
  {
    id: 3,
    name: "Amy Foster",
    role: "Freelance Designer",
    content:
      "As a remote worker, I appreciate the fast WiFi, comfortable seating, and the fact that they don't rush you. Plus, their nitro cold brew is absolutely incredible!",
    initial: "A",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Local Business Owner",
    content:
      "Brew Haven has become my go-to spot for client meetings. The atmosphere is professional yet relaxed, and their lavender honey latte is unlike anything I've tried elsewhere. Outstanding service!",
    initial: "D",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Community</span> Says
          </h3>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their
            Brew Haven experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-stone-900/70 glass-effect rounded-xl p-8 hover:bg-stone-900/90 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400 text-xl space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-stone-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-stone-950 font-bold text-lg mr-4">
                  {testimonial.initial}
                </div>
                <div>
                  <h5 className="font-semibold text-stone-100">{testimonial.name}</h5>
                  <p className="text-stone-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
