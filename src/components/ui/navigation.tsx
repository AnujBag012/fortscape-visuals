import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, MapPin } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">COMFORT</h1>
              <p className="text-sm text-muted-foreground -mt-1">COMPASS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              HOME
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              ABOUT US
            </a>
            <a href="#packages" className="text-foreground hover:text-primary transition-colors font-medium">
              PACKAGE
            </a>
            <a href="#your-packages" className="text-foreground hover:text-primary transition-colors font-medium">
              YOUR PACKAGES
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <MapPin className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
                HOME
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                ABOUT US
              </a>
              <a href="#packages" className="text-foreground hover:text-primary transition-colors font-medium">
                PACKAGE
              </a>
              <a href="#your-packages" className="text-foreground hover:text-primary transition-colors font-medium">
                YOUR PACKAGES
              </a>
              <div className="flex items-center space-x-4 pt-4">
                <Button variant="ghost" size="sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;