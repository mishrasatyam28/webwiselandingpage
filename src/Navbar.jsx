import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Services", url: "https://webwisedigital.in/services" },
    { name: "About Us", url: "https://webwisedigital.in/aboutus" },
    { name: "Contact Us", url: "https://webwisedigital.in/contactus" },
    { name: "Our Works", url: "https://webwisedigital.in/" },
  ];

  const [scrollDirection, setScrollDirection] = useState("none");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > prevScrollPos) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const isHidden = scrollDirection === "down";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`fixed z-[999] px-8 md:px-20 w-full py-6 font-[ 'Neue_Montreal_Regular'] flex justify-between items-center backdrop-blur-sm ${
        isHidden
          ? "hidden animate__animated animate__slideOutUp"
          : "animate__animated animate__slideInDown"
      }`}
    >
      <div className="logo">
        <img className="size-16 md:size-28" src="./logo.svg" alt="logo" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex links gap-10 text-white">
        {links.map((item, index) => (
          <a
            href={item.url}
            key={index}
            className={`capitalize text-lg font-light transition duration-300 hover:bg-gray-400/30 rounded-3xl p-2 ${
              index === 4 ? "ml-32" : ""
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Hamburger for mobile */}
      <div className="md:hidden flex items-center">
        <button
          className="focus:outline-none text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden absolute top-16 right-0 w-full bg-transparent text-white py-5`}
      >
        <div className="flex flex-col items-center space-y-5">
          {links.map((item, index) => (
            <Link
              to={item.url}
              key={index}
              className="capitalize text-lg font-semibold transition duration-300 hover:bg-gray-400/30 rounded-3xl p-2"
              onClick={() => setMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
