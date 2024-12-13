import Stripe from "stripe";
import ShopNav from "@/app/_components/navigation/ShopNav";
import ProductList from "@/app/_components/products/ProductList";
import { Suspense } from "react";
import Loading from "../loading";

type Product = Stripe.Product & {
  default_price: Stripe.Price;
};
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export const revalidate = 60;

const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
  apiVersion: "2024-11-20.acacia",
});

export default async function Shop(props: { searchParams: SearchParams }) {
  let products: Product[] = [];
  let type: string | string[] | undefined = '';

  const searchParams = await props.searchParams;

  
    searchParams ? type = searchParams.type : type = '';
    console.log("type:", type);
 

  try {
    const response = await stripe.products.list({
      limit: 10,
      expand: ["data.default_price"],
    });

    if (response.data.length === 0) {
      throw new Error("No products found");
    }

    const activeProducts = response.data.filter((product) => product.active);
    let finalProducts = activeProducts.filter(
      (product) => Number(product.metadata.stock) > 0
    );

    if (type === "lamps") {
      finalProducts = finalProducts.filter(
        (product) => product.metadata.type === "lamp"
      );
    } else if (type === "curios") {
      finalProducts = finalProducts.filter(
        (product) => product.metadata.type === "other"
      );
    }

    products = finalProducts.map((product) => ({
      ...product,
      default_price: product.default_price as Stripe.Price,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <div className="min-h-svh mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-2">
      <h2 className=" text-center py-4 border-b-2 border-t-2 border-secondary text-3xl font-bold tracking-tight text-text2">
        Shop
      </h2>
      <ShopNav />
      <Suspense fallback={<Loading />}>
        <ProductList products={products} type={type} />
      </Suspense>
    </div>
  );
}
