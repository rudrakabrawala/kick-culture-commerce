
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Button } from '@/components/ui/button';

const HomePage: React.FC = () => {
  const featuredProducts = products.filter(product => product.isFeatured);
  const newArrivals = products.filter(product => product.isNew);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-100 flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">Step Into <span className="text-secondary">Greatness</span></h1>
              <p className="text-lg text-gray-600">Discover the perfect blend of style and performance with our premium selection of sneakers.</p>
              <div className="space-x-4">
                <Button asChild className="bg-primary text-white hover:bg-primary/90">
                  <Link to="/products">Shop Now</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/new-arrivals">New Arrivals</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/placeholder.svg" 
                alt="Featured Sneaker" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <Link to="/products" className="text-secondary hover:underline flex items-center gap-1">
              <span>View all</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map(category => (
              <Link 
                key={category.id} 
                to={`/category/${category.id}`}
                className="relative overflow-hidden rounded-lg group aspect-square"
              >
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white font-bold text-xl z-10">{category.name}</h3>
                </div>
                <div className="h-full w-full bg-gray-100 transition-transform duration-300 group-hover:scale-110"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link to="/products" className="text-secondary hover:underline flex items-center gap-1">
              <span>View all</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">New Arrivals</h2>
            <Link to="/new-arrivals" className="text-secondary hover:underline flex items-center gap-1">
              <span>View all</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Loyalty Program</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get exclusive deals, early access to new releases, and earn points with every purchase.
          </p>
          <Button className="bg-white text-secondary hover:bg-gray-100">
            Sign Up Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
