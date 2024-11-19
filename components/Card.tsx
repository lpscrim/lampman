import Image from "next/image";
import Stripe from "stripe";
import Link from "next/link";

type Product = Stripe.Product & {
  default_price: Stripe.Price;
};

export default function Card({ product }: { product: Product }) {
  return (
    <div key={product.id} className="group relative">
      <Link href={`/shop/${product.id}`} >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-background lg:aspect-none group-hover:opacity-75 lg:h-80">
          {product.images.length > 0 ? (
            <Image
              alt={`Product ${product.id}`}
              src={product.images[0]}
              className="size-full object-cover object-center lg:size-full"
              width={300}
              height={300}
            />
          ) : null}
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-text2h">

                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}

            </h3>
            <p className="mt-1 text-sm text-text3">{product.metadata.size}</p>
          </div>
          <p className="text-sm font-medium text-text2h">
            {product.default_price?.unit_amount
              ? Math.round(product.default_price.unit_amount / 100).toFixed(2)
              : "N/A"}
          </p>
        </div>
      </Link>
    </div>
  );
}
