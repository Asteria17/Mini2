import { Routes, Route } from 'react-router-dom';

import {
  Products,
  Home,
  ProductDetail,
  Search,
  PageNotFound,
  Contact,
  About,
  Login,
  Modal,
  ProductList,
} from '../pages';

import { Searchy } from '../components/Searchy'

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path=""
          element={<Home />}
        />
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/login"
          element={<Login />}
        />

        {/* <Route
          path="search"
          element={<Search />}
        /> */}
        <Route
          path="contact"
          element={<Contact />}
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
        
        <Route
          path="/search/:id"
          element={<Searchy />}
        />
      </Routes>
    </div>
  );
};
