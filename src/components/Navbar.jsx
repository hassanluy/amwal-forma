import React from "react";
import logo from "../assest/imgs/amwal-logo.svg";
import shareIcon from "../assest/imgs/share-icon.svg";
const Navbar = () => {
  const glassStyle = {
    backdropFilter: "blur(25px)", // Blur effect
    border: "1px solid rgba(255, 255, 255, 0.2)", // Optional border style
    padding: "20px", // Optional padding
    borderRadius: "5rem", // Optional border radius
  };
  return (
    <nav
      style={glassStyle}
      className="mt-12 bg-[#B0B0B04D] h-[70px] lg:w-3/4 lg:mx-auto p-7 rounded-full  flex gap-5 items-center justify-between sticky top-10"
    >
      <a
        href=""
        className="p-3 bg-white rounded text-2xl font-bold rounded-[100%]"
      >
        EN
      </a>
      <div>
        <img src={logo} alt="" />
      </div>
      <a href="">
        <img src={shareIcon} alt="" />
      </a>
    </nav>
  );
};

export default Navbar;
