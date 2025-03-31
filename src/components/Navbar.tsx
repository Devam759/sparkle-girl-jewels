import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="public/subhag-logo.webp" 
              alt="Subhag Logo" 
              className="h-10 w-auto"
            />
            <h1 className="text-3xl font-dancing font-bold bg-gradient-to-r from-pink-dark to-purple bg-clip-text text-transparent">
              Subhag
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/earrings" className="nav-link">Earrings</Link>
            <Link to="/necklaces" className="nav-link">Necklaces</Link>
            <Link to="/bracelets" className="nav-link">Bracelets</Link>
            <Link to="/rings" className="nav-link">Rings</Link>
            <Link to="/collections" className="nav-link">Collections</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-pink-light hover:text-pink-dark">
              <Search size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-pink-light hover:text-pink-dark">
              <Heart size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-pink-light hover:text-pink-dark">
              <ShoppingCart size={20} />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white z-40 p-4">
            <div className="flex flex-col space-y-4 text-center">
              <Link to="/" className="text-lg py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/earrings" className="text-lg py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Earrings</Link>
              <Link to="/necklaces" className="text-lg py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Necklaces</Link>
              <Link to="/bracelets" className="text-lg py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Bracelets</Link>
              <Link to="/rings" className="text-lg py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Rings</Link>
              <Link to="/collections" className="text-lg py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Collections</Link>
              
              <div className="flex justify-center space-x-6 pt-4">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-pink-light hover:text-pink-dark">
                  <Search size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-pink-light hover:text-pink-dark">
                  <Heart size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-pink-light hover:text-pink-dark">
                  <ShoppingCart size={20} />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
