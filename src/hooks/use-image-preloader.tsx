import { useEffect, useState } from "react";

interface UseImagePreloaderProps {
  src: string;
  preload?: boolean;
}

export const useImagePreloader = ({ src, preload = true }: UseImagePreloaderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!src || !preload) return;

    setIsLoaded(false);
    setHasError(false);

    const img = new Image();
    
    img.onload = () => {
      setIsLoaded(true);
      setHasError(false);
    };
    
    img.onerror = () => {
      setHasError(true);
      setIsLoaded(false);
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, preload]);

  return { isLoaded, hasError };
};

// Hook for preloading multiple images
export const useImageBatchPreloader = (imageSrcs: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const loadImage = (src: string) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => reject(src);
        img.src = src;
      });
    };

    const loadAllImages = async () => {
      const results = await Promise.allSettled(
        imageSrcs.map(src => loadImage(src))
      );

      const loaded = new Set<string>();
      const errors = new Set<string>();

      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          loaded.add(imageSrcs[index]);
        } else {
          errors.add(imageSrcs[index]);
        }
      });

      setLoadedImages(loaded);
      setErrorImages(errors);
    };

    if (imageSrcs.length > 0) {
      loadAllImages();
    }
  }, [imageSrcs.join(',')]);

  return { 
    loadedImages, 
    errorImages, 
    allLoaded: loadedImages.size === imageSrcs.length 
  };
};