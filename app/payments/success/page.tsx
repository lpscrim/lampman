import Link from "next/link";
import Stripe from "stripe";
import ClearCart from "@/app/_components/cart/ClearCart";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
  apiVersion: "2024-11-20.acacia",
});

type Address = Stripe.Address;
type Invoice = Stripe.Invoice;
type PaymentIntent = Stripe.PaymentIntent; 

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

export default async function PaymentSuccess(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;

  if (!searchParams || !searchParams.session_id) {
    throw new Error("No valid session ID provided");
  }

  const id = searchParams.session_id;

  console.log("id:", id);
  let lineItemIds: { id: string }[] = [];
  let idsArray: string[] = [];
  let amount: number | null;
  let email: string | null | undefined;
  let customerId: string | null;
  let address: Address | undefined;
  let created: number | undefined;
  let paymentId: string | PaymentIntent | null;
  let invoice: string | Invoice | null;
  let invoiceNum: string | null | undefined;
  let invoiceName: string | null | undefined;
 

  try {
    const session = await stripe.checkout.sessions.retrieve(String(id), {expand:['invoice']});

    session.metadata ? (lineItemIds = JSON.parse(session.metadata.ids)) : "";
    idsArray = lineItemIds.map((item) => item.id);

    amount = session.amount_total;
    customerId = String(session.customer);
    address = session.shipping_details?.address;
    created = session.created;
    paymentId = session.payment_intent;
    invoice = session?.invoice ? (typeof session.invoice === 'string' ? null : session.invoice) : null;
    invoiceNum = invoice?.number;
    invoiceName = invoice?.customer_name;
    email = invoice?.customer_email;
    

    for (const productId of idsArray) {
      await updateProductInDatabase(productId);
    }
  } catch (error) {
    throw new Error("An error occurred while processing your request.");
  }

  console.log(String(idsArray) + String(lineItemIds) + id);
  const date = new Date(created * 1000).toLocaleDateString('EN-UK')
 

  return (
    <div>
      <section className="border-t-2 border-b-2 border-background bg-secondary py-8 antialiased md:py-16">
        <div className="mx-auto max-w-2xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-text1 sm:text-2xl mb-2">
            Thanks for your order!
          </h2>
          <p className="text-text1h mb-6 md:mb-8">
            Your order{" "} <span className="text-logo">{String(invoiceNum)}</span> {" "}
            
            will be processed within 24 hours during working days. We will
            notify you by email once your order has been shipped.
          </p>
          <div className="space-y-4 sm:space-y-2 rounded-lg border border-text3 p-6 bg-secondaryh mb-6 md:mb-8">
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-text1h ">
                Date of order
              </dt>
              <dd className="font-medium text-text1 sm:text-end">
                {date}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-text1h">
                Customer ID
              </dt>
              <dd className="font-medium text-text1 sm:text-end">
                {customerId}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-text1h">
                Payment ID
              </dt>
              <dd className="font-medium text-text1 sm:text-end">
                {String(paymentId)}
              </dd>
            </dl>
            <dl className="sm:flex pt-8 items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-text1h">
                Customer Name
              </dt>
              <dd className="capitalize font-medium text-text1 sm:text-end">
                {invoiceName}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-text1h">
                Address
              </dt>
              <dd className="font-medium py-4 text-text1 sm:text-end">
                {address?.line1}<br></br>
                {address?.line2}<br></br>
                {address?.city}<br></br>
                {address?.postal_code}<br></br>
                {address?.country}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-text1h">
                Email
              </dt>
              <dd className="font-medium text-text1 sm:text-end">
                {String(email)}
              </dd>
            </dl>
            <dl className="sm:flex items-center py-8 justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-text1h">
                Total
              </dt>
              <dd className="font-medium text-text1 sm:text-end">
                £{amount ? Math.round(amount/ 100 ).toFixed(2) : ''}
              </dd>
            </dl>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="py-2.5 px-5 text-sm font-bold text-secondary focus:outline-none bg-primary rounded-lg border focus:z-10 focus:ring-4 focus:ring-text1  border-text2 hover:primaryh"
            >
              Return To Shop
            </Link>
          </div>
        </div>
      </section>

      <ClearCart />
    </div>
  );
}
