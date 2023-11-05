import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../components';

export const ProductDetail = () => {
  // const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [id, title, category, price] = product;

  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    setProduct(await response.json());
    setProduct(product);
  };
  const filterProducts = (category) => {
    const updatedItems = product.filter((item) => item.category === category);
    console.log(updatedItems);
    setProduct(updatedItems);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mt-5">
            <img
              src={product.image}
              alt={product.image}
              height={400}
              width={500}
            />
          </div>
          <div className="col-lg-6 mt-5">
            <h4 className="texr-uppercase">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="fw-bolder">
              Rating {product.rating && product.rating.rate}
            </p>
            <h3>$ {product.price}</h3>
            <p>{product.description}</p>
            <button variant="dark">Add to Cart</button>
            <button
              className="ms-3"
              variant="dark"
            >
              Go to Cart
            </button>
          </div>
        </div>{' '}
        <div className="flex flex-wrap inline-grid grid-cols-4 gap-4">
          {product.map((data) => (
            <Card
              key={data.id}
              data={data}
            />
          ))}
        </div>
      </div>
    </>
  );
};
