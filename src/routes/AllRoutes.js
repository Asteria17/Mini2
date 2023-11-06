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
  Modal
} from '../pages';

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
        {/* <Route
          path="/data/:id"
          element={<Modal/>}
        /> */}
      </Routes>
    </div>
  );
};
