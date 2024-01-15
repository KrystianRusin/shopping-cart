import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 px-20 bg-white w-full">
      <div className="text-slate-950">Logo</div>
      <div className="flex-grow max-w-[750px]">
        <input
          className="px-3 py-2 mr-4 rounded-md border w-full border-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:border-transparent"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="flex">
        <Link to="/" className="px-3 py-2 mr-2 bg-white nav-item">
          Home
        </Link>
        <Link to="/shop" className="px-3 py-2 bg-white rounded-md nav-item">
          Shop
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
