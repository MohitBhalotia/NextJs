"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    console.log(data);

    setProducts(data.products);
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      {
        products.map((item)=>(
          <h2 key={item.id}>Name: {item.title}</h2>
        ))
      }
    </div>
  );
}
