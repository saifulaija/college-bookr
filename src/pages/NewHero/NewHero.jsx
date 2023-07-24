// src/components/Hero.js
import React from "react";
import { FiSearch } from "react-icons/fi"; // Import the search icon from React Icons

const Hero = () => {
  return (
    <div className="bg-blue-600 py-16 px-4 text-center">
      <h1 className="text-4xl font-bold text-white mb-6">
        Welcome to CollegeBookr
      </h1>
      <div className="max-w-sm mx-auto">
        <div className="relative text-gray-600">
          <input
            type="search"
            name="search"
            placeholder="Search for your desired college..."
            className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <FiSearch className="h-4 w-4" /> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
