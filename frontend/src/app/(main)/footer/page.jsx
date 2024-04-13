// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="mb-8 lg:mb-0 lg:mr-12">
          <h2 className="text-lg font-semibold mb-4">Company Information</h2>
          <p className="mb-2">house no.-01 ,lucknow, india</p>
          <p className="mb-2">harshitsahu@digipodium.com</p>
          <p>9834474844</p>
        </div>
        <div className="mb-8 lg:mb-0 lg:mr-12">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8 lg:mb-0 lg:mr-12">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Facebook icon SVG */}
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Twitter icon SVG */}
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Instagram icon SVG */}
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
          <p className="mb-2">Subscribe to our newsletter for updates.</p>
          <form className="flex flex-col lg:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="w-full lg:w-auto px-4 py-2 mb-2 lg:mb-0 border border-gray-600 rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-700 text-white px-4 py-2 ml-0 lg:ml-2 rounded-md hover:bg-gray-600 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
