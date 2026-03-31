import { useState, useEffect } from "react";
import { getProducts } from "../services/api";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, []);
  return { products, loading, error };
}
