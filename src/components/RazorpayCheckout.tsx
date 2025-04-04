
import React from 'react';
import { Button } from '@/components/ui/button';
import { initializeRazorpayPayment } from '../services/razorpay';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface RazorpayCheckoutProps {
  amount: number;
}

const RazorpayCheckout: React.FC<RazorpayCheckoutProps> = ({ amount }) => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const handlePayment = () => {
    // In a real app, you would first create an order on your backend
    // For this demo, we'll create a dummy order ID
    const orderId = 'order_' + Math.random().toString(36).substring(2, 15);
    
    initializeRazorpayPayment(amount, orderId, (paymentId, orderId, signature) => {
      // Handle successful payment
      toast.success('Payment Successful!', {
        description: `Payment ID: ${paymentId.substring(0, 10)}...`,
      });
      
      // In a real app, you would verify this payment on your backend
      console.log('Payment successful', { paymentId, orderId, signature });
      
      // Clear the cart and redirect
      clearCart();
      navigate('/');
    });
  };

  return (
    <Button 
      onClick={handlePayment} 
      className="w-full"
    >
      Pay with Razorpay
    </Button>
  );
};

export default RazorpayCheckout;
