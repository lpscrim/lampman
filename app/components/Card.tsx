import Image from "next/image";
import Stripe from "stripe";

type Product = Stripe.Product & {
    default_price: Stripe.Price;
  };

export default function Card({ product } : { product : Product }) {
  return (
    <div key={product.id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        {product.images.length > 0 ?     
            <Image
            alt={`Product ${product.id}`}
            src={product.images[0]}
            className="size-full object-cover object-center lg:size-full"
            width={300}
            height={300}
            priority={true}
            />
        : null}
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={product.images[0]}> {/*Change to product page*/}
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.metadata.size}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
            {product.default_price?.unit_amount
            ? Math.round(product.default_price.unit_amount / 100).toFixed(2)
            : "N/A"}
        </p>
      </div>
    </div>
  );
}

