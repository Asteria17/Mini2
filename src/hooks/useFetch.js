import { useState, useEffect } from 'react';

export const useFetch = (apiPath) => {
  const [data, setData] = useState([]);
  const url = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx';

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(url);

      const json = await response.json();
      setData(json.results);
      console.log(json);
    }

    fetchProducts();
  }, [url]);

  return { data };
};
