"use client";
import { useState, useEffect, useCallback } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  default_price: string; // Consider changing this to a number if possible
  images: string[];
}

const ProductList: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(() => {
    fetch('/api/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched products:', data.data);
        setProducts(data.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again later.');
      });
  }, [setProducts, setError]);

  useEffect(() => {
    fetchProducts(); // Initial fetch

    const intervalId = setInterval(fetchProducts, 60000); // Fetch every minute

    return () => {
      clearInterval(intervalId); // Clean up interval on unmount
    };
  }, [fetchProducts]);

  return (
    <div>
      <h1>Product List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} 
      {products && products.length > 0 ? (
        products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Description: {product.description}</p>
          <p>Price: {product.default_price}</p>
          {product.images.length > 0 ? (
            <Image 
              src={product.images[0]}
              alt={`Product ${product.id}`}
              width={300} // Specify width
              height={300} // Specify height
            />
          ) : null}
        </div>
      )))
      : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductList;
