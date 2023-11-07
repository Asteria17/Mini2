import { NavBar, ProductList, Card } from '../components';
import Banner2 from '../assets/images/banner2  nyx.jpg';
import { useState, useEffect } from 'react';

export const Products = () => {
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
      <img
        src={Banner2}
        alt="2nd Banner"
        className="pb-5 pt-3 mt-4"
      />
      <NavBar>
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
          </NavBar> 
    </main>
  );
};
