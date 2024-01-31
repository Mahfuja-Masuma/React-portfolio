import { Link } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <Link className="text-5xl font-signature ml-2">Mahfuja</Link>
      </div>
      <div className="">
        <ul className="hidden md:flex gap-5">
          {menuItems.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {isMobileMenuOpen && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full 
        h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 gap-10"
        >
          {menuItems.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize text-4xl text-gray-500 hover:scale-105 duration-200"
            >
              <Link onClick={()=> setMobileMenuOpen(!isMobileMenuOpen)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
