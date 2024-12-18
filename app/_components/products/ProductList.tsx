import Card from "./Card";
import Stripe from "stripe";

type Product = Stripe.Product & {
  default_price: Stripe.Price;
};

const ProductList = async ({
  products,
  type,
}: {
  products: Product[];
  type: string | string[] | undefined;
}) => {
  return (
    <div className="mt-14 pb-24 sm:mt-0">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="hidden mb-6  sm:block capitalize text-2xl font-bold tracking-tight text-text2">
          {type ? type : 'All'}
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
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
