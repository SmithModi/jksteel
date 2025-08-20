import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavHeader from "@/components/ui/nav-header";
import { useIsMobile } from "@/hooks/use-mobile";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const navigation = [{
    name: "Home",
    href: "/"
  }, {
    name: "Products",
    href: "/products"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden md:block py-4">
          <NavHeader />
        </div>

        {/* Mobile Header */}
        <div className="md:hidden py-3">
          <div className="flex items-center justify-between">
            {/* Mobile Logo */}
            

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="glass-button p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && <div className="mt-4 pb-4 border-t border-white/20 pt-4 liquid-glass-card rounded-xl">
              <nav className="flex flex-col space-y-2 p-3">
                {navigation.map(item => <Link key={item.name} to={item.href} className={`text-base font-medium transition-all duration-200 px-4 py-3 rounded-lg ${isActive(item.href) ? "text-white bg-white/20 shadow-lg" : "text-white/90 hover:text-white hover:bg-white/10"}`} onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>)}
              </nav>
            </div>}
        </div>
      </div>
    </header>;
};
export default Header;