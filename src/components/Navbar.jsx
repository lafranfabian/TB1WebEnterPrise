import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Lafran Fabian</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#service" className="hover:text-gray-400">Experience</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        <a
  href="https://www.linkedin.com/in/lafran-fabian-anandaditya-83a25122a/"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:inline"
>
  <button
    className="bg-gradient-to-r from-green-400 to-blue-500 text-white
      transform transition-all duration-300 hover:scale-110
      px-6 py-2 rounded-full border-2 border-transparent hover:border-purple-400
      hover:shadow-lg hover:shadow-purple-500/50"
  >
    Connect Me
  </button>
</a>

      </div>
    </nav>
  );
};

export default Navbar;
