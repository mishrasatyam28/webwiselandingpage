import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full px-20 py-2 flex justify-between items-center text-white">
      <div className="logo">
        <img src="./logo.svg" className="size-28" alt="Logo" />
      </div>
      <div className="links flex gap-10 text-white">
        {["Home", "Services", "About us", "Contact"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-lg capitalize"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
