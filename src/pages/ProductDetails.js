import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../components';

export const ProductDetail = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    getProduct();
  }, [id]); // Include 'id' as a dependency to fetch data when it changes

  const getProduct = async () => {
    try {
      const response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products/.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const productData = await response.json();
      setProduct(productData);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mt-5">
            <img
              src={product.image_link}
              alt={product.image_link}
              height={400}
              width={500}
            />
          </div>
          <div className="col-lg-6 mt-5">
            <h4 className="text-uppercase">{product.category}</h4>
            <h1 className="display-5">{product.name}</h1>
            <p className="fw-bolder">
              Rating {product.rating && product.rating.rate}
            </p>
            <h3>$ {product.price}</h3>
            <p>{product.description}</p>
            <button variant="dark">Add to Cart</button>
            <button className="ms-3" variant="dark">
              Go to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
