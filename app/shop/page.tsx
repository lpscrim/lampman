import Stripe from "stripe";
import ShopNav from "@/components/ShopNav";
import ProductList from "@/components/ProductList";

type Product = Stripe.Product & {
  default_price: Stripe.Price;
};

export const revalidate = 60;

const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
  apiVersion: "2024-10-28.acacia",
});

export default async function Shop({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) {

  let products: Product[] = [];
  let type: string | undefined;
  
  if (searchParams) {
    type = searchParams.type;
    console.log('type:', type);
  }

  try {
    const response = await stripe.products.list({
      limit: 10,
      expand: ["data.default_price"],
    });

    if (response.data.length === 0) {
      throw new Error("No products found");
    }

    const activeProducts = response.data.filter((product) => product.active);
    let finalProducts = activeProducts.filter((product) => 
      Number(product.metadata.stock) > 0
    );
    //filtering logic

    if (type === 'lamps') {
      finalProducts = finalProducts.filter((product) => product.metadata.type === 'lamp')
    } else if (type === 'curios') {
      finalProducts = finalProducts.filter((product) => product.metadata.type === 'other')
    }

    products = finalProducts.map((product) => ({
      ...product,
      default_price: product.default_price as Stripe.Price,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
   
  }



  return (
    <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-2">
      <p className=" text-center py-4 border-b-2 border-t-2 border-secondary text-3xl font-bold tracking-tight text-text2">
        Shop
      </p>
      <ShopNav />
      <ProductList products={products} type={type}/>
    </div>
  );
}
