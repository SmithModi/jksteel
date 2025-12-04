import { Users, Target, Award, Clock, Heart, Lightbulb, ArrowDown, Package, ChefHat, Utensils, Sparkles, Home, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Unified Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/30 to-blue-900/40 -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/15 via-transparent to-transparent -z-10" />

      {/* HERO SECTION - Our Story - Full Viewport at 100% Zoom */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

            {/* Left Side - Logo */}
            <div className="flex items-center justify-center order-2 lg:order-1">
              <div className="relative group">
                {/* Animated Rings Around Logo */}
                <div className="absolute inset-0 -m-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-2xl animate-pulse"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-spin-slow"></div>
                </div>

                {/* Logo Container */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-purple-500/20">
                  <img
                    src="/jksteellogo.png"
                    alt="JK Steel Logo"
                    className="w-full max-w-sm mx-auto drop-shadow-2xl"
                  />
                </div>

                {/* Floating Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500/40 to-blue-500/40 rounded-full blur-2xl animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-full blur-2xl animate-float-delayed"></div>
              </div>
            </div>

            {/* Right Side - Story Content */}
            <div className="space-y-8 order-1 lg:order-2">

              {/* Main Heading */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 text-white no-text-glow leading-tight">
                  Our{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                    Story
                  </span>
                </h1>
                <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-8"></div>
              </div>

              {/* Story Content */}
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                  For over <span className="text-purple-400 font-semibold">15 years</span>, JK Steel has been dedicated to creating premium kitchenware and household items that combine exceptional functionality with elegant design.
                </p>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                  From kitchen essentials to everyday household products, we believe that the right tools can transform your daily routines into{" "}
                  <span className="text-blue-400 font-semibold">delightful experiences</span>!
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-bold text-purple-400 mb-1">50K+</div>
                  <div className="text-sm text-slate-300">Happy Customers</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-bold text-blue-400 mb-1">200+</div>
                  <div className="text-sm text-slate-300">Premium Products</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/30 text-base px-8"
                  asChild
                >
                  <Link to="/products">Explore Products</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:border-white/30 text-base px-8"
                  asChild
                >
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Simple, No Animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-slate-400 text-sm font-medium">Scroll to explore</span>
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="min-h-screen flex items-center py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
              Mission & <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Vision</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 lg:p-10 rounded-3xl hover:bg-white/10 transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-3xl font-playfair font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                To empower home chefs and culinary professionals with innovative, beautifully designed kitchenware
                that enhances their cooking experience and inspires creativity in the kitchen.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300">Uncompromising quality in every product</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300">Innovative design that solves real problems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300">Exceptional customer experience</span>
                </li>
              </ul>
            </div>

            {/* Vision Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 lg:p-10 rounded-3xl hover:bg-white/10 transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-3xl font-playfair font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                To become the world's most trusted and beloved kitchenware brand, known for products that bring
                joy to cooking and create lasting memories around the table.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300">Global presence with local understanding</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300">Sustainable and eco-friendly practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-300">Continuous innovation and improvement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-3">
              What We <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-base text-slate-400 max-w-2xl mx-auto">
              Premium kitchenware and household essentials for modern living
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Storage Solutions */}
            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-playfair font-bold text-white mb-2">Storage Solutions</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                Premium storage containers, jars, and boxes for freshness
              </p>
              <ul className="space-y-1.5 text-xs text-white">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-purple-400"></div>
                  <span>Airtight Containers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-purple-400"></div>
                  <span>Storage Jars & Canisters</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-purple-400"></div>
                  <span>Lunch Boxes & Tiffins</span>
                </li>
              </ul>
            </div>

            {/* Premium Cookware */}
            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-4">
                <ChefHat className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-playfair font-bold text-white mb-2">Premium Cookware</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                Professional pots, pans, and kadais for perfect cooking
              </p>
              <ul className="space-y-1.5 text-xs text-white">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                  <span>Non-Stick Sets</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                  <span>Pressure Cookers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                  <span>Induction Compatible</span>
                </li>
              </ul>
            </div>

            {/* Kitchen Tools */}
            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-4">
                <Utensils className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-playfair font-bold text-white mb-2">Kitchen Tools</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                Essential gadgets for easier everyday cooking
              </p>
              <ul className="space-y-1.5 text-xs text-white">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-purple-400"></div>
                  <span>Knives & Boards</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-purple-400"></div>
                  <span>Graters & Peelers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-purple-400"></div>
                  <span>Bowls & Strainers</span>
                </li>
              </ul>
            </div>

            {/* Serveware */}
            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-4">
                <UtensilsCrossed className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-playfair font-bold text-white mb-2">Serveware</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                Elegant serving dishes for special occasions
              </p>
              <ul className="space-y-1.5 text-xs text-white">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                  <span>Serving Bowls</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                  <span>Casseroles & Hotpots</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                  <span>Trays & Servers</span>
                </li>
              </ul>
            </div>

            {/* Household Essentials */}
            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-playfair font-bold text-white mb-2">Household Essentials</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                Practical solutions for organized living
              </p>
              <ul className="space-y-1.5 text-xs text-white">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-purple-400"></div>
                  <span>Cleaning Tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-purple-400"></div>
                  <span>Home Organizers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-purple-400"></div>
                  <span>Utility Items</span>
                </li>
              </ul>
            </div>

            {/* Dining Accessories */}
            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-playfair font-bold text-white mb-2">Dining Accessories</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                Complete your dining with quality cutlery
              </p>
              <ul className="space-y-1.5 text-xs text-white">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                  <span>Cutlery Sets</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                  <span>Spoons & Ladles</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                  <span>Organizers</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/20 px-8"
              asChild
            >
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              These core values guide every decision we make and every product we create.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Excellence */}
            <div className="text-center bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-white">Excellence</h3>
              <p className="text-slate-300 leading-relaxed">
                We never compromise on quality. Every product undergoes rigorous testing to ensure it meets
                our highest standards of durability, functionality, and design.
              </p>
            </div>

            {/* Passion */}
            <div className="text-center bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-white">Passion</h3>
              <p className="text-slate-300 leading-relaxed">
                Our love for cooking and design drives everything we do. We're passionate about creating
                products that inspire others to discover the joy of cooking.
              </p>
            </div>

            {/* Community */}
            <div className="text-center bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-white">Community</h3>
              <p className="text-slate-300 leading-relaxed">
                We believe in building relationships with our customers and supporting the culinary community
                through education, inspiration, and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Timeline</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Key milestones that shaped our journey.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mt-4"></div>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              { year: "2009", title: "Company Founded", description: "Started with a vision to create beautiful, functional kitchenware." },
              { year: "2012", title: "First Major Product Line", description: "Launched our signature storage collection." },
              { year: "2015", title: "International Expansion", description: "Expanded to European markets." },
              { year: "2018", title: "Sustainability Initiative", description: "Committed to eco-friendly materials." },
              { year: "2021", title: "Digital Transformation", description: "Launched our e-commerce platform." },
              { year: "2024", title: "Innovation Lab", description: "Opened research facility for next-gen technology." }
            ].map((milestone, index) => (
              <div
                key={index}
                className="flex items-start gap-6 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-7 h-7 text-purple-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                    <span className="text-2xl font-bold text-purple-400">{milestone.year}</span>
                    <h3 className="text-xl font-playfair font-semibold text-white">{milestone.title}</h3>
                  </div>
                  <p className="text-slate-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-white/20 p-12 rounded-3xl text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-white">
              Join Our Culinary Journey
            </h2>
            <p className="text-xl mb-8 text-slate-300 leading-relaxed">
              Discover how our premium kitchenware can transform your cooking experience and inspire your culinary creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/30 text-base px-8"
                asChild
              >
                <Link to="/products">Explore Products</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:border-white/30 text-base px-8"
                asChild
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;