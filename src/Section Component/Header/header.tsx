import React from "react";
import ButtonComponent from "../../Component/Button/ButtonComponent";
import MenuItem from "./Component/manuItem";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white border-b-2 border-gray-200 text-black">
      <div className="text-2xl text-black font-bold">Themefrey</div>
      <nav className="space-x-6">
        <MenuItem itemText={"Home"} link={"#"} />
        <MenuItem itemText={"Features"} link={"#features"} />
        <MenuItem itemText={"Demos"} link={"#demos"} />
        <MenuItem itemText={"Pricing"} link={"#pricing"} />
        <MenuItem itemText={"Contact"} link={"#contact"} />
      </nav>
      <ButtonComponent btnText={"Get Started"} onClick={() => {}} />
    </header>
  );
};

export default Header;
