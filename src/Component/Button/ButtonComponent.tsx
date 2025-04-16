import React, { FC } from "react";

import ButtonProps from "./interface";

const ButtonComponent: FC<ButtonProps> = ({
  borderRadius = "8",
  btnColor = "#3B82F6",
  btnText = "",
  textColor = "white",
  px,
  py,
  hoverColor = "#60A5FA",
  isBorderButton = false,
  borderBtnHoverColor = "#FFDDAE",
  onClick
  
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <button
    onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={` hover:bg-${hoverColor} transition-colors cursor-pointer duration-300 ${
        isBorderButton ? "border" : ""
      }`}
      style={{
        backgroundColor: isBorderButton
          ? hovered
            ? borderBtnHoverColor
            : undefined
          : hovered
          ? hoverColor
          : btnColor,
        borderColor: isBorderButton ? "#FFDDAE" : undefined,
        color: isBorderButton ? "#000" : textColor,
        padding: `${py ?? 8}px ${px ?? 16}px`,
        borderRadius: `${borderRadius}px`,
      }}
    >
      {btnText}
    </button>
  );
};

export default ButtonComponent;
