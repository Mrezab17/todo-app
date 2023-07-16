import { Link } from "react-router-dom/cjs/react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-gray-800 w-full h-16 pl-10 space-x-10 items-center flex fixed">
      <Link
        to="/"
        className="w-1/12 text-xl text-white hover:text-purple-400 hover:text-3xl"
      >
        Home
      </Link>
      <Link
        className="w-1/12 text-xl text-white hover:text-purple-400 hover:text-3xl"
        to="/register"
      >
        Register
      </Link>
    </div>
  );
};

export default Navbar;
