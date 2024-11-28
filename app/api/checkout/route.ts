
import { NextResponse } from 'next/server';
import Stripe from "stripe";

export async function POST(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return NextResponse.json({ message: 'POST method required' }, { status: 405 });
  }

  try {
    const body = await request.json();

    const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
      apiVersion: '2024-11-20.acacia',
    });

    const idsString = JSON.stringify(body.ids);

    const session = await stripe.checkout.sessions.create({
      success_url: 'http://localhost:3000/payments/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/payments/cancel',
      line_items: body.lineItems,
      mode: 'payment',
      metadata: {
        'ids': idsString,
      },
      billing_address_collection: 'required',
      invoice_creation: {'enabled': true,},
      shipping_address_collection: { 'allowed_countries': ['GB']}
      
    });

    return NextResponse.json({ session }, { status: 201 });

  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json({ message: 'An error occurred while processing your request.' }, { status: 500 });
  }
}

