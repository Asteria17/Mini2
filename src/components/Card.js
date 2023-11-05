import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Card = ({ data }) => {
  const { id, title, price, description, category, image, rate } = data;
  const params = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    setProduct(await response.json());
    setProduct(data);
  };
  const filterProducts = (category) => {
    const updatedItems = product.filter((item) => item.category === category);
    console.log(updatedItems);
    setProduct(updatedItems);
  };

  return (
    <div className="container mx-auto p-2 mx-3 flex flex-wrap">
      <div className=" container max-w-sm bg-white border border-blue-900 rounded-lg shadow bg-gray-200 CARD">
        <Link to={`/product/${id}`}>
          <img
            className="p-8 rounded-t-lg pic"
            src={image}
            alt="ProductImage"
          />
        </Link>
        <div className="container mx-auto px-5 pb-5">
          <Link to={`/data/${id}`}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-black">
              {title}
            </h5>
          </Link>
          <div className="container mx-auto flex items-center mt-2.5 mb-5 ">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">
              {rate}
            </span>
          </div>
          <div className="container mx-auto flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 text-black">
              ${price}
            </span>
            <Link
              to={`/data/${id}`}
              onClick={() => console.log(data)}
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-800 hover:bg-pink-600 focus:ring-blue-800"
            >
              {' '}
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
