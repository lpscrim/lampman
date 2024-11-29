import Stripe from "stripe";
import Image from "next/image";
import AddButton from "@/app/_components/products/AddButton";

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
      throw new Error("Product has sold out!")
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
        <div className="md:flex items-start justify-center py-12 xl:px-0 md:px-6 px-4">
          <div className="xl:w-2/5 lg:w-2/5 w-80 md:block hidden">
            {product.images.length > 0 ? (
              <Image
                alt={`Product ${product.id}`}
                src={product.images[0]}
                className="rounded-md object-center"
                width={512}
                height={342}
              />
            ) : null}
            {product.metadata.img1 ? (
              <Image
                alt={`Product ${product.metadata.img1}`}
                src={product.metadata.img1}
                className="rounded-md object-center "
                width={600}
                height={600}
              />
            ) : null}
          </div>
          <div className="md:hidden">
            {product.images.length > 0 ? (
              <Image
                alt={`Product ${product.id}`}
                src={product.images[0]}
                className="w-full h-auto object-cover rounded-md"
                width={800}
                height={800}
              />
            ) : null}
            <div className="flex flex-row items-center justify-between mt-3 space-x-4 md:space-x-0 overflow-hidden ">
              {product.metadata.img1 ? (
                <Image
                  alt={`Product ${product.id}`}
                  src={product.metadata.img1}
                  className="rounded-md w-[calc(33.333%-0.5rem)] h-auto object-cover shrink-0"
                  width={200}
                  height={200}
                />
              ) : null}
              {product.metadata.img2 ? (
                <Image
                  alt={`Product ${product.id}`}
                  src={product.metadata.img2}
                  className="rounded-md w-[calc(33.333%-0.5rem)] h-auto object-cover shrink-0"
                  width={200}
                  height={200}
                />
              ) : null}
              {product.metadata.img3 ? (
                <Image
                  alt={`Product ${product.id}`}
                  src={product.metadata.img3}
                  className="rounded-md w-[calc(33.333%-0.5rem)] h-auto object-cover shrink-0"
                  width={200}
                  height={200}
                />
              ) : null}
            </div>
          </div>
          <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            <div className="border-b border-text1 pb-6">
              <p className="capitalize text-sm leading-none text-text3">
                {product.metadata.type} collection
              </p>
              <h1
                className="
                    lg:text-2xl
                    text-xl
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
            <div className="py-4 border-b border-text1 flex items-center justify-between">
              <p className="text-base leading-4 text-text2h">Size</p>
              <div className="flex items-center justify-center">
                <p className="capitalize text-sm leading-none text-text2">
                  {product.metadata.size}
                </p>
                
              </div>
            </div>
            <div className="py-4 border-b border-text1 flex items-center justify-between">
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
            <AddButton text={"Add to Basket"} product={product}/>
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
              <div className="border-t border-b py-4 mt-7 border-text1">
                <div className="flex justify-between items-center cursor-pointer">
                  <p className="text-base leading-4 text-text2">
                    Shipping and returns
                  </p>
                </div>
                <div
                  className={
                    "pt-4 text-base leading-normal pr-12 mt-4 text-text2h "
                  }
                  id="sect"
                >
                  You will be responsible for paying for your own shipping costs
                  for returning your item. Shipping costs are nonrefundable
                </div>
              </div>
            </div>
            <div>
              <div className="border-b py-4 border-text1">
                <div className="flex justify-between items-center cursor-pointer">
                  <p className="text-base leading-4 text-text2">
                    Contact us
                  </p>
                </div>
                <div
                  className={
                    "pt-4 text-base leading-normal pr-12 mt-4 text-text2h "
                  }
                  id="sect"
                >
                  If you have any questions on how to return your item to us,
                  contact us. (Create Link Button to contact page)
                </div>
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
