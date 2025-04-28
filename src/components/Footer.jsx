import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-8">
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2"></h3>
            <p className="text-gray-400">
              If you need any further information or have any job information, let's stay connected!
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold px-4 
                py-2 rounded-r-lg hover:brightness-110 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-6 flex flex-col md:flex-row 
          justify-between items-center text-sm"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Lafran Fabian Anandaditya.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
