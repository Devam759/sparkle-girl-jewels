
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-pink/10 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-dancing font-bold text-pink-dark">Sparkle Girl Jewels</h3>
            <p className="text-gray-600">
              Handcrafted jewelry to make every girl feel special and beautiful.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-pink-dark transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-dark transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-dark transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/earrings" className="text-gray-600 hover:text-pink-dark transition-colors">Earrings</Link></li>
              <li><Link to="/necklaces" className="text-gray-600 hover:text-pink-dark transition-colors">Necklaces</Link></li>
              <li><Link to="/bracelets" className="text-gray-600 hover:text-pink-dark transition-colors">Bracelets</Link></li>
              <li><Link to="/rings" className="text-gray-600 hover:text-pink-dark transition-colors">Rings</Link></li>
              <li><Link to="/collections" className="text-gray-600 hover:text-pink-dark transition-colors">Collections</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-600 hover:text-pink-dark transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-pink-dark transition-colors">FAQs</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-pink-dark transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/size-guide" className="text-gray-600 hover:text-pink-dark transition-colors">Size Guide</Link></li>
              <li><Link to="/care" className="text-gray-600 hover:text-pink-dark transition-colors">Jewelry Care</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-pink-dark transition-colors">Our Story</Link></li>
              <li><Link to="/sustainability" className="text-gray-600 hover:text-pink-dark transition-colors">Sustainability</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-pink-dark transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-pink-dark transition-colors">Careers</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-pink-dark transition-colors">Terms & Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Sparkle Girl Jewels. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-pink" /> for girls who love to sparkle
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
