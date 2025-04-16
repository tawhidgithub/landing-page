import React from "react";
import MenuItem from "../Header/Component/manuItem";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo or Brand Name */}
          <div className="text-xl font-bold mb-4 md:mb-0">Themefrey</div>

          {/* Navigation Links */}
          <nav className="space-x-4 text-gray-300">
            <MenuItem itemText={"Home"} link={"#home"} />
            <MenuItem itemText={"Features"} link={"#features"} />
            <MenuItem itemText={"Demos"} link={"#demos"} />
            <MenuItem itemText={"Pricing"} link={"#pricing"} />
            <MenuItem itemText={"Contact"} link={"#contact"} />
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold mb-2">About Us</h3>
            <p className="text-gray-400">
              Themefrey provides modern and flexible WordPress themes tailored
              to your needs.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-semibold mb-2">Stay Updated</h3>
            <form>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="mt-2 cursor-pointer w-full bg-blue-600 p-2 rounded hover:bg-blue-500 transition ease-in-out duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="font-semibold mb-2">Useful Links</h3>
            <ul className="text-gray-300 space-y-1">
              <li>
                <MenuItem itemText={"Privacy Policy"} link={"#"} />
              </li>
              <li>
                <MenuItem itemText={"Terms of Service"} link={"#"} />
              </li>
              <li>
                <MenuItem itemText={" Support Center"} link={"#"} />
              </li>
              <li>
                <MenuItem itemText={"FAQs"} link={"#"} />
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} Tawhid Islam. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
