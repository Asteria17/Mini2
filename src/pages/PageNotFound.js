import { Link } from 'react-router-dom';
export const PageNotFound = () => {
  return (
    <main>
      <div className="text-center ">
        <div className="component  font-bold	text-5xl mt-20 pt-20 ">
          404 OooOpsss.....
        </div>
        <p className=" font-semibold	text-2xl pt-5">
          Sorry, this page does not exist
        </p>
        <Link to="/home">
          <button className="bg-pink-600 p-3 mt-10 font-semibold hover:text-white rounded-full ...">
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
};
