// Simple in-memory image cache
const imageCache = new Map<string, HTMLImageElement>();

export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  // Check if image is already cached
  if (imageCache.has(src)) {
    return Promise.resolve(imageCache.get(src)!);
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      imageCache.set(src, img);
      resolve(img);
    };
    
    img.onerror = reject;
    
    // Set crossOrigin for external images if needed
    img.crossOrigin = 'anonymous';
    img.src = src;
  });
};

export const preloadImages = async (srcs: string[]): Promise<HTMLImageElement[]> => {
  const promises = srcs.map(src => preloadImage(src));
  return Promise.all(promises);
};

export const isImageCached = (src: string): boolean => {
  return imageCache.has(src);
};

export const clearImageCache = (): void => {
  imageCache.clear();
};