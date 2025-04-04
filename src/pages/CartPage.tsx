
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '@/components/ui/button';
import StripeCheckout from '../components/StripeCheckout';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <ShoppingBag size={48} className="mx-auto mb-4 text-gray-400" />
          <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
          <Button asChild>
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  const shippingCost = cartTotal >= 100 ? 0 : 5;
  const totalWithShipping = cartTotal + shippingCost;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex justify-between items-center pb-2 border-b">
            <h2 className="font-medium">Product Details</h2>
            <Button 
              variant="ghost" 
              className="text-sm text-red-500 hover:text-red-700" 
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </div>
          
          {cart.map((item, index) => (
            <div key={`${item.product.id}-${item.size}-${item.color}-${index}`} className="flex border-b pb-4">
              <div className="w-24 h-24 bg-gray-100 rounded mr-4 overflow-hidden">
                <img 
                  src={item.product.images[0]} 
                  alt={item.product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{item.product.name}</h3>
                    <p className="text-sm text-gray-500">{item.product.brand}</p>
                    <div className="text-sm mt-1">
                      <span className="text-gray-700">Size: {item.size}</span>
                      <span className="mx-2">|</span>
                      <span className="text-gray-700">Color: {item.color}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${item.product.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2 justify-end">
                      <button 
                        onClick={() => updateQuantity(
                          item.product.id, 
                          item.size, 
                          item.color, 
                          item.quantity - 1
                        )}
                        className="p-1 border border-gray-300 rounded-l w-8"
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(
                          item.product.id, 
                          item.size, 
                          item.color, 
                          parseInt(e.target.value) || 1
                        )}
                        className="w-10 text-center border-t border-b border-gray-300 py-1"
                      />
                      <button 
                        onClick={() => updateQuantity(
                          item.product.id, 
                          item.size, 
                          item.color, 
                          item.quantity + 1
                        )}
                        className="p-1 border border-gray-300 rounded-r w-8"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-2">
                  <button 
                    onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                    className="text-sm text-red-500 hover:text-red-700 flex items-center"
                  >
                    <Trash2 size={14} className="mr-1" />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="pt-4">
            <Button 
              variant="outline" 
              asChild 
              className="flex items-center"
            >
              <Link to="/products">
                <ChevronLeft size={16} />
                <span>Continue Shopping</span>
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span>{cartTotal >= 100 ? 'Free' : '$5.00'}</span>
            </div>
            {cartTotal < 100 && (
              <div className="text-sm text-gray-500 mt-1">
                Add ${(100 - cartTotal).toFixed(2)} more to qualify for free shipping
              </div>
            )}
          </div>
          
          <div className="border-t border-gray-300 pt-4 mb-6">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${totalWithShipping.toFixed(2)}</span>
            </div>
          </div>
          
          <StripeCheckout amount={totalWithShipping} />
          
          <div className="text-xs text-center text-gray-500 mt-4">
            Taxes calculated at checkout. Shipping calculated based on delivery location.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
