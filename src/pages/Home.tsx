import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Award, Sparkles, ChefHat, Utensils, Wine, Soup, Quote, Shield, Truck, Clock, Heart, Mail, Play, CheckCircle, Zap, Globe, Scissors, Crown, BookOpen, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-kitchenware.jpg";
const Home = () => {
  const [featuredProducts] = useState(products.slice(0, 6));
  const handleViewDetails = (id: string) => {
    window.location.href = `/product/${id}`;
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Elegant Hero Background */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroImage})`,
        filter: 'brightness(0.5) contrast(1.2)'
      }} />
        
        {/* Sophisticated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />
        
        {/* Animated Floating Kitchen Elements */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Central Orbiting Elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-80 h-80">
              {/* Main Orbit */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{
              animation: "orbit 25s linear infinite"
            }}>
                <div className="liquid-glass-card w-12 h-12 rounded-2xl flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Secondary Orbit */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{
              animation: "orbit 20s linear infinite reverse",
              animationDelay: "-5s"
            }}>
                <div className="liquid-glass-card w-10 h-10 rounded-xl flex items-center justify-center">
                  <Wine className="w-5 h-5 text-blue-300" />
                </div>
              </div>

              {/* Third Orbit */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{
              animation: "orbit 30s linear infinite",
              animationDelay: "-10s"
            }}>
                <div className="liquid-glass-card w-8 h-8 rounded-lg flex items-center justify-center">
                  <Soup className="w-4 h-4 text-orange-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Corner Floating Elements */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="liquid-glass-card w-16 h-16 rounded-2xl flex items-center justify-center">
              <Utensils className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <div className="absolute top-32 right-16 animate-float" style={{
          animationDelay: "2s"
        }}>
            <div className="liquid-glass-card w-14 h-14 rounded-xl flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-purple-300" />
            </div>
          </div>

          <div className="absolute bottom-32 left-20 animate-float" style={{
          animationDelay: "4s"
        }}>
            <div className="liquid-glass-card w-12 h-12 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-yellow-300" />
            </div>
          </div>

          <div className="absolute bottom-40 right-10 animate-float" style={{
          animationDelay: "6s"
        }}>
            <div className="liquid-glass-card w-10 h-10 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-blue-300" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
          <div className="text-center max-w-4xl mx-auto">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 mb-8" style={{
              animation: "hero-text-reveal 1.2s ease-out 0.1s both"
            }}>
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-white">Crafted for Culinary Excellence</span>
              <Award className="w-4 h-4 text-yellow-400" />
            </div>
            
            {/* Hero Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold mb-6 sm:mb-8 text-white leading-tight px-4" style={{
            animation: "hero-text-reveal 1.2s ease-out 0.3s both"
          }}>
              Luxe{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Kitchen
                </span>
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200/80 mb-8 sm:mb-12 max-w-2xl mx-auto font-light px-4" style={{
            animation: "hero-text-reveal 1.2s ease-out 0.6s both"
          }}>
              Exceptional kitchenware for the discerning chef
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 w-full max-w-md sm:max-w-none mx-auto" style={{
              animation: "hero-text-reveal 1.2s ease-out 0.9s both"
            }}>
              <Button size="lg" className="glass-button text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto" asChild>
                <Link to="/products">
                  Explore Collection
                  <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="glass-button text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto" asChild>
                <Link to="/about">
                  <Play className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
                  Our Story
                </Link>
              </Button>
            </div>
            
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="animate-bounce">
            
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="glass-card rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 inline-block">
              <span className="text-xs sm:text-sm font-medium text-slate-200">Featured Collection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mb-3 sm:mb-4 px-4">
              Discover Our <span className="text-gradient-primary">Premium</span> Selection
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Each product is carefully selected for its exceptional quality, innovative design, and superior functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map(product => <ProductCard key={product.id} {...product} onViewDetails={handleViewDetails} />)}
          </div>

          <div className="text-center mt-8 sm:mt-12 px-4">
            <Button size="lg" variant="outline" className="glass-button w-full sm:w-auto" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 glass-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mb-3 sm:mb-4 px-4">
              Why Choose <span className="text-gradient-primary">Luxe Kitchen?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-slate-200 px-4">
              We're committed to delivering excellence in every aspect of your culinary journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center glass-card p-6 sm:p-8 rounded-2xl">
              <div className="w-12 sm:w-16 h-12 sm:h-16 glass-card rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Award className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-playfair font-semibold mb-3 sm:mb-4">Premium Quality</h3>
              <p className="text-sm sm:text-base text-slate-50">
                Every product undergoes rigorous quality testing to ensure it meets our high standards of excellence and durability.
              </p>
            </div>

            <div className="text-center glass-card p-6 sm:p-8 rounded-2xl">
              <div className="w-12 sm:w-16 h-12 sm:h-16 glass-card rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Star className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-playfair font-semibold mb-3 sm:mb-4">Expert Design</h3>
              <p className="text-sm sm:text-base text-slate-50">
                Our products are designed by culinary experts who understand the needs of both professional chefs and home cooks.
              </p>
            </div>

            <div className="text-center glass-card p-6 sm:p-8 rounded-2xl">
              <div className="w-12 sm:w-16 h-12 sm:h-16 glass-card rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Users className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-playfair font-semibold mb-3 sm:mb-4">Customer First</h3>
              <p className="text-sm sm:text-base text-slate-50">
                We prioritize customer satisfaction with exceptional service, easy returns, and comprehensive warranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Partnerships Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="glass-card rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 inline-block">
              <span className="text-xs sm:text-sm font-medium text-slate-200">Chef Partnerships</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mb-3 sm:mb-4 px-4">
              Trusted by <span className="text-gradient-primary">World-Class</span> Chefs
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Our kitchenware is the choice of Michelin-starred restaurants and culinary institutes worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="glass-card p-6 sm:p-8 rounded-2xl text-center">
              <div className="w-16 sm:w-20 h-16 sm:h-20 glass-card rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Crown className="w-8 sm:w-10 h-8 sm:h-10 text-yellow-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-playfair font-semibold mb-2 sm:mb-3">Chef Marcus Laurent</h3>
              <p className="text-xs sm:text-sm text-purple-300 mb-3 sm:mb-4">Michelin 3-Star • Le Bernardin</p>
              <p className="text-slate-200 text-sm">
                "Luxe Kitchen's precision and craftsmanship have revolutionized how we approach fine dining preparation."
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-2xl text-center">
              <div className="w-16 sm:w-20 h-16 sm:h-20 glass-card rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <ChefHat className="w-8 sm:w-10 h-8 sm:h-10 text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-playfair font-semibold mb-2 sm:mb-3">Isabella Rodriguez</h3>
              <p className="text-xs sm:text-sm text-purple-300 mb-3 sm:mb-4">James Beard Winner • Culinary Institute</p>
              <p className="text-slate-200 text-sm">
                "The attention to detail in every piece reflects our commitment to culinary excellence."
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-2xl text-center">
              <div className="w-16 sm:w-20 h-16 sm:h-20 glass-card rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Award className="w-8 sm:w-10 h-8 sm:h-10 text-orange-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-playfair font-semibold mb-2 sm:mb-3">David Chen</h3>
              <p className="text-xs sm:text-sm text-purple-300 mb-3 sm:mb-4">Top Chef Winner • Molecular Gastronomy</p>
              <p className="text-slate-200 text-sm">
                "Innovation meets tradition - these tools enable creativity at the highest level."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 glass-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mb-3 sm:mb-4 px-4">
              Our <span className="text-gradient-primary">Craftsmanship</span> Process
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-3xl mx-auto px-4">
              From concept to kitchen, every piece is meticulously crafted through our time-honored process that combines traditional techniques with cutting-edge innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 glass-card rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-playfair font-semibold mb-2">Design & Research</h3>
                  <p className="text-slate-200 text-sm">
                    Our design team collaborates with professional chefs to understand real kitchen needs, creating blueprints that merge form with unparalleled functionality.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 glass-card rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-playfair font-semibold mb-2">Precision Manufacturing</h3>
                  <p className="text-slate-200 text-sm">
                    Using state-of-the-art CNC machinery and aerospace-grade materials, each piece is crafted to tolerances measured in microns for perfect performance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 glass-card rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-playfair font-semibold mb-2">Quality Assurance</h3>
                  <p className="text-slate-200 text-sm">
                    Every product undergoes 47 individual quality checks including stress testing, temperature resistance, and performance validation by master craftsmen.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 glass-card rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 sm:w-6 h-5 sm:h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-playfair font-semibold mb-2">Hand-Finished Excellence</h3>
                  <p className="text-slate-200 text-sm">
                    Master artisans apply final touches, ensuring each piece meets our exacting standards before earning the Luxe Kitchen mark of excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-2xl mt-8 lg:mt-0">
              <div className="text-center mb-6">
                <Camera className="w-10 sm:w-12 h-10 sm:h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-playfair font-semibold mb-2">Behind the Scenes</h3>
                <p className="text-slate-200 text-sm mb-6">
                  Take a virtual tour of our artisan workshop where tradition meets innovation.
                </p>
              </div>
              <div className="aspect-video glass-card rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                <div className="text-center">
                  <Play className="w-12 sm:w-16 h-12 sm:h-16 text-white mx-auto mb-4" />
                  <p className="text-white font-medium">Watch Our Craft Process</p>
                  <p className="text-slate-300 text-sm">3 minute documentary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="glass-card rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 inline-block">
              <span className="text-xs sm:text-sm font-medium text-slate-200">Customer Stories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mb-3 sm:mb-4 px-4">
              What Our <span className="text-gradient-primary">Customers</span> Say
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Real experiences from home chefs and culinary professionals who've transformed their kitchens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <div className="flex items-center mb-4 sm:mb-6">
                <Quote className="w-6 sm:w-8 h-6 sm:h-8 text-purple-400 mr-3" />
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-200 mb-4 sm:mb-6 italic text-sm sm:text-base">
                "The knife set completely changed my cooking experience. The precision and balance are unmatched. It's like having professional-grade tools in my home kitchen."
              </p>
              <div className="flex items-center">
                <div className="w-10 sm:w-12 h-10 sm:h-12 glass-card rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <Users className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">Sarah Johnson</p>
                  <p className="text-xs sm:text-sm text-slate-300">Home Chef & Food Blogger</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <div className="flex items-center mb-4 sm:mb-6">
                <Quote className="w-6 sm:w-8 h-6 sm:h-8 text-purple-400 mr-3" />
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-200 mb-4 sm:mb-6 italic text-sm sm:text-base">
                "As a restaurant owner, I demand the best. Luxe Kitchen delivers consistency and durability that our busy kitchen requires. Outstanding investment."
              </p>
              <div className="flex items-center">
                <div className="w-10 sm:w-12 h-10 sm:h-12 glass-card rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <ChefHat className="w-5 sm:w-6 h-5 sm:h-6 text-orange-400" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">Michael Torres</p>
                  <p className="text-xs sm:text-sm text-slate-300">Restaurant Owner</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-2xl md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4 sm:mb-6">
                <Quote className="w-6 sm:w-8 h-6 sm:h-8 text-purple-400 mr-3" />
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-200 mb-4 sm:mb-6 italic text-sm sm:text-base">
                "Every piece feels luxurious and performs flawlessly. The customer service was exceptional, and the packaging was museum-quality beautiful."
              </p>
              <div className="flex items-center">
                <div className="w-10 sm:w-12 h-10 sm:h-12 glass-card rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <Heart className="w-5 sm:w-6 h-5 sm:h-6 text-red-400" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">Emma Williams</p>
                  <p className="text-xs sm:text-sm text-slate-300">Culinary Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Tips & Education */}
      <section className="py-12 sm:py-16 lg:py-20 glass-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mb-3 sm:mb-4 px-4">
              Master Your <span className="text-gradient-primary">Culinary Skills</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto px-4">
              Exclusive tips and techniques from our partner chefs to help you get the most out of your premium kitchenware.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center flex-shrink-0">
                    <Scissors className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-playfair font-semibold mb-2">Knife Mastery</h3>
                    <p className="text-slate-200 text-sm mb-3">
                      Learn the fundamental cuts that every chef should master: brunoise, julienne, and chiffonade techniques that transform your ingredient preparation.
                    </p>
                    <Link to="/tips/knife-skills" className="text-purple-400 hover:text-purple-300 text-sm font-medium story-link">
                      Read Full Guide →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center flex-shrink-0">
                    <Soup className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-playfair font-semibold mb-2">Heat Management</h3>
                    <p className="text-slate-200 text-sm mb-3">
                      Understanding thermal dynamics with premium cookware - how proper heat distribution creates perfect sears, gentle braising, and consistent results.
                    </p>
                    <Link to="/tips/heat-control" className="text-purple-400 hover:text-purple-300 text-sm font-medium story-link">
                      Explore Techniques →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-playfair font-semibold mb-2">Maintenance Secrets</h3>
                    <p className="text-slate-200 text-sm mb-3">
                      Professional care techniques to maintain your investment. Learn proper cleaning, storage, and maintenance to ensure lifetime performance.
                    </p>
                    <Link to="/tips/maintenance" className="text-purple-400 hover:text-purple-300 text-sm font-medium story-link">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="text-center mb-6">
                <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-playfair font-semibold mb-2">Free Culinary Guide</h3>
                <p className="text-slate-200 text-sm mb-6">
                  Download our comprehensive 50-page guide featuring techniques, recipes, and maintenance tips curated by our partner chefs.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  <span>Professional knife techniques</span>
                </div>
                <div className="flex items-center text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  <span>Heat management mastery</span>
                </div>
                <div className="flex items-center text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  <span>Equipment care & maintenance</span>
                </div>
                <div className="flex items-center text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                  <span>Exclusive recipes from partner chefs</span>
                </div>
                <Button className="w-full glass-button mt-6">
                  <Mail className="w-4 h-4 mr-2" />
                  Get Free Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Values */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="glass-card rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 inline-block">
              <span className="text-xs sm:text-sm font-medium text-slate-200">Our Commitment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mb-3 sm:mb-4 px-4">
              Sustainable <span className="text-gradient-primary">Excellence</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Our commitment extends beyond creating exceptional kitchenware. We're dedicated to environmental responsibility, ethical sourcing, and supporting culinary communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center glass-card p-6 rounded-2xl">
              <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-playfair font-semibold mb-2">Carbon Neutral</h3>
              <p className="text-slate-200 text-sm">
                100% carbon-neutral production and shipping through verified offset programs and renewable energy.
              </p>
            </div>

            <div className="text-center glass-card p-6 rounded-2xl">
              <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-playfair font-semibold mb-2">Ethical Sourcing</h3>
              <p className="text-slate-200 text-sm">
                All materials are ethically sourced with fair labor practices and transparent supply chain partnerships.
              </p>
            </div>

            <div className="text-center glass-card p-6 rounded-2xl">
              <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-lg font-playfair font-semibold mb-2">Community Support</h3>
              <p className="text-slate-200 text-sm">
                We donate 1% of profits to culinary education programs in underserved communities worldwide.
              </p>
            </div>

            <div className="text-center glass-card p-6 rounded-2xl">
              <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-playfair font-semibold mb-2">Lifetime Quality</h3>
              <p className="text-slate-200 text-sm">
                Built to last generations, reducing waste through superior durability and comprehensive repair services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Service Guarantees */}
      <section className="py-12 sm:py-16 lg:py-20 glass-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mb-3 sm:mb-4 px-4">
              Our <span className="text-gradient-primary">Service Promise</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto px-4">
              Experience white-glove service that matches the quality of our products, from purchase to lifelong support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-4">Premium Delivery</h3>
              <div className="space-y-2 text-sm text-slate-200">
                <p>• Free white-glove delivery</p>
                <p>• Climate-controlled shipping</p>
                <p>• Signature luxury packaging</p>
                <p>• Scheduled delivery windows</p>
                <p>• Complimentary setup service</p>
              </div>
            </div>

            <div className="text-center glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-4">Instant Support</h3>
              <div className="space-y-2 text-sm text-slate-200">
                <p>• 24/7 expert consultation</p>
                <p>• Live chat with culinary specialists</p>
                <p>• Video troubleshooting sessions</p>
                <p>• Multilingual support team</p>
                <p>• Response within 5 minutes</p>
              </div>
            </div>

            <div className="text-center glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-4">Lifetime Guarantee</h3>
              <div className="space-y-2 text-sm text-slate-200">
                <p>• Lifetime craftsmanship warranty</p>
                <p>• Free annual maintenance service</p>
                <p>• Complimentary sharpening program</p>
                <p>• 90-day satisfaction guarantee</p>
                <p>• Heirloom restoration service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter & Community */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <div className="glass-card rounded-full px-4 py-2 mb-6 inline-block">
                  <span className="text-sm font-medium text-slate-200">Join Our Community</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mb-3 sm:mb-4">
                  Stay Connected with <span className="text-gradient-primary">Culinary Excellence</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-slate-200 mb-6 sm:mb-8">
                  Get exclusive access to chef tutorials, new product launches, seasonal recipes, and insider tips from the world of luxury kitchenware.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-slate-200">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Weekly chef masterclasses</span>
                  </div>
                  <div className="flex items-center text-slate-200">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Early access to new collections</span>
                  </div>
                  <div className="flex items-center text-slate-200">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Exclusive member discounts</span>
                  </div>
                  <div className="flex items-center text-slate-200">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>Seasonal recipe collections</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input 
                      type="email" 
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 glass-card rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                  <Button className="glass-button px-6 py-3">
                    <Mail className="w-4 h-4 mr-2" />
                    Subscribe
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-playfair font-semibold">Community Stats</h3>
                      <p className="text-sm text-slate-300">Growing culinary family</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-purple-400">25,000+</p>
                      <p className="text-xs text-slate-300">Active Members</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-400">1,200+</p>
                      <p className="text-xs text-slate-300">Shared Recipes</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                      <Crown className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-playfair font-semibold">VIP Program</h3>
                      <p className="text-sm text-slate-300">Exclusive benefits await</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-200 mb-4">
                    Unlock premium benefits with our loyalty program featuring priority access, exclusive events, and personalized consultations.
                  </p>
                  <Button variant="outline" size="sm" className="glass-button w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mb-3 sm:mb-4">
              Ready to Transform Your Kitchen?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-slate-200">
              Join thousands of satisfied customers who have elevated their culinary experience with our premium kitchenware collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button size="lg" className="glass-button text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto" asChild>
                <Link to="/products">Start Shopping</Link>
              </Button>
              <Button variant="outline" size="lg" className="glass-button text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;