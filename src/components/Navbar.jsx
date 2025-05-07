import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#48bdd5] border-b border-gray-300">
      {/* Logo and Title */}
      <NavLink to="/" className="flex items-center gap-2">
        <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />
        <h1 className="text-3xl font-bold text-[#48bdd5]">EMCS</h1>
      </NavLink>

      {/* Desktop Navigation */}
      <ul className="flex items-center">
        {/* Home */}
        <li className="p-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#48bdd5] pb-1 text-[#48bdd5]"
                : "hover:border-b-2 hover:border-gray-400 pb-1"
            }
          >
            Home
          </NavLink>
        </li>
        {/* Visualize */}
        <li className="p-4">
          <NavLink
            to="/visualize"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#48bdd5] pb-1 text-[#48bdd5]"
                : "hover:border-b-2 hover:border-gray-400 pb-1"
            }
          >
            Visualize
          </NavLink>
        </li>
        {/* Project Implementation Dropdown */}
        <li
          className="relative p-4 cursor-pointer"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <span className="hover:border-b-2 hover:border-gray-400 pb-1">
            Project Implementation
          </span>
          {dropdown && (
            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded border z-10">
              <li>
                <NavLink
                  to="/undergrad"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  onClick={() => setDropdown(false)}
                >
                  Undergrad Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/grad"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  onClick={() => setDropdown(false)}
                >
                  Grad Projects
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        {/* Blog */}
        <li className="p-4">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#48bdd5] pb-1 text-[#48bdd5]"
                : "hover:border-b-2 hover:border-gray-400 pb-1"
            }
          >
            Blog
          </NavLink>
        </li>
        {/* News & Events */}
        <li className="p-4">
          <NavLink
            to="/news-events"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#48bdd5] pb-1 text-[#48bdd5]"
                : "hover:border-b-2 hover:border-gray-400 pb-1"
            }
          >
            News & Events
          </NavLink>
        </li>
        {/* Team */}
        <li className="p-4">
          <NavLink
            to="/team"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#48bdd5] pb-1 text-[#48bdd5]"
                : "hover:border-b-2 hover:border-gray-400 pb-1"
            }
          >
            Team
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
