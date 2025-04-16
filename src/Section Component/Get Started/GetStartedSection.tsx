import React from "react";
import ButtonComponent from "../../Component/Button/ButtonComponent";

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

        <ButtonComponent
          btnText={"Start Your Journey"}
          borderRadius="50"
          py="16"
          px="30"
          btnColor="#000"
          hoverColor="#1F2937"
          onClick={()=>{}}
          
        />
      </div>
    </section>
  );
};

export default GetStartedSection;
