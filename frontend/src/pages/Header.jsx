import React from "react";
import PromotionStrip from "./PromotionStrip";
import Navbar from "./NavBar.jsx";

const Header = () => {
  return (
    <header>
      <div className="hidden lg:block">
        {/* <PromotionStrip /> */}
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
