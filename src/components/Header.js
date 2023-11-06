import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.jpg';
import Cart from '../assets/images/heart cart icon.png';
import { Search } from '../pages/Search';

export const Header = () => {
  const activeClass =
    'text-gray-900 dark:text-pink-300  mr-5 border-blue-900 hover:text-pink-600 text-pink-600  activ';

  const inActiveClass =
    'text-gray-900 dark:text-pink-300  mr-5 border-blue-900 hover:text-pink-600  rounded-lg';
  const { hidden, setHidden } = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };


  return (
    <header className="mb-4">
      <nav className="  fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-blue-950  dark:border-gray-700">
        <div className="container flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          <NavLink
            to="/home"
            className="flex ml-10 "
          >
            <img
              src={Logo}
              className="h-8 "
              alt="Shopaholic-U Logo"
            />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white hover:text-pink-600">
              Shopaholic-U
            </span>
          </NavLink>
          <div className="flex items-center ">
            <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0 mr-2 space-x-8 text-md text-sky-700 ">
                <li>
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      isActive ? activeClass : inActiveClass
                    }
                    end
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      isActive ? activeClass : inActiveClass
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? activeClass : inActiveClass
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? activeClass : inActiveClass
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>

            <NavLink
              onClick={openModal}
              className="ml-20  font-semibold sm:text-lg whitespace-nowrap dark:text-white hover:text-pink-600 "
            >
              Login
            </NavLink>

            <img
              to="/cart"
              src={Cart}
              className=" w-14 mr-5"
              alt="Shopaholic-U Cart"
            />
          </div>
          {/* <div className='container mx-auto w-1/2 '>
      <Search />
      </div>    */}
        </div>
      </nav>
      <nav className="flex items-center bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto"></div>
      </nav>
     {isModalOpen && (
         <div
         tabIndex="-1"
         className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
         onClick={handleBackdropClick}
       >
         <div className="max-w-md w-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                onClick={closeModal}
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-blue-950  dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-2xl font-bold text-pink-900 dark:text-gray-100">
                  Sign in to our platform
                </h3>
                <form
                  class="space-y-6"
                  action="#"
                >
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-pink-300"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-950 dark:border-gray-500 dark:placeholder-gray-400 dark:text-pink-300"
                      placeholder="ex : Shpaholic-U@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-pink-300"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-950 dark:border-gray-500 dark:placeholder-gray-400 dark:text-pink-300"
                      required
                    />
                  </div>
                  <div class="flex justify-between">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <label
                        for="remember"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#"
                      class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Lost Password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login to your account
                  </button>
                  <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?{' '}
                    <a
                      href="#"
                      class="text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Create account
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
