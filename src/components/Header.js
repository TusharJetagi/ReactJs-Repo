import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
import useStatusOnline from "../utils/useStatusOnline";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useStatusOnline();

  return (
    <div className="flex justify-between items-center px-20 py-4 fixed top-0 backdrop-blur-md left-0 w-full z-50 text-gray-300 bg-[#1E1E1E]/60">
      <div className="w-35">
        <img src={LOGO_URL} className="w-full object-cover rounded-full" />
      </div>
      <div className="nav-items">
        <ul className="flex items-center gap-12 text-lg">
          <li>
            <Link>Online Status: {onlineStatus ? "🟢" : "🔴"}</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn px-4 py-1 bg-blue-500 text-amber-50 ml-4 rounded cursor-pointer"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
