import React, { FC } from "react";
import ThemeBoxProps from "../interface/theamBox.intreface";

const ThemeBox: FC<ThemeBoxProps> = ({ themeImage }) => {
  return (
    <div className="bg-white cursor-pointer shadow-lg rounded-lg h-48 transition-all duration-300 ease-in-out transform hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center overflow-hidden">
      <span className="text-gray-400">
        <img src={themeImage} className="h-48 rounded" alt="" />
      </span>
    </div>
  );
};

export default ThemeBox;
