import { useEffect, useState, useCallback } from "react";

interface ImagePreloadCache {
  [key: string]: {
    loaded: boolean;
    element: HTMLImageElement | null;
    timestamp: number;
  };
}

// Global cache for instant access
const globalImageCache: ImagePreloadCache = {};

// Service Worker-like aggressive preloader
class AggressiveImagePreloader {
  private static instance: AggressiveImagePreloader;
  private cache: ImagePreloadCache = {};
  private loadingQueue: Set<string> = new Set();
  private maxConcurrentLoads = 6; // Browser limit
  private currentLoads = 0;

  static getInstance(): AggressiveImagePreloader {
    if (!AggressiveImagePreloader.instance) {
      AggressiveImagePreloader.instance = new AggressiveImagePreloader();
    }
    return AggressiveImagePreloader.instance;
  }

  async preloadImage(src: string, priority: 'high' | 'medium' | 'low' = 'medium'): Promise<HTMLImageElement> {
    // Return immediately if cached
    if (this.cache[src]?.loaded && this.cache[src].element) {
      return this.cache[src].element!;
    }

    // If already loading, wait for it
    if (this.loadingQueue.has(src)) {
      return this.waitForLoad(src);
    }

    return this.loadImage(src, priority);
  }

  private async loadImage(src: string, priority: 'high' | 'medium' | 'low'): Promise<HTMLImageElement> {
    this.loadingQueue.add(src);
    
    // Wait if we're at max concurrent loads and this isn't high priority
    if (this.currentLoads >= this.maxConcurrentLoads && priority !== 'high') {
      await this.waitForSlot();
    }

    this.currentLoads++;

    return new Promise((resolve, reject) => {
      const img = new Image();
      
      // Configure for maximum speed
      img.decoding = 'async';
      img.loading = 'eager';
      
      // Use highest quality hints
      img.fetchPriority = priority === 'high' ? 'high' : priority === 'medium' ? 'auto' : 'low';

      img.onload = () => {
        this.cache[src] = {
          loaded: true,
          element: img,
          timestamp: Date.now()
        };
        globalImageCache[src] = this.cache[src];
        this.loadingQueue.delete(src);
        this.currentLoads--;
        resolve(img);
      };

      img.onerror = () => {
        this.cache[src] = {
          loaded: false,
          element: null,
          timestamp: Date.now()
        };
        this.loadingQueue.delete(src);
        this.currentLoads--;
        reject(new Error(`Failed to load image: ${src}`));
      };

      img.src = src;
    });
  }

  private async waitForLoad(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const checkInterval = setInterval(() => {
        if (this.cache[src]?.loaded && this.cache[src].element) {
          clearInterval(checkInterval);
          resolve(this.cache[src].element!);
        } else if (this.cache[src]?.loaded === false) {
          clearInterval(checkInterval);
          reject(new Error(`Image failed to load: ${src}`));
        }
      }, 10);
    });
  }

  private async waitForSlot(): Promise<void> {
    return new Promise(resolve => {
      const checkInterval = setInterval(() => {
        if (this.currentLoads < this.maxConcurrentLoads) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 50);
    });
  }

  // Batch preload with smart prioritization
  async preloadBatch(
    sources: string[], 
    priority: 'high' | 'medium' | 'low' = 'medium'
  ): Promise<HTMLImageElement[]> {
    const loadPromises = sources.map(src => this.preloadImage(src, priority));
    
    // Use Promise.allSettled to handle partial failures gracefully
    const results = await Promise.allSettled(loadPromises);
    
    return results
      .filter((result): result is PromiseFulfilledResult<HTMLImageElement> => result.status === 'fulfilled')
      .map(result => result.value);
  }

  isLoaded(src: string): boolean {
    return this.cache[src]?.loaded === true;
  }

  // Clean old cache entries (older than 10 minutes)
  cleanup(): void {
    const now = Date.now();
    const maxAge = 10 * 60 * 1000; // 10 minutes

    Object.keys(this.cache).forEach(src => {
      if (now - this.cache[src].timestamp > maxAge) {
        delete this.cache[src];
        delete globalImageCache[src];
      }
    });
  }
}

// Hook for immediate image availability
export const useInstantImage = (src: string, priority: 'high' | 'medium' | 'low' = 'medium') => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>(null);
  const preloader = AggressiveImagePreloader.getInstance();

  useEffect(() => {
    if (!src) return;

    // Check if already cached globally
    if (globalImageCache[src]?.loaded) {
      setIsLoaded(true);
      setImageElement(globalImageCache[src].element);
      setHasError(false);
      return;
    }

    setIsLoaded(false);
    setHasError(false);
    setImageElement(null);

    // Aggressive preload
    preloader.preloadImage(src, priority)
      .then(img => {
        setImageElement(img);
        setIsLoaded(true);
        setHasError(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoaded(false);
        setImageElement(null);
      });
  }, [src, priority]);

  return { isLoaded, hasError, imageElement };
};

// Hook for batch preloading all product images
export const useProductImagePreloader = (imageSources: string[]) => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const preloader = AggressiveImagePreloader.getInstance();

  const preloadAll = useCallback(async () => {
    if (imageSources.length === 0) return;

    try {
      // Start aggressive batch loading
      const loadedImages = await preloader.preloadBatch(imageSources, 'high');
      setLoadedCount(loadedImages.length);
      setAllLoaded(loadedImages.length === imageSources.length);
    } catch (error) {
      console.warn('Some images failed to preload:', error);
    }
  }, [imageSources, preloader]);

  useEffect(() => {
    preloadAll();
    
    // Cleanup cache periodically
    const cleanupInterval = setInterval(() => {
      preloader.cleanup();
    }, 5 * 60 * 1000); // Every 5 minutes

    return () => clearInterval(cleanupInterval);
  }, [preloadAll]);

  return { loadedCount, allLoaded, totalImages: imageSources.length };
};

// Export singleton instance for manual control
export const imagePreloader = AggressiveImagePreloader.getInstance();