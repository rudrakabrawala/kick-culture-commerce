
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import { Star, Truck, RotateCcw, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === productId);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  
  // Find similar products (same category)
  const similarProducts = products
    .filter(p => p.id !== productId && p.category === product?.category)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-6">Sorry, the product you are looking for does not exist.</p>
        <Button onClick={() => navigate('/products')}>
          Continue Shopping
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      return; // Don't add to cart if size or color is not selected
    }
    
    addToCart(product, quantity, selectedSize, selectedColor);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-6 text-gray-500">
        <button onClick={() => navigate('/')} className="hover:text-gray-700">Home</button>
        <ChevronRight size={14} className="mx-1" />
        <button onClick={() => navigate('/products')} className="hover:text-gray-700">Products</button>
        <ChevronRight size={14} className="mx-1" />
        <button onClick={() => navigate(`/category/${product.category.toLowerCase()}`)} className="hover:text-gray-700">
          {product.category}
        </button>
        <ChevronRight size={14} className="mx-1" />
        <span className="text-gray-900 font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto py-2">
            {product.images.map((image, index) => (
              <button 
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded border-2 overflow-hidden flex-shrink-0 ${
                  selectedImage === index ? 'border-secondary' : 'border-transparent'
                }`}
              >
                <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold mb-1">{product.name}</h1>
                <p className="text-gray-500">{product.brand}</p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star 
                      key={index}
                      size={16}
                      className={index < Math.floor(product.rating || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">
                  ({product.rating})
                </span>
              </div>
            </div>

            <div className="mt-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                )}
                {product.originalPrice && (
                  <span className="bg-secondary/10 text-secondary text-sm px-2 py-0.5 rounded">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>
          </div>

          {/* Size Selection */}
          <div>
            <div className="flex justify-between mb-2">
              <h3 className="font-medium">Select Size</h3>
              <button className="text-secondary text-sm hover:underline">Size Guide</button>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`
                    border rounded py-2 px-3 transition-colors
                    ${selectedSize === size 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'}
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
            {!selectedSize && <p className="text-red-500 text-xs mt-1">Please select a size</p>}
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="font-medium mb-2">Select Color</h3>
            <div className="flex gap-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`
                    border-2 rounded-full h-8 w-8 flex items-center justify-center
                    ${selectedColor === color ? 'border-secondary' : 'border-transparent'}
                  `}
                  title={color}
                >
                  <span 
                    className="h-6 w-6 rounded-full" 
                    style={{ backgroundColor: color.toLowerCase() }} 
                  />
                </button>
              ))}
            </div>
            {!selectedColor && <p className="text-red-500 text-xs mt-1">Please select a color</p>}
          </div>

          {/* Quantity Selection */}
          <div>
            <h3 className="font-medium mb-2">Quantity</h3>
            <div className="flex items-center border border-gray-300 rounded w-32">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border-r"
              >
                -
              </button>
              <input 
                type="number" 
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full text-center py-1 focus:outline-none"
              />
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border-l"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="pt-4">
            <Button 
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor}
              className="w-full py-6"
            >
              Add to Cart
            </Button>
          </div>

          {/* Shipping Information */}
          <div className="border-t border-gray-200 pt-6 space-y-3">
            <div className="flex items-center gap-2">
              <Truck size={18} />
              <span className="text-sm">Free shipping on orders over $100</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw size={18} />
              <span className="text-sm">Free returns within 30 days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {similarProducts.map(similarProduct => (
            <ProductCard key={similarProduct.id} product={similarProduct} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
