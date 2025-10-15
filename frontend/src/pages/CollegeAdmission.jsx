import { lazy } from "react";

// lazy load (code-splitting)
const MbbsInIndia = lazy(() => import("./MbbsInIndia"));
const MbbsInAbroad = lazy(() => import("./MbbsInAbroad"));
const Engineering = lazy(() => import("./Engineering"));
const Management = lazy(() => import("./Management"));
const Pharmacy = lazy(() => import("./Pharmacy"));
const Law = lazy(() => import("./Law"));
const Teaching = lazy(() => import("./Teaching"));
const Phd = lazy(() => import("./Phd"));

export const CourseComponentsForCollege = {
  MBBS: MbbsInIndia,
  "MBBS ABROAD": MbbsInAbroad,
  ENGINEERING: Engineering,
  MANAGEMENT: Management,
  PHARMACY: Pharmacy,
  LAW: Law,
  TEACHING: Teaching,
  PHD: Phd,
};
