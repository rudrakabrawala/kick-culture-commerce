
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, originalPrice, images, isNew, brand } = product;
  
  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Link to={`/product/${id}`} className="group">
      <div className="overflow-hidden rounded-lg aspect-square relative bg-gray-100">
        <img
          src={images[0]}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        
        {isNew && (
          <span className="absolute top-2 left-2 bg-black px-2 py-1 text-xs font-medium text-white">
            New
          </span>
        )}
        
        {originalPrice && (
          <span className="absolute top-2 right-2 bg-secondary px-2 py-1 text-xs font-medium text-white">
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
