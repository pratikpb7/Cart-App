import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../App.css";
import useProduct from "../hooks/useProduct";
import "../App.css";

export default function Home({ search }) {
  const { products, loading, error } = useProduct();

  if (error) return <h2>{error}</h2>;

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }
  if (search && filtered.length === 0) {
    return <h2>No products found </h2>;
  }

  return (
    <div className="center">
      <div className="container">
        {filtered.map((p) => (
          <div key={p.id}>
            <ProductCard key={p.id} products={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
