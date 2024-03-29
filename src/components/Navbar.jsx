import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 px-20 bg-white w-full border-b border-slate-200 tracking-widest">
      <div className="text-slate-950">
        <Link to="/shopping-cart" className="px-3 py-2 mr-2 bg-white min-w-4">
          URBAN ETHER
        </Link>
      </div>
      <div className="flex-grow max-w-[900px] flex just">
        <input
          className="px-3 py-2 rounded-md border w-full border-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:border-transparent"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="flex gap-5 ">
        <Link
          to="/shopping-cart"
          className="px-3 py-2 mr-2 bg-white nav-item min-w-4"
        >
          HOME
        </Link>
        <Link
          to="/shop"
          className="px-3 py-2 bg-white rounded-md nav-item min-w-4"
        >
          SHOP
        </Link>
        <Link
          to="/cart"
          className="px-3 py-2 bg-white rounded-md nav-item min-w-4"
        >
          <ShoppingBagOutlinedIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
