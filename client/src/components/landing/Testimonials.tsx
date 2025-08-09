import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile slideshow navigation
  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Touch gesture handling for mobile slideshow
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

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

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Mobile Slideshow Layout */}
        <div className="md:hidden relative">
          <div 
            className="overflow-hidden rounded-xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-stone-900/70 glass-effect rounded-xl p-8 mx-2"
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
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-amber-400' : 'bg-stone-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Counter */}
          <div className="text-center mt-4">
            <span className="text-stone-400 text-sm">
              {currentSlide + 1} of {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
