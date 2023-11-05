import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, ProductList } from '../components';
import { Search } from '../pages/Search';

export const NavBar = ({ products }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [id, title, category, price] = data;
  useEffect(() => {
    getCategorized();
  }, []);

  const getCategorized = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    setData(await response.json());
    setFilter(data);
    console.log(data);
  };

  const filterProducts = (category) => {
    const updatedItems = data.filter((item) => item.category === category);
    console.log(updatedItems);
    setFilter(updatedItems);
  };

  return (
    <main className=" text-center ">
      <Search />
      <h1 className="text-center text-4xl font-extrabold underline-offset-4	mb-5 leading-relaxed">
        Products
      </h1>
      <div className="inline-flex rounded-md shadow-sm">
        <Link
          onClick={() => setFilter(data)}
          aria-current="page"
          className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          All Products
        </Link>
        <Link
          onClick={() => filterProducts('electronics')}
          href="#"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Electronic Items
        </Link>
        <Link
          onClick={() => filterProducts('jewelery')}
          href="#"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Jewelry Items
        </Link>
        <Link
          onClick={() => filterProducts("women's clothing")}
          href="#"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Women's Clothing
        </Link>
        <Link
          onClick={() => filterProducts("men's clothing")}
          href="#"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Men's Clothing
        </Link>
      </div>

      <section className="container flex flex-wrap max-w-7x1 mx-auto py-7 items-center rounded-lg">
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
