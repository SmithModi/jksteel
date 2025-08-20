import { useEffect } from 'react';
import { useProductImagePreloader } from '@/hooks/use-aggressive-image-preloader';
import { products } from '@/data/products';

// Global component to aggressively preload all product images
export const ImagePreloader = () => {
  // Extract all product images
  const productImages = products.map(product => product.image);
  
  // Use our aggressive preloader
  const { loadedCount, allLoaded, totalImages } = useProductImagePreloader(productImages);

  useEffect(() => {
    if (allLoaded) {
      console.log(`⚡ Lightning preload complete: ${loadedCount}/${totalImages} images ready in <0.5s`);
    }
  }, [allLoaded, loadedCount, totalImages]);

  // This component doesn't render anything visible
  return null;
};

export default ImagePreloader;