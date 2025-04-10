import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#48bdd5] border-b border-gray-300">
      {/* Logo and Title */}
      <NavLink to="/" className="flex items-center gap-2">
        {/* Add your logo here */}
        <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />
        <h1 className="text-3xl font-bold text-[#48bdd5]">EMCS</h1>
      </NavLink>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {["Home", "Visualize", "Blog", "Team"].map((item, index) => (
          <li key={index} className="p-4">
            <NavLink
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-[#48bdd5] pb-1 text-[#48bdd5]"
                  : "hover:border-b-2 hover:border-gray-400 pb-1"
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Sidebar Navigation */}
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-gray-100 bg-gray-100 ease-in-out duration-500'
            : 'fixed left-[-100%] ease-in-out duration-500'
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#48bdd5] m-5">EMCS</h1>
        <ul className="uppercase p-4">
          {["Home", "Visualize", "Blog", "Team"].map((item, index) => (
            <li key={index} className="p-4 border-b border-gray-300">
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-[#48bdd5] pb-1 text-[#48bdd5]"
                    : "hover:border-b-2 hover:border-gray-400 pb-1"
                }
                onClick={handleNav} // Close menu on click
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
