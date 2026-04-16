import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">

     
      <h1 className="text-7xl font-bold text-[#244D3F]">404</h1>

     
      <h2 className="text-2xl font-semibold mt-4 text-gray-800">
        Oops! Page not found
      </h2>

      
      <p className="text-gray-500 mt-2 max-w-md">
        The page you are looking for might have been removed or does not exist.
      </p>

      
      <Link to="/">
        <button className="mt-6 px-6 py-2 bg-[#244D3F] text-white rounded-lg hover:bg-[#1e3f34] transition">
          Go Back Home
        </button>
      </Link>

    </div>
  );
};

export default ErrorPage;