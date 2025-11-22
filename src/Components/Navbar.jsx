import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { FaBell, FaUser } from "react-icons/fa";
import LogoLight from "../assets/dnk-logo.png";
import LogoDark from "../assets/logo-white.png";
import { useCart } from "../Context/CartContext";

const Navbar = ({
  bgColor = "bg-black/20",
  textColor = "text-white",
  logoColor = "dark", // you control this manually
}) => {
  const logoSrc = logoColor === "dark" ? LogoDark : LogoLight;
  const { cartCount, totalPrice } = useCart();

  return (
    <nav className={`relative z-20 flex items-center px-8 py-8  ${bgColor} ${textColor}`}>
      {/* Left: Logo + Menu */}
      <div className="flex items-center gap-10">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img
              src={logoSrc}
              alt="Logo"
              className="h-10"
            />
          </Link>
        </div>

        <ul className="flex gap-6">
          <li><Link to="/everything">EVERYTHING</Link></li>
          <li><Link to='/women'>WOMEN</Link> </li>
            <li><Link to='/men'>MEN</Link> </li>
            <li><Link to='/accessory'>ACCESSORIES</Link> </li>
        </ul>
      </div>

      {/* Right: Icons and Links */}
      <div className="flex ml-auto flex-wrap gap-14 items-center">
        <ul className="flex gap-4">
          <li><Link to='/aboutus' >  ABOUT </Link>  </li>
          <li ><Link to='/contact-us'>CONTACT US </Link></li>
        </ul>

      <div className="flex gap-4 items-center text-md">
  <p className=" ">
    ${totalPrice.toFixed(2)}
  </p>

  <div className="relative h-[30px] w-[30px] flex justify-center items-center">
    <FaShoppingBag className="text-[20px] cursor-pointer" />
    <div className="px-[5px] rounded-[10px] font-semibold bg-white text-[13px] text-black absolute top-0 left-5">
      {cartCount}
    </div>
  </div>
  <FaUser className=" cursor-pointer" />
</div>

      </div>
    </nav>
  );
};

export default Navbar;
