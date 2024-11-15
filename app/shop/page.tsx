import Stripe from "stripe";
import ProductList from "@/components/ProductList";

type Product = Stripe.Product & {
  default_price: Stripe.Price;
};

export const revalidate = 60;

const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
  apiVersion: "2024-10-28.acacia",
});

let products: Product[] = [];

  try {
    const response = await stripe.products.list({
      limit: 10,
      expand: ["data.default_price"],
    });

    if (response.data.length === 0) {
      throw new Error("No products found");
    }

    const activeProducts = response.data.filter((product) => {
      return product.active;
    });
    const finalProducts = activeProducts.filter((product) => {
      return Number(product.metadata.stock) > 0
    })
    //Add dynamic filter option passed as props using URL search PArams to pass between layers and filter based on metadata.
  

    products = finalProducts.map((product) => ({
      ...product,
      default_price: product.default_price as Stripe.Price,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
  }



export default function Shop() {


    return (
      <div>
        <p>Shop</p>
        
        <ProductList products={products} />
        
      </div>
    );
  }