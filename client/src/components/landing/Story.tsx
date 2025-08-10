import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Story() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="story" className="py-16 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Story</span>
            </h3>
            <div className="space-y-6 text-stone-400">
              <p className="text-xl leading-relaxed">
                Founded in 2015 by coffee enthusiasts Maria and David Hutchinson, Brew Haven began as a small
                neighborhood café with a simple mission: to serve exceptional coffee while building
                meaningful connections within our community.
              </p>
              <p className="text-lg leading-relaxed">
                What started as a 12-seat café has grown into a beloved gathering place, but our core
                values remain unchanged. We still source our beans directly from farmers, roast in small
                batches, and treat every customer like family.
              </p>
              <p className="text-lg leading-relaxed">
                Today, Brew Haven is proud to be a certified B-Corporation, committed to using business
                as a force for good in our community and beyond.
              </p>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={`${import.meta.env.BASE_URL}attached_assets/our-story_1754865700629.jpg`}
              alt="Maria and David Hutchinson, founders of Brew Haven, in their aprons outside the cafe"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
