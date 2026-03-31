import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../App.css";
import useProduct from "../hooks/useProduct";

export default function Home() {
  const { products, loading, error } = useProduct();
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  if (products.length === 0) {
    return <h2>Loading products...</h2>;
  }

  return (
    <>
      <div className="container">
        {products.map((p) => (
          <div key={p.id}>
            <ProductCard key={p.id} products={p} />
          </div>
        ))}
      </div>
    </>
  );
}
