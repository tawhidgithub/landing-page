import React, { FC } from "react";
import FeatureBoxProps from "../interface/Feature.interface";

const FeatureBox: FC<FeatureBoxProps> = ({ icon, title, subTitle }) => {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="text-[#FFDDAE] text-5xl mb-4">{icon}</div>
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{subTitle}</p>
    </div>
  );
};

export default FeatureBox;
