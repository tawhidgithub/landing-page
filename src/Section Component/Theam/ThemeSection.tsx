import React from "react";

import ThemeImageOne from "../../assets/Image/theme1.jpeg";
import ThemeImageTwo from "../../assets/Image/theme2.jpg";
import ThemeImageThree from "../../assets/Image/theme3.jpg";
import ThemeBox from "./Component/ThemeBox";
import ButtonComponent from "../../Component/Button/ButtonComponent";

const ThemeSection = () => {
  return (
    <section id="demos" className="py-20 bg-[#FBFBFB] text-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Theme Previews</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <ThemeBox themeImage={ThemeImageOne} />
        <ThemeBox themeImage={ThemeImageTwo} />
        <ThemeBox themeImage={ThemeImageThree} />
      </div>
      <div className="text-center mt-8">
        <ButtonComponent
          btnText={" View All Demos"}
          btnColor="#FFDDAE"
          textColor="#000"
          hoverColor="#FFCC88"
        />
      </div>
    </section>
  );
};

export default ThemeSection;
