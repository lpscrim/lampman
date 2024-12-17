import Stripe from "stripe";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { updateProductInDatabase } from "@/app/payments/success/page";

const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
  apiVersion: "2024-11-20.acacia",
});

export async function POST(request: NextRequest) {
  const sig = request.headers.get("stripe-signature") || "";
  const body = await request.text();

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET ?? ""
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json(
        { error: `Webhook Error: ${err.message}` },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { error: "An unexpected error occurred" },
        { status: 500 }
      );
    }
  }

  let lineItemIds: { id: string }[] = [];
  let idsArray: string[] = [];

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session =  event.data.object;
      console.log("Checkout was successful!");
      console.log("session:" + session);

      if (session.metadata && session.metadata.ids) {
        console.log("ids:" + session.metadata.ids);
        lineItemIds = JSON.parse(session.metadata.ids);
        idsArray = lineItemIds.map((item) => item.id);
        console.log(idsArray);

        for (const productId of idsArray) {
          await updateProductInDatabase(productId);
        }
      } 

      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
