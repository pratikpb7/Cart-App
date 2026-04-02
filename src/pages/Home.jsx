import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../App.css";
import useProduct from "../hooks/useProduct";

export default function Home({ search }) {
  const { products, loading, error } = useProduct();
  
  if (error) return <h2>{error}</h2>;

   const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );
  
  if (products.length === 0) {
    return <h2>Loading products...</h2>;
  }
  if (search && filtered.length === 0) {
  return <h2>No products found </h2>;
  }

 

  return (
    <>
      <div className="container">
        {filtered.map((p) => (
          <div key={p.id}>
            <ProductCard key={p.id} products={p} />
          </div>
        ))}
      </div>
    </>
  );
}
