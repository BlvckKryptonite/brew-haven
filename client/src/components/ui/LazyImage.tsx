import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLazyLoading } from '@/hooks/useLazyLoading';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  whileHover?: any;
  transition?: any;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  whileHover,
  transition,
}) => {
  const { ref, isVisible } = useLazyLoading();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Skeleton loading state */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-stone-800 via-stone-700 to-stone-800 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-stone-600/20 to-transparent animate-[shimmer_1.5s_ease-in-out_infinite]" />
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-stone-800 flex items-center justify-center">
          <div className="text-stone-500 text-sm">Failed to load image</div>
        </div>
      )}

      {/* Actual image */}
      {isVisible && (
        <motion.img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          whileHover={whileHover}
          transition={transition}
          loading="lazy"
        />
      )}
    </div>
  );
};