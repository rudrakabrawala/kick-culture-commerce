import { toast } from 'sonner';

// Define the Razorpay options interface
interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image?: string;
  order_id: string;
  handler: (response: any) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: {
    [key: string]: string;
  };
  theme?: {
    color: string;
  };
}

// Initialize Razorpay payment
export const initializeRazorpayPayment = async (
  amount: number,
  orderId: string,
  onSuccess: (paymentId: string, orderId: string, signature: string) => void
) => {
  // Load Razorpay script if not already loaded
  if (!(window as any).Razorpay) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = resolve;
      document.head.appendChild(script);
    }).then(() => {
      createRazorpayOrder(amount, orderId, onSuccess);
    });
  } else {
    createRazorpayOrder(amount, orderId, onSuccess);
  }
};

// Create Razorpay order
const createRazorpayOrder = (
  amount: number,
  orderId: string,
  onSuccess: (paymentId: string, orderId: string, signature: string) => void
) => {
  // In a real application, you would fetch the order ID from your server
  // For demo purposes, we're using the provided orderId
  
  // Amount should be in the smallest currency unit (paise for INR)
  const amountInSmallestUnit = amount * 100;
  
  const options: RazorpayOptions = {
    key: 'rzp_test_Bi9C65ucH9IQwO', // Updated with your Razorpay test key
    amount: amountInSmallestUnit,
    currency: 'INR', // Change as needed
    name: 'Sneaker Shop',
    description: 'Purchase of sneakers',
    image: '/path/to/your/logo.png', // Update with the correct path to your logo
    order_id: orderId,
    handler: function (response) {
      const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;
      onSuccess(
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature
      );
    },
    prefill: {
      name: '',
      email: '',
      contact: ''
    },
    notes: {
      order_id: orderId
    },
    theme: {
      color: '#2563eb'
    }
  };

  try {
    const razorpayInstance = new (window as any).Razorpay(options);
    razorpayInstance.open();
  } catch (error) {
    console.error('Razorpay error:', error);
    toast.error('Payment initialization failed. Please try again.');
  }
};
