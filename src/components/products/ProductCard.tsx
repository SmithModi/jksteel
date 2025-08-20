import { useState } from "react";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import LightningImage from "@/components/ui/lightning-image";
interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  isNew?: boolean;
  onViewDetails: (id: string) => void;
}
const ProductCard = ({
  id,
  title,
  price,
  originalPrice,
  image,
  category,
  isNew = false,
  onViewDetails
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return <div className="group liquid-glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 cursor-pointer transition-all duration-150 ease-out hover:border-white/30" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => onViewDetails(id)}>
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl mb-4 sm:mb-6 p-4 sm:p-8">
        {isNew && <div className="absolute top-2 left-2 z-10">
            <span className="bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-full">
              New
            </span>
          </div>}
        
        

        {/* Product Image with Lightning Fast Loading */}
        <LightningImage
          src={image}
          alt={title}
          className="w-full h-36 sm:h-48 object-contain transition-all duration-300 ease-out group-hover:scale-105"
          skeletonClassName="w-full h-36 sm:h-48 rounded-lg"
          priority="high"
          loadingAnimation="shimmer"
          lazyLoad={false}
        />

        {/* Hover Actions */}
        <div className={`absolute inset-0 bg-black/30 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-150 ease-out ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <Button size="sm" className="liquid-glass-button text-white border-white/20 hover:border-white/40" onClick={e => {
          e.stopPropagation();
          onViewDetails(id);
        }}>
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <div className="text-xs font-medium text-white/70 uppercase tracking-wide">
          {category}
        </div>
        
        <h3 className="font-playfair font-semibold text-lg sm:text-xl leading-tight text-foreground line-clamp-2 no-text-glow">
          {title}
        </h3>

        {/* Price */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <span className="text-lg sm:text-xl font-bold text-gradient-secondary no-text-glow">{price}</span>
          {originalPrice && <span className="text-sm text-white/50 line-through">
              {originalPrice}
            </span>}
        </div>
      </div>
    </div>;
};
export default ProductCard;