import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#33a688] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-xl">
            <FaInstagram />
          </a>
        </div>
        <p className="mt-4 text-center text-white">
          &copy; {new Date().getFullYear()} CollegeBookr. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
