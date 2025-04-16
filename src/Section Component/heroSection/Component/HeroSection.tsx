import React from "react";
import ButtonComponent from "../../../Component/Button/ButtonComponent";

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
        <ButtonComponent btnText={"Live Demo"} />
        <ButtonComponent
          btnText={" Buy Now"}
          isBorderButton={true}
          btnColor="#FFDDAE"
        />
      </div>
    </section>
  );
};

export default HeroSection;
