import Link from "next/link";
import Stripe from "stripe";

export default async function PaymentSuccess({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) {
  if (!searchParams || !searchParams.session_id) {
    throw new Error("No valid session ID provided");
  }

  const id = searchParams.session_id;

  console.log("id:", id);
  let lineItemIds: {id: string}[]  = [];
  let idsArray: string[] = [];


  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
      apiVersion: "2024-11-20.acacia",
    });

    const session = await stripe.checkout.sessions.retrieve(id);


        //@ts-expect-error - efewf
        lineItemIds = JSON.parse(session.metadata.ids);
        idsArray = lineItemIds.map(item => item.id);


        
   
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
    </div>
  );
}
