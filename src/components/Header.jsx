import React from "react";
import swimmastery from "../images/swimmastery.png";

const Header = () => {
  return (
    <div className="w-full bg-white p-5">
      <img src={swimmastery} className="w-1/2 md:w-1/4" />
    </div>
  );
};

export default Header;
