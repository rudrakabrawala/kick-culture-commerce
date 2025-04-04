
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, originalPrice, images, isNew, brand } = product;
  
  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Link to={`/product/${id}`} className="group">
      <div className="overflow-hidden rounded-lg relative bg-gray-100">
        <AspectRatio ratio={1 / 1}>
          <img
            src={images[0] || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </AspectRatio>
        
        {isNew && (
          <span className="absolute top-2 left-2 bg-black px-2 py-1 text-xs font-medium text-white rounded">
            New
          </span>
        )}
        
        {originalPrice && (
          <span className="absolute top-2 right-2 bg-red-500 px-2 py-1 text-xs font-medium text-white rounded">
            {discountPercentage}% OFF
          </span>
        )}
      </div>
      <div className="mt-3 space-y-1">
        <div className="flex justify-between">
          <h3 className="text-sm font-medium text-gray-700">{name}</h3>
          <div className="flex items-end gap-1">
            {originalPrice && (
              <span className="text-xs text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
            )}
            <span className="text-sm font-medium text-gray-900">${price.toFixed(2)}</span>
          </div>
        </div>
        <p className="text-xs text-gray-500">{brand}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
