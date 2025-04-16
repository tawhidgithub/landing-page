import React from "react";
import FeatureBox from "./Component/featureBox";

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 bg-[#FBFBFB] text-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Features You'll Love</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <FeatureBox
          title={"Creative Design"}
          subTitle={"Modern layouts and stunning visuals."}
          icon={"💡"}
        />
        <FeatureBox
          title={"Speed Optimize"}
          subTitle={"Blazing fast performance."}
          icon={"⚡"}
        />
        <FeatureBox
          title={"Easy Customization"}
          subTitle={"Flexible and beginner-friendly settings."}
          icon={"🔧"}
        />
      </div>
    </section>
  );
};

export default FeatureSection;
