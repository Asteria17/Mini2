import { useNavigate, Outlet, Link } from 'react-router-dom';

export const Contact = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log('------');
    return navigate('/');
  };

  return (
    <main>
      <div className="container mx-auto mt-5 p-6 w-1/2 ">
        <div className="con bg-pink-200 rounded-lg p-8 shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-primary mt-5">
            Contact Shopaholic-U
          </h1>
          <p className="text-gray-700 text-lg leading-7">
            We'd love to hear from you! If you have any questions, concerns, or
            feedback, please feel free to get in touch with us. Your
            satisfaction is important to us, and we're here to assist you with
            any inquiries or support you might need.
          </p>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2 ">
              Contact Information:
            </h2>
            <h2 className="mt-4 text-2xl font-semibold mb-4 text-primary mt-5">
              {' '}
              Via Facebook Messaging (Recommended){' '}
            </h2>
            <p className="text-blue-700 text-lg leading-7">
              <a
                href="https://www.facebook.com/messages/t/61553264665498"
                target="blank"
              >
                https://www.facebook.com/messages/t/61553264665498
              </a>
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-3 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="Surname, Given Name M.I"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-3 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  placeholder="ShopaholicUstore@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="2"
                  className="mt-1 p-3 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md w-1/2"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-bold rounded-md text-black bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary focus:ring-offset-primary active:bg-primary-dark transition duration-150 ease-in-out "
                >
                  <Link> Submit</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
