"use client"
import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

//import { loadStripe } from '@stripe/stripe-js';
//const stripePromise = loadStripe( ?? '');

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_PUBLIC as string}
      successUrl="/payments/success"
      cancelUrl="/payments/fail"
      currency="GBP"
      allowedCountries={['GB']}
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-EN"
    >
      {children}
    </USCProvider>
  );
}
