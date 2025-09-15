import { Link } from "react-router-dom";
import { ShoppingBag, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
const Footer = () => {
  return <footer className="glass-card border-t border-white/20 mt-12 sm:mt-16 lg:mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 glass-card rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg sm:text-xl font-playfair font-bold product-title">JK Steel</span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
               Elevate your culinary experience with our premium collection of kitchenware. 
               Designed for the modern chef who values both style and functionality.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 glass-card rounded-lg flex items-center justify-center hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 glass-card rounded-lg flex items-center justify-center hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 glass-card rounded-lg flex items-center justify-center hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 glass-card rounded-lg flex items-center justify-center hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-playfair font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-primary transition-colors text-sm block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-300 hover:text-primary transition-colors text-sm block py-1">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-primary transition-colors text-sm block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-primary transition-colors text-sm block py-1">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors text-sm block py-1">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors text-sm block py-1">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-playfair font-semibold text-white">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors text-sm block py-1">
                  Storage Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors text-sm block py-1">
                  Cutting Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors text-sm block py-1">
                  Kitchen Gadgets
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors text-sm block py-1">
                  Organization
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-primary transition-colors text-sm block py-1">
                  Premium Collection
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-playfair font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-slate-300 text-sm break-all">jaykhodiyarkrupa@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-slate-300 text-sm">+91 6353786749</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">
                  Jay Khodiyar Krupa, Plot no 2<br />
                  Jay sardar industrial area<br />
                  Near kothariya railway station<br />
                  Rajkot - 360002
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-slate-200 px-4">
            © 2024 Luxe Kitchen. All rights reserved. Crafted with passion for culinary excellence.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
