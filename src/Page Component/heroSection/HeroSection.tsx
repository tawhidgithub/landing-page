import React from "react";

const HeroSection = () => {
  return (
    <section className="text-center py-30 bg-[#FBFBFB] text-black">
      <h1 className="text-4xl font-extrabold mb-4">
        Launch Your Next WordPress Project with Themefrey
      </h1>
      <p className="text-gray-600 mb-6">
        Design fast, build faster, and grow beyond limits with our flexible
        WordPress themes.
      </p>
      <div className="space-x-4">
        <button className="bg-[#FFDDAE] text-black px-6 py-3 rounded-lg hover:bg-[#FFCC88] transition-colors duration-300">
          Live Demo
        </button>
        <button className="border border-[#FFDDAE] text-[#FFDDAE] px-6 py-3 rounded-lg hover:bg-[#FFDDAE] hover:text-black transition-colors duration-300">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
