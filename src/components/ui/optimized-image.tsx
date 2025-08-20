import { useState, useRef, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage = ({
  src,
  alt,
  className = "",
  skeletonClassName = "",
  priority = false,
  onLoad,
  onError
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px', // Start loading when image is 100px away from viewport
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Preload image when in view
  useEffect(() => {
    if (!isInView || !src) return;

    // Check if image is already cached
    const img = new Image();
    
    const handleLoad = () => {
      setIsLoaded(true);
      setHasError(false);
      onLoad?.();
    };

    const handleError = () => {
      setHasError(true);
      setIsLoaded(false);
      onError?.();
    };

    img.onload = handleLoad;
    img.onerror = handleError;
    
    // If image is already cached, it will load immediately
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [isInView, src, onLoad, onError]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <Skeleton className={`absolute inset-0 ${skeletonClassName}`} />
      )}

      {/* Error state */}
      {hasError && (
        <div className={`flex items-center justify-center bg-muted ${className}`}>
          <div className="text-center text-muted-foreground">
            <div className="text-2xl mb-2">📦</div>
            <div className="text-sm">Image unavailable</div>
          </div>
        </div>
      )}

      {/* Actual image */}
      {isInView && !hasError && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onLoad={() => {
            setIsLoaded(true);
            setHasError(false);
            onLoad?.();
          }}
          onError={() => {
            setHasError(true);
            setIsLoaded(false);
            onError?.();
          }}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      )}
    </div>
  );
};