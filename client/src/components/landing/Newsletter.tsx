import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Simulate newsletter subscription
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });

    setEmail("");
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="bg-stone-900/70 glass-effect rounded-xl p-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Connected with <span className="gradient-text">Brew Haven</span>
          </h3>
          <p className="text-xl text-stone-400 mb-8 max-w-2xl mx-auto">
            Be the first to know about new coffee arrivals, special events, and exclusive member
            offers. Join our coffee community today!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-stone-800/50 border-stone-700 text-stone-100 placeholder-stone-400 focus:ring-amber-400/60"
              required
            />
            <Button
              type="submit"
              className="bg-amber-400 text-stone-950 px-8 py-3 rounded-lg font-semibold hover:bg-amber-300 transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>

          <p className="text-sm text-stone-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
