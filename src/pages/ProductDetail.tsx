import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Shield, Truck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import LightningImage from "@/components/ui/lightning-image";
import { products, type Product } from "@/data/products";
const ProductDetail = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  
  useEffect(() => {
    setIsLoading(true);
    
    // Immediately find and set product
    const foundProduct = products.find(p => p.id === id);
    setProduct(foundProduct || null);
    setIsLoading(false);
  }, [id]);
  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  if (!product) {
    return <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-playfair font-bold mb-4">Product Not Found</h2>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
          <Button asChild className="glass-button">
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>;
  }
  return <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-foreground">{product.title}</span>
        </div>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-white/50 to-white/20">
              <LightningImage
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-contain"
                skeletonClassName="w-full h-96 rounded-lg"
                priority="high"
                loadingAnimation="shimmer"
                lazyLoad={false}
              />
            </div>
            
            {/* Thumbnail Images - For now showing same image multiple angles */}
            <div className="grid grid-cols-4 gap-4">
              {[0, 1, 2, 3].map(index => (
                <button 
                  key={index} 
                  className={`glass-card rounded-xl p-4 transition-all ${selectedImage === index ? "ring-2 ring-primary" : ""}`} 
                  onClick={() => setSelectedImage(index)}
                >
                  <LightningImage
                    src={product.image}
                    alt={`${product.title} view ${index + 1}`}
                    className="w-full h-20 object-contain"
                    skeletonClassName="w-full h-20 rounded-lg"
                    priority={index === 0 ? "high" : "medium"}
                    loadingAnimation="fade"
                    lazyLoad={false}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="glass-card">
                  {product.category}
                </Badge>
                {product.isNew && <Badge className="bg-accent text-accent-foreground">
                    New
                  </Badge>}
              </div>
              
              <h1 className="text-4xl font-playfair font-bold product-title mb-4">
                {product.title}
              </h1>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-slate-200">{product.price}</span>
                {product.originalPrice && <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>}
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="leading-relaxed text-slate-200">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-playfair font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.slice(0, 4).map((feature, index) => <li key={index} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>)}
              </ul>
            </div>


            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-xl text-center">
                <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium">Free Shipping</div>
                
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium">Warranty</div>
                <div className="text-xs text-muted-foreground">5-year guarantee</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <RotateCcw className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium">Easy Returns</div>
                <div className="text-xs text-muted-foreground">30-day policy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-2 glass-card">
              <TabsTrigger value="features" className="glass-button">Features</TabsTrigger>
              <TabsTrigger value="specifications" className="glass-button">Specifications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="features" className="mt-8">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-playfair font-semibold mb-6">Complete Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 bg-zinc-500" />
                      <span>{feature}</span>
                    </div>)}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-8">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-playfair font-semibold mb-6">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => <div key={key} className="flex justify-between items-center p-4 glass-card rounded-lg">
                      <span className="font-medium">{key}</span>
                      <span className="text-slate-200">{value}</span>
                    </div>)}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Back to Products */}
        <div className="mt-12 text-center">
          <Button variant="outline" className="glass-button" asChild>
            <Link to="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Products
            </Link>
          </Button>
        </div>
      </div>
    </div>;
};
// Loading skeleton component for better UX
const ProductDetailSkeleton = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb Skeleton */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-4 w-12" />
          <span>/</span>
          <Skeleton className="h-4 w-16" />
          <span>/</span>
          <Skeleton className="h-4 w-24" />
        </div>
      </div>

      {/* Product Detail Skeleton */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images Skeleton */}
          <div className="space-y-4">
            <div className="glass-card rounded-2xl p-8">
              <Skeleton className="w-full h-96" />
            </div>
            
            {/* Thumbnail Images Skeleton */}
            <div className="grid grid-cols-4 gap-4">
              {[0, 1, 2, 3].map(index => (
                <div key={index} className="glass-card rounded-xl p-4">
                  <Skeleton className="w-full h-20" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info Skeleton */}
          <div className="space-y-6">
            {/* Header Skeleton */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-12" />
              </div>
              
              <Skeleton className="h-12 w-3/4 mb-4" />

              {/* Price Skeleton */}
              <div className="flex items-center space-x-3 mb-6">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-6 w-20" />
              </div>
            </div>

            {/* Description Skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            {/* Key Features Skeleton */}
            <div className="glass-card p-6 rounded-xl">
              <Skeleton className="h-6 w-32 mb-4" />
              <div className="space-y-2">
                {[0, 1, 2, 3].map(index => (
                  <div key={index} className="flex items-start space-x-2">
                    <Skeleton className="w-4 h-4 mt-0.5" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[0, 1, 2].map(index => (
                <div key={index} className="glass-card p-4 rounded-xl text-center">
                  <Skeleton className="w-6 h-6 mx-auto mb-2" />
                  <Skeleton className="h-4 w-20 mx-auto mb-1" />
                  <Skeleton className="h-3 w-16 mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Skeleton */}
        <div className="mt-16">
          <div className="flex space-x-1 mb-8">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>
          <div className="glass-card p-8 rounded-2xl">
            <Skeleton className="h-8 w-48 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[0, 1, 2, 3].map(index => (
                <div key={index} className="flex items-start space-x-3">
                  <Skeleton className="w-5 h-5 mt-0.5" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;