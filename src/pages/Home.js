import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../assets/images/banner nyx.gif';
import { ProductList } from './ProductList';
import { Search } from './Search';
import { Card } from '../components';

export const Home = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  //naglagay ako ng localStorage dito para kahit pumunta sa ibang page or refresh display parin niya images.
  useEffect(() => {
    const storedData = localStorage.getItem('productData');
    if (storedData) {
      setData(JSON.parse(storedData));
      setFilter(JSON.parse(storedData));
    } else {
      getBrand();
    }
  }, []);

  //Ito kasama sa localStorage
  const getBrand = async () => {
    const response = await fetch(
      'http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx'
    );
    const newData = await response.json();
    setData(newData);
    setFilter(newData);
    localStorage.setItem('productData', JSON.stringify(newData));
  };

  const filterProducts = (category) => {
    const updatedItems = data.filter((item) => item.product_type === category);
    setFilter(updatedItems);
  };

  //ito para kahit nag click ka ng ibang page prevent parin niya yung current images (display)
  const handleLinkClick = (event) => {
    event.preventDefault();
  };

  return (
    <main>
      <Link to="/products">
        <img
          className="mt-4"
          src={Hero}
          alt="Banner1"
        />
      </Link>
      <div className='container'>
        <div className=" container bg-gray-200 pt-5 ">
          <Search />
          <h1 className="text-center text-3xl font-bold">BEST SELLERS</h1>
          <p className="text-blue-950 text-center hover:text-pink-300  text-3xl font-bold mt-4 ">
            <Link to={`/products`}
              className='border border-blue-950 rounded-lg bg-gray-400'
            >
            Shop Now!
            </Link>
          </p>
          <section className="container flex flex-wrap max-w-7x1 mx-auto py-7 items-center rounded-lg text-center">
            <div className="flex flex-wrap p-4 inline-grid grid-cols-4 gap-x-1 gap-y-4">
              {filter.map((product) => (
                <Card
                  key={product.id}
                  data={product}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
