import StudyAbroadGirl from "../assets/StudyAbroadGirl.svg";
import StudyAbroadServices from "../components/StudyAbroadServices";
import StudyAbroadTestomonials from "../components/StudyAbroadTestomonials";
import WhatWeProvide from "../components/StudyAbroadWhatWeProvide";
const StudyAbroadHomePage = () => {
  return (
    <div>
      <div>
        <img src={StudyAbroadGirl} alt="StudyAbroad Banner" />
      </div>
      <StudyAbroadServices />
      <WhatWeProvide />
      <StudyAbroadTestomonials />
    </div>
  );
};

export default StudyAbroadHomePage;
