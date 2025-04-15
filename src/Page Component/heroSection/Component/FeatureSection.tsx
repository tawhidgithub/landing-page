import React from "react";

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 bg-[#FBFBFB] text-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Features You'll Love</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-[#FFDDAE] text-5xl mb-4">💡</div>
          <h3 className="font-semibold text-xl mb-2">Creative Design</h3>
          <p className="text-gray-600">Modern layouts and stunning visuals.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-[#D4F6FF] text-5xl mb-4">⚡</div>
          <h3 className="font-semibold text-xl mb-2">Speed Optimized</h3>
          <p className="text-gray-600">Blazing fast performance.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-[#C6E7FF] text-5xl mb-4">🔧</div>
          <h3 className="font-semibold text-xl mb-2">Easy Customization</h3>
          <p className="text-gray-600">
            Flexible and beginner-friendly settings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
