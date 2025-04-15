import React from "react";

import ThemeImageOne from "../../../assets/Image/theme1.jpeg";
import ThemeImageTwo from "../../../assets/Image/theme2.jpg";
import ThemeImageThree from "../../../assets/Image/theme3.jpg";


const ThemeSection = () => {
  return (
    <section id="demos" className="py-20 bg-[#FBFBFB] text-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Theme Previews</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg h-48 hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
          <span className="text-gray-400">
            <img src={ThemeImageOne} className="h-48 rounded" alt="" />
          </span>
        </div>
        <div className="bg-white shadow-lg rounded-lg h-48 hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
          <span className="text-gray-400">
            <img src={ThemeImageTwo} className="h-48 rounded" alt="" />
          </span>
        </div>
        <div className="bg-white shadow-lg rounded-lg h-48 hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
          <span className="text-gray-400">
            <img src={ThemeImageThree} className="h-48 rounded" alt="" />
          </span>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="bg-[#FFDDAE] text-black px-6 py-3 rounded-lg hover:bg-[#FFCC88] transition-colors duration-300">
          View All Demos
        </button>
      </div>
    </section>
  );
};

export default ThemeSection;
