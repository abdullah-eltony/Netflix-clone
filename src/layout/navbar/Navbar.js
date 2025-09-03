import React from "react";
import {Link, NavLink } from "react-router-dom";

import { FaSearch, FaHeart } from "react-icons/fa";
import { CgUser } from "react-icons/cg";
const Navbar = () => {
  return (
    <div className="bg-main sticky shadow-md top-0 z-20">
      <div className="container mx-auto py-6 px-2 2xl:px-32 lg:grid gap-10 grid-cols-7 justify-between items-center ">
        {/* logo */}
        <div className="col-span-1 lg:block hidden">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-full h-12 object-contain"
            />
          </Link>
        </div>
        {/* search */}
        <div className="col-span-3">
          <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
            <button
              type="submit"
              className="bg-subMain w-12 flex-cols h-12 rounded text-white"
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="search movies from here"
              className="bg-transparent font-medium placeholder:text-border text-black text-sm h-12 w-11/12 border-none"
            />
          </form>
        </div>
        {/* Menu */}
        <div className="col-span-3 hidden lg:flex xl:gap-14 text-sm font-medium justify-between xl:justify-end items-center">
          <NavLink to="/movies" className="hover:text-subMain transitions">
            Movies
          </NavLink>
          <NavLink to="/about" className="hover:text-subMain transitions">
            About Us
          </NavLink>
          <NavLink to="/contact" className="hover:text-subMain transitions">
            Contact Us
          </NavLink>
          <NavLink to="/login" className="hover:text-subMain transitions">
            <CgUser className="w-8 h-8" />
          </NavLink>
          <NavLink to="/favorites" className="hover:text-subMain transitions relative">
            <FaHeart className="w-6 h-6" />
            <span className="absolute -top-5 -right-2 text-white bg-subMain rounded-full text-xs w-5 h-5 flex-cols">2</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
