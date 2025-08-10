import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500); // Small delay before hiding
          return 100;
        }
        return prev + 2;
      });
    }, 30); // Smooth progress animation

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-stone-950 flex flex-col items-center justify-center"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <img
          src={`${import.meta.env.BASE_URL}assets/logo_1754830575592.png`}
          alt="Brew Haven Logo"
          className="w-48 h-48 md:w-64 md:h-64 object-contain"
        />
      </motion.div>

      {/* Loading Text */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-2xl md:text-3xl font-bold text-amber-400 mb-8 text-center"
      >
        Brewing Your Experience...
      </motion.h2>

      {/* Progress Bar */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-64 md:w-80 h-2 bg-stone-800 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Progress Percentage */}
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="text-stone-400 mt-4 text-lg font-medium"
      >
        {progress}%
      </motion.p>

      {/* Coffee Bean Animation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-16 w-8 h-8 bg-amber-400 rounded-full opacity-20"
        style={{
          clipPath: "ellipse(40% 60% at 50% 50%)",
        }}
      />
    </motion.div>
  );
}