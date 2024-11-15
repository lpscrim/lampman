import Card from "./Card";
import Stripe from "stripe";

type Product = Stripe.Product & {
  default_price: Stripe.Price;
};

export const revalidate = 60;

const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
  apiVersion: "2024-10-28.acacia",
});

const ProductList = async () => {
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

  console.log(products);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Product List
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products && products.length > 0 ? (
            products.map((product) => (
              <Card key={product.id} product={product} />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
