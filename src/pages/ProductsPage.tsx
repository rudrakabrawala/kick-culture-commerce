
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, ChevronDown, ChevronUp, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, brands } from '../data/products';
import { Button } from '@/components/ui/button';

const ProductsPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [sortOption, setSortOption] = useState('featured');
  
  const availableSizes = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12];

  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const toggleSize = (size: number) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  useEffect(() => {
    let filtered = [...products];
    
    // Filter by category if provided
    if (categoryId) {
      filtered = filtered.filter(product => 
        product.category.toLowerCase() === categoryId.toLowerCase()
      );
    }
    
    // Apply brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => 
        selectedBrands.includes(product.brand)
      );
    }
    
    // Apply size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product => 
        product.sizes.some(size => selectedSizes.includes(size))
      );
    }
    
    // Apply price range filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default: // 'featured'
        filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(filtered);
  }, [categoryId, selectedBrands, selectedSizes, priceRange, sortOption]);

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedSizes([]);
    setPriceRange([0, 300]);
    setSortOption('featured');
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          {categoryId ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) : 'All Sneakers'}
        </h1>
        <p className="text-gray-500 mt-1">
          {filteredProducts.length} products
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Mobile filter button */}
        <div className="lg:hidden mb-4">
          <Button 
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            <Filter size={16} />
            <span>Filters</span>
            {filtersOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Button>
        </div>

        {/* Filters sidebar */}
        <div className={`${filtersOpen ? 'block' : 'hidden'} lg:block lg:w-1/4 space-y-6`}>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Filters</h3>
            <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-xs">
              Clear All
            </Button>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="font-medium mb-3">Price Range</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">${priceRange[0]}</span>
                <span className="text-sm">${priceRange[1]}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="300" 
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>

          {/* Brand Filter */}
          <div>
            <h4 className="font-medium mb-3">Brand</h4>
            <div className="space-y-2">
              {brands.map(brand => (
                <label key={brand.id} className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={selectedBrands.includes(brand.name)}
                    onChange={() => toggleBrand(brand.name)}
                    className="rounded"
                  />
                  <span className="text-sm">{brand.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div>
            <h4 className="font-medium mb-3">Size</h4>
            <div className="grid grid-cols-3 gap-2">
              {availableSizes.map(size => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`
                    text-sm border rounded py-1 px-2 transition-colors
                    ${selectedSizes.includes(size) 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'}
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product grid */}
        <div className="lg:w-3/4">
          {/* Sort options */}
          <div className="mb-6 flex justify-end">
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm font-medium">Sort by:</label>
              <select
                id="sort"
                className="border border-gray-300 rounded p-1 text-sm"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </div>

          {/* Products */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">No products found matching your criteria.</p>
              <Button variant="outline" onClick={clearAllFilters} className="mt-4">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
