import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-amber-800 text-black">
      <div className="text-2xl text-black font-bold">Themefrey</div>
      <nav className="space-x-6">
        <a
          href="#"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#features"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          Features
        </a>
        <a
          href="#demos"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          Demos
        </a>
        <a
          href="#pricing"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          Pricing
        </a>
        <a
          href="#contact"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          Contact
        </a>
      </nav>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors duration-300">
        Get Started
      </button>
    </header>
  );
};

export default Header;
