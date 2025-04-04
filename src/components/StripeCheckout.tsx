
import React from 'react';
import { Button } from '@/components/ui/button';
import { initializeStripePayment } from '../services/stripe';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface StripeCheckoutProps {
  amount: number;
}

const StripeCheckout: React.FC<StripeCheckoutProps> = ({ amount }) => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const handlePayment = async () => {
    try {
      await initializeStripePayment({
        amount: amount,
        currency: 'usd',
        description: 'Sneaker Purchase',
      });
      
      // Note: In a real implementation, this would happen after the
      // user returns from the successful payment, not immediately
      
      // The success handling would be in a separate component that
      // handles the /success route
    } catch (error) {
      toast.error('Payment failed', {
        description: error instanceof Error ? error.message : 'Unknown error occurred',
      });
    }
  };

  return (
    <Button 
      onClick={handlePayment} 
      className="w-full"
    >
      Pay with Stripe
    </Button>
  );
};

export default StripeCheckout;
