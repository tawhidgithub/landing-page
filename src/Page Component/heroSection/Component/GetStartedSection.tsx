import React from "react";

const GetStartedSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#FFDDAE] to-[#C6E7FF] text-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-gray-800 mb-8">
          Join us today and elevate your projects with the power of Themefrey's
          flexible WordPress themes. Experience seamless design and unmatched
          performance.
        </p>
        <button className="bg-black cursor-pointer text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors duration-300">
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default GetStartedSection;
