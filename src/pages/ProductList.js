import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components';

export const ProductList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    getBrand();
  }, []);
  const getBrand = async () => {
    const response = await fetch(
      'http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx'
    );
    setData(await response.json());
    setFilter(data);
    console.log(data);
  };

  const filterProducts = (products) => {
    const updatedItems = data.filter((item) => item.product_type === products);

    setFilter(updatedItems);
  };

  return (
    <main className=" text-center ">
      <section className="container flex flex-wrap max-w-7x1 mx-auto py-7 items-center rounded-lg text-center">
        <div className="flex flex-wrap inline-grid grid-cols-4 gap-4">
          {filter.map((product) => (
            <Card
              key={product.id}
              data={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
