import React, { FC } from "react";
import PricingBoxProps from "../interface/pricing.interface";
import ButtonComponent from "../../../Component/Button/ButtonComponent";

const PricingBox: FC<PricingBoxProps> = ({
  recommended,
  title,
  price,
  fOne,
  fTwo,
  fThree,
  btnText,
  btnBackColor,
  btnHoverColor,
  lowPricing,
  btnTextColor,
}) => {
  return (
    <div
      className="bg-[#FBFBFB] shadow-lg p-8 rounded-lg text-center border-t-4  hover:shadow-xl transition-shadow duration-300"
      style={{
        backgroundColor: recommended ? "#D4F6FF" : "#FBFBFB",
        borderColor: recommended
          ? "#3B82F6"
          : lowPricing
          ? "#FFDDAE"
          : "#C6E7FF",
      }}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-4xl font-extrabold mb-4">{price}</p>
      <ul className="text-gray-600 mb-6">
        <li>✅{fOne}</li>
        <li>✅{fTwo}</li>
        <li>✅{fThree}</li>
      </ul>
      <ButtonComponent
        btnText={btnText}
        btnColor={btnBackColor}
        textColor={btnTextColor}
        hoverColor={btnHoverColor}
        onClick={()=>{}}
      />
    </div>
  );
};

export default PricingBox;
