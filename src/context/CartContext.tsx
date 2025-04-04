
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';
import { toast } from 'sonner';

interface CartItem {
  product: Product;
  quantity: number;
  size: number;
  color: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number, size: number, color: string) => void;
  removeFromCart: (id: string, size: number, color: string) => void;
  updateQuantity: (id: string, size: number, color: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to local storage when it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Calculate totals
    const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    setCartTotal(total);
    
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(count);
  }, [cart]);

  const findCartItemIndex = (id: string, size: number, color: string) => {
    return cart.findIndex(
      item => item.product.id === id && item.size === size && item.color === color
    );
  };

  const addToCart = (product: Product, quantity: number, size: number, color: string) => {
    const itemIndex = findCartItemIndex(product.id, size, color);

    if (itemIndex > -1) {
      // Product with same size and color already exists in cart, update quantity
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Add new item to cart
      setCart([...cart, { product, quantity, size, color }]);
    }
    
    toast.success('Added to cart', {
      description: `${product.name} - Size ${size} - ${color}`,
    });
  };

  const removeFromCart = (id: string, size: number, color: string) => {
    setCart(cart.filter(item => 
      !(item.product.id === id && item.size === size && item.color === color)
    ));
    toast.info('Item removed from cart');
  };

  const updateQuantity = (id: string, size: number, color: string, quantity: number) => {
    const itemIndex = findCartItemIndex(id, size, color);
    
    if (itemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity = Math.max(1, quantity); // Ensure quantity is at least 1
      setCart(updatedCart);
    }
  };

  const clearCart = () => {
    setCart([]);
    toast.info('Cart cleared');
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
