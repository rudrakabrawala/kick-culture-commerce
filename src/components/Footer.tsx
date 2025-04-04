
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">KICKZ</h3>
            <p className="text-sm text-gray-300">
              The ultimate destination for sneaker enthusiasts. Shop the latest styles and classic kicks.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 text-sm hover:text-white transition-colors">
                  All Sneakers
                </Link>
              </li>
              <li>
                <Link to="/category/running" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Running Shoes
                </Link>
              </li>
              <li>
                <Link to="/category/basketball" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Basketball Shoes
                </Link>
              </li>
              <li>
                <Link to="/category/lifestyle" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Lifestyle Shoes
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-gray-300 text-sm hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 text-sm hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail size={16} />
                <span>support@kickz.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
            <div className="pt-4">
              <h4 className="text-sm font-medium mb-2">Subscribe to our newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 text-gray-900 bg-white rounded-l-md w-full focus:outline-none text-sm"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-secondary text-white rounded-r-md hover:bg-secondary/90 transition-colors text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} KICKZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
