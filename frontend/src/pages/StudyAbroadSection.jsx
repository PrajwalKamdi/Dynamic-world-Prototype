import { lazy } from "react";

// lazy load (code-splitting)
const STUDYABROADHOMEPAGE = lazy(() => import("./StudyAbroadHomePage"));
const STUDYABROADIMMIGRATION = lazy(() => import("./StudyAbroadImmigration"));
const STUDYABROADVISASERVICES = lazy(() => import("./StudyAbroadVisaServices"));
const STUDYABROADATTESTATIONAPOSTILE = lazy(() =>
  import("./StudyAbroadAttestationApostile")
);
const STUDYABROADHOMETUITION = lazy(() => import("./StudyAbroadHomeTuition"));
const Upgrad = lazy(() => import("./Upgrad"));

export const CourseComponentsStudyAbroad = {
  HOME: STUDYABROADHOMEPAGE,
  IMMIGRATION: STUDYABROADIMMIGRATION,
  "VISA SERVICES": STUDYABROADVISASERVICES,
  "ATTESTATION & APOSTILE": STUDYABROADATTESTATIONAPOSTILE,
  "ONLINE & HOME TUITION": STUDYABROADHOMETUITION,
};
