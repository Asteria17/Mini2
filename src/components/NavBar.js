import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Card } from '../components';
import { Search, ProductList } from '../pages';

export const NavBar = ({ products }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter, show] = useState(data);
  const [id, title, category, price] = data;
  useEffect(() => {
    getBrand();
  }, []);
  const getBrand = async () => {
    const response = await fetch(
      'http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx'
    );
    setData(await response.json());
    setFilter(data);
  };

  

  const filterProducts = (category) => {
    const updatedItems = data.filter((item) => item.product_type === category);
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
          className="relative inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-blue-900 active:bg-gray-600 "
          end
        >
          All NYX Products
        </Link>
        <Link
          onClick={() => filterProducts('lipstick')}
          className="relative inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-blue-900 active:bg-gray-600 "
        >
          Lipstick
        </Link>
        <Link
          onClick={() => filterProducts('lip_liner')}
          className="relative inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-blue-900 active:bg-gray-600 "
        >
          Lip Liner
        </Link>
        <Link
          onClick={() => filterProducts('mascara')}
          className="relative inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-blue-900 active:bg-gray-600 "
        >
          Mascara
        </Link>
        <Link
          onClick={() => filterProducts('eyeshadow')}
          className="relative inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-blue-900 active:bg-gray-600 "
        >
          Eye Shadow
        </Link>
        <Link
          onClick={() => filterProducts('eyeliner')}
          className="relative inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-blue-900 active:bg-gray-600 "
        >
          Eye Liner
        </Link>
        <Link
          onClick={() => filterProducts('bronzer')}
          className="relative inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-blue-900 active:bg-gray-600 "
        >
          Bronzer
        </Link>
        <Link
          onClick={() => filterProducts('blush')}
          className="relative inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-blue-900 active:bg-gray-600 "
        >
          Blush On
        </Link>
        <Link
          onClick={() => filterProducts('foundation')}
          className="relative inline-flex items-center w-full px-4 py-2 text-sm font-bold border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-blue-900 active:bg-gray-600 "
        >
          Foundation{' '}
        </Link>
      </div>

      <section className="container flex flex-wrap max-w-7x1 mx-auto py-7 items-center rounded-lg">
        <div className="flex flex-wrap inline-grid grid-cols-4 gap-4 pointer-events-auto	">
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
