import Stripe from "stripe";

type Product = Stripe.Product & {
  default_price: Stripe.Price;
};

export default function Checkout({ products }: { products: Product[] }) {
  const checkout = async () => {
    const lineItems = products?.map((product) => {
      return {
        price: product.default_price.id,
        quantity: 1,
      };
    });

    const ids = products?.map((product) => {
      return {
        id : product.id,
      }
    })

    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ lineItems: lineItems, ids: ids }),
    });

    const b = await res.json();
    window.location.href = b.session.url;
  };

  return (
    <>
      <button
        className="px-4 py-2 bg-secondary text-primary text-xs font-bold uppercase rounded hover:bg-secondaryh focus:outline-none focus:bg-text2"
        onClick={checkout}
      >
        Checkout
      </button>
    </>
  );
}
