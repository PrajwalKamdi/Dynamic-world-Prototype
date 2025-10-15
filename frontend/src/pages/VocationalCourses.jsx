import { lazy } from "react";

// lazy load (code-splitting)
const DVOC = lazy(() => import("./DVOC"));
const BVOC = lazy(() => import("./BVOC"));
const MVOC = lazy(() => import("./MVOC"));
const Diploma = lazy(() => import("./Diploma"));
const Skill = lazy(() => import("./SkillCourses"));
const Upgrad = lazy(() => import("./Upgrad"));


export const CourseComponents = {
  DVOC: DVOC,
  BVOC: BVOC,
  MVOC: MVOC,
  DIPLOMA: Diploma,
  "SKILL COURSE": Skill,
  UPGRAD: Upgrad,
};
