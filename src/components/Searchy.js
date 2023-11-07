import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '.';

export const Searchy = () => {
  const [searchedItem, setSearchedItem] = useState([]);
  const params = useParams();
  // const [data, setData] = useState([]);
  // const [filter, setFilter] = useState([]);

  const getSearch = async () => {
    try {
      const response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx&${searchedItem}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setSearchedItem(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getSearch(params.search);
  }, [params.search]);  

  //  useEffect(() => {
  //   const storedData = localStorage.getItem('productData');
  //   if (storedData) {
  //     setData(JSON.parse(storedData));
  //     setFilter(JSON.parse(storedData));
  //   }
  // }, []);


  // const getBrand = async () => {
  //   const response = await fetch(
  //     'http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx'
  //   );
  //   const newData = await response.json();
  //   setData(newData);
  //   setFilter(newData);
  //   localStorage.setItem('productData', JSON.stringify(newData));
  // };

  // const filterProducts = (category) => {
  //   const updatedItems = data.filter((item) => item.product_type === category);
  //   setFilter(updatedItems);
  // };


  // const handleLinkClick = (event) => {
  //   event.preventDefault();
  // };


  return (
    <div>
      <main className="text-center">
        <section className="container flex flex-wrap max-w-7x1 mx-auto py-7 items-center rounded-lg text-center">
          <div className="flex flex-wrap inline-grid grid-cols-4 gap-4">
            {searchedItem.map((product) => (
              <Card 
              key={product.id} 
              data={product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
