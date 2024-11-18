import Stripe from "stripe";
import Image from "next/image";

type Product = Stripe.Product & {
  default_price: Stripe.Price;
};

export const revalidate = 60;

const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
  apiVersion: "2024-10-28.acacia",
});

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  let id: string | undefined;
  let product: Product | null = null;
  const urlInfo = (await params) || {};

  if (urlInfo) {
    id = urlInfo.id;
    console.log("type:", id);
  }
  try {
    if (!id) {
      throw new Error("Product ID is required");
    }

    const response = await stripe.products.retrieve(id, {
      expand: ["default_price"],
    });

    if (!response) {
      throw new Error("No products found");
    }

    product = {
      ...response,
      default_price: response.default_price as Stripe.Price,
    };
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <div>
        {product && product.images.length > 0 ? (
            <Image
              alt={`Product ${product.id}`}
              src={product.images[0]}
              className="size-full object-cover object-center lg:size-full"
              width={300}
              height={300}
            />
          ) : null } 
      <p>id: {id}</p>
      <p>name {product?.name}</p>
      <p>
        default_price: £
        {product?.default_price?.unit_amount
          ? Math.round(product.default_price.unit_amount / 100).toFixed(2)
          : "N/A"}
      </p>
      <p>Description: {product?.description}</p>
      <p></p>
    </div>
  );
}
