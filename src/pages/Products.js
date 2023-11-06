import { NavBar, ProductList, Card } from '../components';
import Banner2 from '../assets/images/banner2  nyx.jpg';
import { useState, useEffect } from 'react';

export const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

 

  return (
    <main>
      <img
        src={Banner2}
        alt="2nd Banner"
        className="pb-5 pt-3 mt-4"
      />
      <NavBar />
    </main>
  );
};
