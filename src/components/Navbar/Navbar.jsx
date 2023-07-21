import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {  FaSearch, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItem = (
      <>
       <li>
       <NavLink
            exact
            to="/"
            activeClassName="text-white font-bold"
            className="text-white flex items-center"
          >
            Home
          </NavLink>
       </li>
         <li>
         <NavLink
            to="/blog"
            activeClassName="text-white font-bold"
            className="text-white flex items-center"
          >
             Colleges
          </NavLink>
         </li>
          <li>
          <NavLink
            to="/blog"
            activeClassName="text-white font-bold"
            className="text-white flex items-center"
          >
             Admissions
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/blog"
            activeClassName="text-white font-bold"
            className="text-white flex items-center"
          >
             My Colleges
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/login"
            activeClassName="text-white font-bold"
            className="text-white flex items-center"
          >
             Login
          </NavLink>
          </li>
          <li>
          <div className="bg-white flex items-center rounded-md px-2">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none ml-1"
            />
          </div>
          </li>
      
      </>
  )

  return (
    <nav className="bg-[#33a688] py-4 px-8 md:px-16">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-bold">College</div>

        {/* Hamburger Menu for Small Devices */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <FaBars className="text-3xl" />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 items-center">
         
          {navItem}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-2">
          
          {navItem}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
