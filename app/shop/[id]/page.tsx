import Stripe from "stripe";
import AddButton from "@/app/_components/products/AddButton";
import Link from "next/link";
import ImageGallery from "@/app/_components/products/ImageGallery";

type Product = Stripe.Product & {
  default_price: Stripe.Price;
};

export const revalidate = 60;

const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
  apiVersion: "2024-11-20.acacia",
});

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  let id: string | undefined;
  let product: Product | null = null;
  const urlInfo = (await params) || {};

  if (urlInfo) {
    id = urlInfo.id;
    //console.log("type:", id);
  }
  try {
    if (!id) {
      throw new Error("Product ID is required");
    }

    const response = await stripe.products.retrieve(id, {
      expand: ["default_price"],
    });

    if (!response.active || !(Number(response.metadata.stock) > 0)) {
      throw new Error("Product has sold out!");
    }

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
    <>
      {product ? (
        <div className="md:flex items-start justify-center py-8 xl:px-0 md:px-6 px-4">
          <ImageGallery product={product}/>
          <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            <div className="border-b border-text3 pb-6">
              <h1
                className="
                    text-2xl
                    font-semibold
                    lg:leading-6
                    leading-7
                    text-text2h
                    mt-2
                "
              >
                {product.name}
              </h1>
            </div>
            <div className="py-4 border-b border-text3 flex items-center justify-between">
              <p className="text-base leading-4 text-text2h">Type</p>
              <div className="flex items-center justify-center">
                <p className="capitalize text-sm leading-none text-text2">
                  {product.metadata.tag}
                </p>
              </div>
            </div>
            <div className="py-4 flex items-center justify-between">
              <p className="text-base leading-4 text-text2h">Price</p>
              <div className="flex items-center justify-center">
                <p className="text-sm leading-none text-text2">
                  £
                  {product.default_price?.unit_amount
                    ? Math.round(
                        product.default_price.unit_amount / 100
                      ).toFixed(2)
                    : "N/A"}
                </p>
              </div>
            </div>
            <AddButton text={"Add to Basket"} product={product} />
            <div>
              <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-text2h mt-7 break-words">
                {product.description}
              </p>
              <p className="text-base leading-4 mt-7 text-text2h">
                Product Code: {product.id}
              </p>
              <p className="text-base leading-4 mt-4 text-text2h">
                Dimentions: (Create metadata for this)
              </p>
              <p className="md:w-96 text-base leading-normal text-text2h mt-4">
                Made in the year (creeatemetaforthis)
              </p>
            </div>
            <div>
              <div className="border-t border-b py-6 mt-10 border-text3">
                <div className="flex justify-between items-center cursor-pointer">
                  <h2 className="text-lg font-bold leading-4 text-text2">
                    Shipping and returns
                  </h2>
                </div>
                <p
                  className={
                    "pt-4 text-base leading-normal pr-12 mt-4 text-text2h "
                  }
                >
                  We send all items with Royal Mail special delivery to ensure a
                  safe and secure delivery process. You will be responsible for
                  paying for your own shipping costs for returning your item. We
                  ask that you also use a tracked and secure method as damaged
                  items will not be refunded.
                </p>
              </div>
            </div>
            <div>
              <div className="border-b py-6 border-text3">
                <div className="flex justify-between items-center cursor-pointer">
                  <h2 className="text-lg font-bold leading-4 text-text2">
                    Contact us
                  </h2>
                </div>
                <p
                  className={
                    "pt-4 text-base leading-normal pr-12 mt-4 text-text2h "
                  }
                >
                  If you have any questions about the item or on how to return
                  your item to us, contact us{" "}
                  <Link
                    className="text-secondary font-bold text-sm hover:text-primaryh"
                    href="/contact"
                  >
                    HERE
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No product found</p>
      )}
    </>
  );
}

//if related products are wanted to be displayed the API fetch data must be moved to a consolodated /api folder and called from each component.
