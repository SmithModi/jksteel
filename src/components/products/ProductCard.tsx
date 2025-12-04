import { useState } from "react";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import LightningImage from "@/components/ui/lightning-image";
import { WhatsAppEnquiry } from "@/components/ui/whatsapp-enquiry";

interface ProductCardProps {
    id: string;
    title: string;
    image: string;
    category: string;
    isNew?: boolean;
    onViewDetails: (id: string) => void;
}

const ProductCard = ({
    id,
    title,
    image,
    category,
    isNew = false,
    onViewDetails
}: ProductCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 cursor-pointer transition-all duration-150 ease-out border border-purple-100 hover:border-purple-300 hover:shadow-xl flex flex-col h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onViewDetails(id)}
        >
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-6 p-3 sm:p-8">
                {isNew && (
                    <div className="absolute top-2 left-2 z-10">
                        <span className="bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-full">
                            New
                        </span>
                    </div>
                )}

                {/* Product Image with Lightning Fast Loading */}
                <LightningImage
                    src={image}
                    alt={title}
                    className="w-full h-40 xs:h-44 sm:h-64 object-contain transition-all duration-300 ease-out group-hover:scale-105"
                    skeletonClassName="w-full h-40 xs:h-44 sm:h-64 rounded-lg"
                    priority="high"
                    loadingAnimation="shimmer"
                    lazyLoad={false}
                />

                {/* Hover Actions */}
                <div
                    className={`absolute inset-0 bg-black/30 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-150 ease-out ${isHovered ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Button
                        size="sm"
                        className="liquid-glass-button text-white border-white/20 hover:border-white/40"
                        onClick={(e) => {
                            e.stopPropagation();
                            onViewDetails(id);
                        }}
                    >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                    </Button>
                </div>
            </div>

            {/* Product Info - Flex container that grows to fill available space */}
            <div className="flex flex-col flex-1 min-h-0">
                {/* Category */}
                <div className="text-xs font-medium text-purple-600/80 uppercase tracking-wide mb-2">
                    {category}
                </div>

                {/* Title - Fixed height for 2 lines to ensure consistency */}
                <h3 className="font-playfair font-semibold text-base sm:text-xl leading-tight text-purple-900 line-clamp-2 no-text-glow mb-2 min-h-[3rem] sm:min-h-[3.5rem]">
                    {title}
                </h3>

                {/* Spacer that grows to push button to bottom */}
                <div className="flex-1"></div>

                {/* WhatsApp Enquiry - Always at bottom */}
                <div className="flex justify-between items-center pt-2">
                    <div className="flex-1 hidden sm:block">
                        <WhatsAppEnquiry
                            productName={title}
                            size="sm"
                            variant="glass"
                            className="w-full"
                        />
                    </div>
                    <div className="flex sm:hidden w-full justify-end">
                        <WhatsAppEnquiry
                            productName={title}
                            size="icon"
                            variant="glass"
                            iconOnly
                            className="rounded-full p-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;