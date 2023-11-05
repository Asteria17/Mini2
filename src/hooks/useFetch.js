import { useState, useEffect } from 'react';

export const useFetch = (apiPath) => {
  const [data, setData] = useState([]);
  const url = `https://fakestoreapi.com/products/`;

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(url);

      const json = await response.json();
      setData(json.results);
    }

    fetchProducts();
  }, [url]);

  return { data };
};
