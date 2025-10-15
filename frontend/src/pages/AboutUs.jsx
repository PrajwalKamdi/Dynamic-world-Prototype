import React from "react";
import AboutUs01 from "../components/AboutUs01";
import AboutUs02 from "../components/AboutUs02";
import AboutUs03 from "../components/AboutUs03";
import AboutUs04 from "../components/AboutUs04";
import AboutUs05 from "../components/AboutUs05";
import AboutUs06 from "../components/AboutUs06";
import Branches from "./Branches";

const AboutUs = () => {
  return (
    <div>
      <AboutUs01 />
      <AboutUs02 />
      <AboutUs03 />
      <AboutUs04 />
      <AboutUs05 />
      {/* <AboutUs06 /> */}
      <Branches/>
    </div>
  );
};

export default AboutUs;
