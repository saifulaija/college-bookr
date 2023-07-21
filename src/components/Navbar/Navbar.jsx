import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBlog, FaUser, FaSearch, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        <div className="hidden md:flex space-x-4 items-center">
          <NavLink
            exact
            to="/"
            activeClassName="text-white font-bold"
            className="text-white flex items-center"
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            activeClassName="text-white font-bold"
            className="text-white flex items-center"
          >
             Colleges
          </NavLink>
          <NavLink
            to="/blog"
            activeClassName="text-white font-bold"
            className="text-white flex items-center"
          >
             Admissions
          </NavLink>
          <NavLink
            to="/blog"
            activeClassName="text-white font-bold"
            className="text-white flex items-center"
          >
             My Colleges
          </NavLink>
          <NavLink
            to="/login"
            activeClassName="text-white font-bold"
            className="text-white flex items-center"
          >
             Login
          </NavLink>
          <div className="bg-white flex items-center rounded-md px-2">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none ml-1"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <NavLink
            exact
            to="/"
            activeClassName="text-white font-bold"
            className="block py-2 px-4 text-white"
          >
            <FaHome className="mr-2 inline" /> Home
          </NavLink>
          <NavLink
            to="/blog"
            activeClassName="text-white font-bold"
            className="block py-2 px-4 text-white"
          >
            <FaBlog className="mr-2 inline" /> Blog
          </NavLink>
          <NavLink
            to="/login"
            activeClassName="text-white font-bold"
            className="block py-2 px-4 text-white"
          >
            <FaUser className="mr-2 inline" /> Login
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
