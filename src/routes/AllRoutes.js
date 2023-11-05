import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Hero,
  Products,
  Home,
  ProductDetail,
  Search,
  PageNotFound,
  Contact,
  About,
  Login,
} from '../pages';
import { ProductList } from '../components';
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path=""
          element={<Home />}
        />

        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/home"
          element={<Hero />}
        />
        <Route
          path=""
          element={<ProductList />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetail />}
        />

        <Route
          path="/products/detail"
          element={<ProductDetail />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="search"
          element={<Search />}
        />
        <Route
          path="contact"
          element={<Contact />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </div>
  );
};
