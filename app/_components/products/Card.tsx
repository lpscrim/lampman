import Image from "next/image";
import Stripe from "stripe";
import Link from "next/link";

type Product = Stripe.Product & {
  default_price: Stripe.Price;
};

export default function Card({ product }: { product: Product }) {
  return (
    <div key={product.id} className="group relative">
      <Link href={`/shop/${product.id}`}>
        <div className="">
          <div className="relative aspect-[3/4] overflow-hidden bg-background lg:aspect-auto group-hover:opacity-75 lg:h-80">
            {product.images.length > 0 ? (
              <Image
                alt={`Product ${product.id}`}
                src={product.images[0]}
                className="rounded-md object-cover object-center"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : null}
          </div>
          <div className="relative mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-text2h">
                <span aria-hidden="true" className="absolute inset-0"/>
                {product.name}
              </h3>
              <p className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out  mt-1 text-sm text-text3 capitalize">{product.metadata.tag}</p>
            </div>
            <p className="text-sm font-medium text-text2h">
              £
              {product.default_price?.unit_amount
                ? Math.round(product.default_price.unit_amount / 100).toFixed(2)
                : "N/A"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
