import React from "react";
import SkillCourse01 from "../components/SkillCourse01";
import SkillCourse02 from "../components/SkillCourse02";
import SkillCourse03 from "../components/SkillCourse03";
import UniversityStrip from "../components/UniversitityStrip";

const SkillCourses = () => {
  return (
    <div>
      <SkillCourse01 />
      <UniversityStrip />
      <SkillCourse02 />
      <SkillCourse03 />
    </div>
  );
};

export default SkillCourses;
