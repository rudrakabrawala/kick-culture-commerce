
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key
// Replace with your own publishable key from the Stripe dashboard
export const stripePromise = loadStripe('pk_test_YourPublishableKeyHere');

// Define the payment options interface
interface StripePaymentOptions {
  amount: number;
  currency: string;
  description: string;
  customerEmail?: string;
}

// Initialize Stripe payment
export const initializeStripePayment = async (options: StripePaymentOptions) => {
  try {
    // In a real app, you would call your backend to create a payment intent
    // For this demo, we're mocking it with a direct Stripe Checkout
    const stripe = await stripePromise;
    
    if (!stripe) {
      throw new Error('Stripe failed to initialize');
    }
    
    // Redirect to Stripe Checkout
    // In a real implementation, you would create a session on your server
    // and redirect to that session URL
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price_data: {
            currency: options.currency,
            product_data: {
              name: options.description,
            },
            unit_amount: options.amount * 100, // Stripe uses cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
      customerEmail: options.customerEmail,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error('Stripe payment error:', error);
    throw error;
  }
};
