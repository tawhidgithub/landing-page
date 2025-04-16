import React from "react";
import PricingBox from "./Component/pricingBoxComponent";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white text-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Choose Your Plan</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        <PricingBox
          recommended={false}
          title={"Starter Plan"}
          price={"$19"}
          fOne={"Basic Features"}
          fTwo={"Community Support"}
          fThree={"Limited Access"}
          btnText={"Get Started"}
          btnBackColor={"#FFDDAE"}
          btnHoverColor={"#FFCC88"}
          btnTextColor="#000"
          lowPricing
        />
        <PricingBox
          recommended
          title={"Professional Plan"}
          price={"$49"}
          fOne={"All Basic Features"}
          fTwo={"Priority Support"}
          fThree={"Full Access"}
          btnText={"Buy Now"}
          btnBackColor={"#1E88E5"}
          btnHoverColor={"#4299e1"}
          btnTextColor="#fff"
          lowPricing
        />
        <PricingBox
          recommended={false}
          title={"Enterprise Plan"}
          price={"$99"}
          fOne={"Advanced Features"}
          fTwo={"24/7 Support"}
          fThree={"Unlimited Access"}
          btnText={"Contact Us"}
          btnBackColor={"#FFDDAE"}
          btnHoverColor={"#FFCC88"}
          btnTextColor="#000"
          lowPricing={false}
        />
      </div>
    </section>
  );
};

export default PricingSection;
