"use client";
import { useState, useEffect, useCallback } from "react";
import type { NextPage } from "next";
import Card from "./Card";
import Stripe from "stripe";

type Product = Stripe.Product & {
  default_price: Stripe.Price;
};

const ProductList: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(() => {
    fetch("/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched products:", data.data);
        setProducts(data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [setProducts]);

  useEffect(() => {
    fetchProducts(); // Initial fetch

    const intervalId = setInterval(fetchProducts, 60000); // Fetch every minute

    return () => {
      clearInterval(intervalId);
    };
  }, [fetchProducts]);

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
