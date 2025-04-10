import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-6 px-4 flex flex-wrap justify-between text-white">
      {/* Implemented By */}
      <div className="flex-1 text-center mx-4">
        <h3 className="font-bold text-lg mb-2">Implemented By</h3>
        <p className="text-sm">Smart Energy Management and Control System</p>
        {/* Logo navigates to Home */}
        <NavLink to="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-12 h-12 mt-4 mx-auto cursor-pointer"
          />
        </NavLink>
      </div>

      {/* Supported By */}
      <div className="flex-1 text-center mx-4">
        <h3 className="font-bold text-lg mb-2">Supported By</h3>
        {/* UGC Logo navigates to external link */}
        <a
          href="https://www.ugcnepal.edu.np/"
          target="_blank"
          rel="noopener noreferrer" // For security
        >
          <img
            src="/images/ugclogo.png"
            alt="UGC Logo"
            className="w-12 h-12 mt-4 mx-auto cursor-pointer"
          />
        </a>
        <p className="text-sm mt-2">University Grants Commission</p>

        {/* WRC Logo navigates to external link */}
        <div className="mt-4">
          <a
            href="https://ioepas.edu.np/doece"
            target="_blank"
            rel="noopener noreferrer" // For security
          >
            <img
              src="/images/WRC.png"
              alt="WRC Logo"
              className="w-12 h-12 mx-auto cursor-pointer"
            />
          </a>
          <p className="text-sm mt-2">
            Department of Electronics & Computer Engineering, Pashchimanchal
            Campus
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
