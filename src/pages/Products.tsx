
import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ProductCard from "@/components/products/ProductCard";
import { products, categories } from "@/data/products";
import { preloadImages } from "@/utils/image-cache";

const Products = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 12;

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

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredAndSortedProducts.length / PRODUCTS_PER_PAGE));
  const firstProductIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = filteredAndSortedProducts.slice(
    firstProductIndex,
    firstProductIndex + PRODUCTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Unified Background for Entire Page */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/30 to-blue-900/40 -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/15 via-transparent to-transparent -z-10" />

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

      {/* Filters Section - Elegantly Refined */}
      <section className="py-8 md:py-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Search Bar - Minimalistic & Luxurious */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 transition-colors group-hover:text-purple-400" />
              <Input
                placeholder="Search for premium kitchenware..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 pr-6 h-14 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 text-slate-800 placeholder:text-slate-400 shadow-lg hover:shadow-xl hover:border-purple-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 text-base font-medium"
              />
            </div>
          </div>

          {/* Category Filters - Clean Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30 hover:bg-purple-700"
                  : "bg-white/80 backdrop-blur-sm text-slate-700 border border-slate-200 hover:border-purple-300 hover:bg-white hover:shadow-md"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Controls Row - Refined Layout */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-white/10">
            {/* Product Count */}
            <div className="text-slate-300 text-sm font-medium">
              Showing <span className="text-purple-400 font-semibold">{filteredAndSortedProducts.length}</span> of <span className="text-purple-400 font-semibold">{products.length}</span> products
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-3">

              {/* View Toggle - Minimalistic */}
              <div className="flex bg-white/90 backdrop-blur-sm rounded-full p-1 border border-slate-200 shadow-sm">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-full transition-all duration-300 ${viewMode === "grid"
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-slate-500 hover:text-purple-600 hover:bg-purple-50"
                    }`}
                  aria-label="Grid view"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-full transition-all duration-300 ${viewMode === "list"
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-slate-500 hover:text-purple-600 hover:bg-purple-50"
                    }`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
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
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
                <p className="text-slate-400">
                  Showing {Math.min(filteredAndSortedProducts.length, firstProductIndex + 1)}-
                  {Math.min(filteredAndSortedProducts.length, firstProductIndex + currentProducts.length)} of {filteredAndSortedProducts.length} filtered products
                </p>
                <p className="text-slate-500 text-sm">
                  Desktop pagination set to {PRODUCTS_PER_PAGE} products per page
                </p>
              </div>

              <div className={`grid gap-4 sm:gap-6 lg:gap-8 auto-rows-fr ${viewMode === "grid"
                ? "grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-1"
                }`}>
                {currentProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-12 hidden md:block">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(currentPage - 1);
                          }}
                          className={currentPage === 1 ? "pointer-events-none opacity-40" : ""}
                        />
                      </PaginationItem>
                      {Array.from({ length: totalPages }).map((_, index) => (
                        <PaginationItem key={index}>
                          <PaginationLink
                            href="#"
                            isActive={currentPage === index + 1}
                            onClick={(e) => {
                              e.preventDefault();
                              handlePageChange(index + 1);
                            }}
                          >
                            {index + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(currentPage + 1);
                          }}
                          className={currentPage === totalPages ? "pointer-events-none opacity-40" : ""}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
