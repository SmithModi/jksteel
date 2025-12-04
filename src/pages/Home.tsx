import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Award, Sparkles, ChefHat, Utensils, Wine, Soup, Quote, Shield, Truck, Clock, Heart, Mail, Play, CheckCircle, Zap, Globe, Scissors, Crown, BookOpen, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import heroImage from "@/assets/hero-kitchenware.jpg";

const testimonials = [
  {
    text: "The knife set completely changed my cooking experience. The precision and balance are unmatched. It's like having professional-grade tools in my home kitchen.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah Johnson",
    role: "Home Chef & Food Blogger",
  },
  {
    text: "As a restaurant owner, I demand the best. JK Steel delivers consistency and durability that our busy kitchen requires. Outstanding investment.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Michael Torres",
    role: "Restaurant Owner",
  },
  {
    text: "Every piece feels luxurious and performs flawlessly. The customer service was exceptional, and the packaging was museum-quality beautiful.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Emma Williams",
    role: "Culinary Student",
  },
  {
    text: "JK Steel's storage containers keep my ingredients fresh for days. The airtight seals and premium materials make meal prep so much easier.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "David Chen",
    role: "Meal Prep Enthusiast",
  },
  {
    text: "The cookware heats evenly and the non-stick surface is incredible. Cleaning up after cooking has never been this easy. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Priya Sharma",
    role: "Home Cook",
  },
  {
    text: "I've been using JK Steel products for years in my catering business. They withstand heavy use and still look brand new. Worth every penny.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Lisa Anderson",
    role: "Catering Business Owner",
  },
  {
    text: "The kitchen tools are ergonomically designed and make cooking a pleasure. My hands don't tire even after hours of prep work.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "James Wilson",
    role: "Professional Chef",
  },
  {
    text: "Beautiful design meets functionality. These products look stunning on my kitchen counter and perform even better than they look.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sophia Martinez",
    role: "Food Stylist",
  },
  {
    text: "The quality is unmatched. I've tried many brands, but JK Steel stands out for its durability and attention to detail. A game-changer!",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Robert Kumar",
    role: "Cooking Instructor",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Home = () => {
  return <div className="min-h-screen relative overflow-hidden">
    {/* Unified Background */}
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/30 to-blue-900/40 -z-10" />
    <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/15 via-transparent to-transparent -z-10" />

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
          {/* Hero Title */}
          <div className="mb-6 sm:mb-8 px-4" style={{
            animation: "hero-text-reveal 1.2s ease-out 0.3s both"
          }}>
            <img src="/jksteellogo.png" alt="JK Steel Logo" className="mx-auto h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 object-contain" />
          </div>

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


    {/* Features Section */}
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mb-3 sm:mb-4 px-4">
            Why Choose <span className="text-gradient-primary">JK Steel?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-slate-200 px-4">
            We're committed to delivering excellence in every aspect of your culinary journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: "Premium Quality",
              desc: "Every product undergoes rigorous quality testing to ensure it meets our high standards of excellence and durability.",
              color: "text-amber-400",
              bg: "bg-amber-400/10",
              border: "border-amber-400/20"
            },
            {
              icon: Star,
              title: "Expert Design",
              desc: "Our products are designed by culinary experts who understand the needs of both professional chefs and home cooks.",
              color: "text-blue-400",
              bg: "bg-blue-400/10",
              border: "border-blue-400/20"
            },
            {
              icon: Users,
              title: "Customer First",
              desc: "We prioritize customer satisfaction with exceptional service, easy returns, and comprehensive warranties.",
              color: "text-emerald-400",
              bg: "bg-emerald-400/10",
              border: "border-emerald-400/20"
            }
          ].map((feature, index) => (
            <div key={index} className="group relative glass-card p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5">
              <div className={`w-16 h-16 rounded-2xl ${feature.bg} ${feature.border} border flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3 text-slate-100">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>



    {/* Detailed Process Section */}
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
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
                    Master artisans apply final touches, ensuring each piece meets our exacting standards before earning the JK Steel mark of excellence.
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
      </div>
    </section>

    {/* Customer Testimonials */}
    <section className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="glass-card rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 inline-block">
              <span className="text-xs sm:text-sm font-medium text-slate-200">Customer Stories</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold mb-3 sm:mb-4 px-4 text-center">
            What Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Customers</span> Say
          </h2>
          <p className="text-center text-base sm:text-lg text-slate-400 px-4">
            Real experiences from home chefs and culinary professionals who've transformed their kitchens.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>




    {/* Sustainability & Values */}
    < section className="py-12 sm:py-16 lg:py-20" >
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
    </section >

    {/* Enhanced Service Guarantees */}
    < section className="py-12 sm:py-16 lg:py-20" >
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
    </section >



    {/* Final CTA Section */}
    < section className="py-12 sm:py-16 lg:py-20" >
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
    </section >
  </div >;
};
export default Home;
