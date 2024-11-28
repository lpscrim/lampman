import Link from "next/link";
import Stripe from "stripe";
import ClearCart from "@/app/_components/cart/ClearCart";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
  apiVersion: "2024-11-20.acacia",
});

type Address = Stripe.Address;

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
  let email: string | null;
  let payment: string[];
  let customerId: string | null;
  let address: Address | undefined;

  try {
    const session = await stripe.checkout.sessions.retrieve(String(id));

    session.metadata ? (lineItemIds = JSON.parse(session.metadata.ids)) : "";
    idsArray = lineItemIds.map((item) => item.id);

    amount = session.amount_total;
    email = session.customer_email;
    payment = session.payment_method_types;
    customerId = String(session.customer);
    address = session.shipping_details?.address;

    for (const productId of idsArray) {
      await updateProductInDatabase(productId);
    }
  } catch (error) {
    throw new Error("An error occurred while processing your request.");
  }

  console.log(String(idsArray) + String(lineItemIds) + id);

  const date = new Date()
  

  return (
    <div>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-2xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">
            Thanks for your order!
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">
            Your order{" "}
            {id}
            will be processed within 24 hours during working days. We will
            notify you by email once your order has been shipped.
          </p>
          <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                Date
              </dt>
              <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                {String(date)}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                Payment Method
              </dt>
              <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                {payment.toString()}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                customer ID
              </dt>
              <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                {customerId}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                Address
              </dt>
              <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                {JSON.stringify(address)}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                Email
              </dt>
              <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                {String(email)}
              </dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
                Total
              </dt>
              <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                {amount}
              </dd>
            </dl>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Return to shopping
            </Link>
          </div>
        </div>
      </section>

      <ClearCart />
    </div>
  );
}
