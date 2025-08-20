
import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/products/ProductCard";
import { products, categories } from "@/data/products";
import { preloadImages } from "@/utils/image-cache";

const Products = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Aggressively preload all visible product images
  useEffect(() => {
    const allImageSrcs = products.map(product => product.image);
    preloadImages(allImageSrcs.slice(0, 12)); // Preload first 12 images immediately
    
    // Preload remaining images with a small delay
    setTimeout(() => {
      preloadImages(allImageSrcs.slice(12));
    }, 100);
  }, []);

  const handleViewDetails = (id: string) => {
    navigate(`/product/${id}`);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.title.localeCompare(b.title);
        case "price-low":
          return parseFloat(a.price.replace("₹", "")) - parseFloat(b.price.replace("₹", ""));
        case "price-high":
          return parseFloat(b.price.replace("₹", "")) - parseFloat(a.price.replace("₹", ""));
        case "newest":
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Unified Background for Entire Page */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/30 to-blue-900/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/15 via-transparent to-transparent" />
      
      {/* Hero Header */}
      <section className="pt-28 md:pt-32 pb-8 md:pb-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-white no-text-glow leading-tight">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Product</span> Collection
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover premium kitchenware designed to elevate your culinary experience. From storage solutions to cutting-edge tools.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section - Seamlessly Integrated */}
      <section className="py-8 md:py-10 relative z-10">
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col gap-8">
            {/* Search Bar - Full Width */}
            <div className="relative max-w-2xl mx-auto w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg liquid-glass-card bg-white/10 border-white/20 text-white placeholder:text-slate-300 focus:border-blue-400/50 focus:bg-white/15 transition-all duration-300"
              />
            </div>

            {/* Category Filters - Centered */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="lg"
                  className={`liquid-glass-button px-6 py-3 transition-all duration-300 ${
                    selectedCategory === category 
                      ? "bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white border-white/20 shadow-lg hover:from-blue-400/80 hover:to-purple-400/80" 
                      : "bg-white/10 text-white/90 border-white/30 hover:bg-white/20 hover:border-blue-400/50"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Sort & View Controls - Right Aligned */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-slate-300">
                Showing {filteredAndSortedProducts.length} of {products.length} products
              </div>
              
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="liquid-glass-card px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:border-blue-400/50 focus:outline-none focus:bg-white/15 transition-all duration-300"
                >
                  <option value="name" className="bg-slate-800 text-white">Sort by Name</option>
                  <option value="price-low" className="bg-slate-800 text-white">Price: Low to High</option>
                  <option value="price-high" className="bg-slate-800 text-white">Price: High to Low</option>
                  <option value="newest" className="bg-slate-800 text-white">Newest First</option>
                </select>

                <div className="flex bg-white/10 rounded-lg p-1 border border-white/20">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={`liquid-glass-button p-3 ${
                      viewMode === "grid" 
                        ? "bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white" 
                        : "text-white/70 hover:text-white hover:bg-white/20"
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={`liquid-glass-button p-3 ${
                      viewMode === "list" 
                        ? "bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white" 
                        : "text-white/70 hover:text-white hover:bg-white/20"
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section - Seamlessly Integrated */}
      <section className="py-12 relative z-10">
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="liquid-glass-card w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 bg-white/5 border border-white/10">
                <Filter className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-2 text-white no-text-glow">No Products Found</h3>
              <p className="text-slate-400 mb-6">
                Try adjusting your search terms or filter criteria.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Products");
                }}
                className="liquid-glass-button bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white border-white/20 hover:from-blue-400/80 hover:to-purple-400/80"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <p className="text-slate-400">
                  Showing {filteredAndSortedProducts.length} of {products.length} products
                </p>
              </div>

              <div className={`grid gap-8 ${
                viewMode === "grid" 
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                  : "grid-cols-1"
              }`}>
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section - Seamlessly Integrated */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold mb-4 text-white no-text-glow">
              Stay Updated with New Arrivals
            </h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Be the first to know about our latest products, exclusive offers, and kitchen tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="liquid-glass-card flex-1 bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-white/20"
              />
              <Button className="liquid-glass-button bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white border-white/20 hover:from-blue-400/80 hover:to-purple-400/80 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
