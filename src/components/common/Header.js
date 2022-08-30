import React from "react";
import logo from "../../assets/images/atlan-logo.svg";

const Header = () => {
  return (
    <div className="border-b border-outline-light">
      <div className="container py-16">
        <img
          src={logo}
          alt="Atlan Logo"
          className="w-auto h-20"
          width="65"
          height="20"
        />
      </div>
    </div>
  );
};

export default Header;
