import { useEffect } from "react";
import { useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const skip = page * 10 - 10;

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${skip}`
      );
      const data = await response.json();
      if (data && data.products) {
        setProducts(data.products);
        setTotalPages(Math.floor(data.total / 10));
        setLoading(false);
      }
    } catch (e) {
      console.error("Error fetching products:", e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return { products, page, setPage, totalPages, loading };
}
