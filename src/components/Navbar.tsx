
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">KICKZ</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-sm font-medium text-gray-700 hover:text-secondary transition-colors">
              All Sneakers
            </Link>
            <Link to="/category/running" className="text-sm font-medium text-gray-700 hover:text-secondary transition-colors">
              Running
            </Link>
            <Link to="/category/basketball" className="text-sm font-medium text-gray-700 hover:text-secondary transition-colors">
              Basketball
            </Link>
            <Link to="/category/lifestyle" className="text-sm font-medium text-gray-700 hover:text-secondary transition-colors">
              Lifestyle
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/account">
              <Button variant="ghost" size="icon" aria-label="Account">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" aria-label="Cart">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Menu">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="container mx-auto px-4 py-3 space-y-2">
            <Link 
              to="/products" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              All Sneakers
            </Link>
            <Link 
              to="/category/running" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Running
            </Link>
            <Link 
              to="/category/basketball" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Basketball
            </Link>
            <Link 
              to="/category/lifestyle" 
              className="block py-2 text-base font-medium text-gray-700 hover:text-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Lifestyle
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
