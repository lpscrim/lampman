import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
  apiVersion: "2024-10-28.acacia",
});

export async function GET() {
  console.log('API route called for /api/products');
  console.log(`Stripe${process.env.STRIPE_SECRET}`);
  try {
    const stripeRes = await stripe.products.list({
      limit: 10,
    });

    if (stripeRes.data.length === 0) {
      return NextResponse.json({ error: "No products found" }, { status: 404 });
    }

    return NextResponse.json(stripeRes, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to retrieve products" },
      { status: 500 }
    );
  }
}
