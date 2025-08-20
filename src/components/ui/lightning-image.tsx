import React, { useState, useEffect, useRef } from 'react';
import { useInstantImage } from '@/hooks/use-aggressive-image-preloader';
import { cn } from '@/lib/utils';

interface LightningImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: 'high' | 'medium' | 'low';
  skeletonClassName?: string;
  fallbackSrc?: string;
  loadingAnimation?: 'pulse' | 'shimmer' | 'fade';
  onLoadComplete?: () => void;
  intersectionThreshold?: number;
  lazyLoad?: boolean;
}

export const LightningImage: React.FC<LightningImageProps> = ({
  src,
  alt,
  priority = 'high',
  className,
  skeletonClassName,
  fallbackSrc = '/placeholder.svg',
  loadingAnimation = 'shimmer',
  onLoadComplete,
  intersectionThreshold = 0.1,
  lazyLoad = false,
  ...props
}) => {
  const [isInView, setIsInView] = useState(!lazyLoad);
  const [showImage, setShowImage] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Use our aggressive preloader
  const { isLoaded, hasError, imageElement } = useInstantImage(
    isInView ? src : '',
    priority
  );

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazyLoad || isInView) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      { threshold: intersectionThreshold }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [lazyLoad, isInView, intersectionThreshold]);

  // Handle successful load
  useEffect(() => {
    if (isLoaded && !hasError) {
      // Immediate transition for instant feel
      setShowImage(true);
      onLoadComplete?.();
    }
  }, [isLoaded, hasError, onLoadComplete]);

  // Loading skeleton animations
  const getSkeletonAnimation = () => {
    switch (loadingAnimation) {
      case 'pulse':
        return 'animate-pulse';
      case 'shimmer':
        return 'animate-glass-shimmer';
      case 'fade':
        return 'animate-fade-in';
      default:
        return 'animate-pulse';
    }
  };

  // Critical: Show skeleton while loading
  if (!isInView || (!isLoaded && !hasError)) {
    return (
      <div
        ref={imgRef}
        className={cn(
          'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-lg',
          getSkeletonAnimation(),
          skeletonClassName || className
        )}
        style={{ aspectRatio: '4/3' }} // Maintain aspect ratio
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    );
  }

  // Error state with fallback
  if (hasError) {
    return (
      <img
        ref={imgRef}
        src={fallbackSrc}
        alt={alt}
        className={cn(className, 'opacity-50')}
        {...props}
      />
    );
  }

  // Success: Show the actual image with instant transition
  return (
    <img
      ref={imgRef}
      src={imageElement?.src || src}
      alt={alt}
      className={cn(
        className,
        showImage
          ? 'opacity-100 transition-opacity duration-150 ease-out'
          : 'opacity-0'
      )}
      style={{
        transition: 'opacity 0.15s ease-out',
      }}
      {...props}
    />
  );
};

export default LightningImage;