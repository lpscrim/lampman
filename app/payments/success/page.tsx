import Link from "next/link";
import Stripe from "stripe";
import ClearCart from "@/app/_components/cart/ClearCart";


const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
  apiVersion: "2024-11-20.acacia",
});

async function updateProductInDatabase(productId: string) {
  try {
    await stripe.products.update(productId, {
     // metadata: {
     //   stock: "0",
     // },
     active: false,
    });
    console.log(`Product ${productId} updated successfully`);

    
  } catch (error) {
    console.error(`Error updating product ${productId}:`, error);
    throw new Error(`Failed to update product ${productId}`);
  }
}

export default async function PaymentSuccess({
  searchParams,
}: {
  searchParams?:  Promise<{session_id: string}>;
}) {
  if (!searchParams || !(await searchParams).session_id) {
    throw new Error("No valid session ID provided");
  }

  const id =  (await searchParams).session_id;

  console.log("id:", id);
  let lineItemIds: { id: string }[] = [];
  let idsArray: string[] = [];

  try {
    const session = await stripe.checkout.sessions.retrieve(String(id));

    session.metadata ? (lineItemIds = JSON.parse(session.metadata.ids)) : "";
    idsArray = lineItemIds.map((item) => item.id);

    for (const productId of idsArray) {
      await updateProductInDatabase(productId);
    }


  } catch (error) {
    throw new Error("An error occurred while processing your request.");
  }

  return (
    <div>
      <p>success</p>
      <p>{id}</p>
      <p>{String(lineItemIds)}</p>
      <p>{String(idsArray)}</p>
      <Link href="/">Home</Link>
      <ClearCart />
    </div>
  );
}
