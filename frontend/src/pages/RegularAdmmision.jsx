import React, { lazy, Suspense, useMemo } from "react";

/* ---------- Lazy imports: same directory ---------- */
const AiUniversity = lazy(() => import("./AiUniversity"));
const ArhamInternationalInstituteOfInformationSecurity = lazy(() =>
  import("./ArhamInternationalInstituteOfInformationSecurity")
);
const DrAPJAbdulKalamUniversity = lazy(() =>
  import("./DrAPJAbdulKalamUniversity")
);
const PuneInstituteOfBusinessManagement = lazy(() =>
  import("./PuneInstituteOfBusinessManagement")
);
const ParulUniversity = lazy(() => import("./ParulUniversity"));
const ChhatrapatiShivajiMaharajUniversity = lazy(() =>
  import("./ChhatrapatiShivajiMaharajUniversity")
);
const TransStadiaInstitute = lazy(() => import("./TransStadiaInstitute"));
const OrientalUniversity = lazy(() => import("./OrientalUniversity"));
const NavsahyadriGroupOfInstitutes = lazy(() =>
  import("./NavsahyadriGroupOfInstitutes")
);
const YenepoyaUniversity = lazy(() => import("./YenepoyaUniversity"));
const ISMSGroupOfInstitutions = lazy(() => import("./ISMSGroupOfInstitutions"));
const VishweshraiyaGroupOfInstitutions = lazy(() =>
  import("./VishweshraiyaGroupOfInstitutions")
);
const SVyasaUniversity = lazy(() => import("./SVyasaUniversity"));
const SAGEUniversity = lazy(() => import("./SAGEUniversity"));
const GHRaisoniInternationalSkillTechUniversity = lazy(() =>
  import("./GHRaisoniInternationalSkillTechUniversity")
);
const PillaiCollegeOfEngineering = lazy(() =>
  import("./PillaiCollegeOfEngineering")
);

/* ---------- slug + aliases ---------- */
const slugify = (s = "") =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[\.\(\)]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const ALIASES = {
  "pune-institute-of-management-studies":
    "pune-institute-of-business-management",
  "pune-institute-of-management": "pune-institute-of-business-management",
  "ai-university": "ai-universal-university",
  "a-i-universal-university": "ai-universal-university",
  "gh-raisoni-skill-tech-university":
    "g-h-raisoni-international-skill-tech-university",
  "g-h-raisoni-skill-tech-university":
    "g-h-raisoni-international-skill-tech-university",
  "transstadia-institute": "transstadia-institute",
  "arham-international-institute-of-information-security":
    "arham-international-institute-of-information-security",
  "dr-a-p-j-abdul-kalam-university": "dr-a-p-j-abdul-kalam-university",
  "isms-group-of-institutions": "isms-group-of-institutions",
  "vishweshraiya-group-of-institutions": "vishweshraiya-group-of-institutions",
  "s-vyasa-university": "s-vyasa-university",
  "sage-university": "sage-university",
  "oriental-university": "oriental-university",
  "navsahyadri-group-of-institutes": "navsahyadri-group-of-institutes",
  "yenepoya-university": "yenepoya-university",
  "chhatrapati-shivaji-maharaj-university":
    "chhatrapati-shivaji-maharaj-university",
  "parul-university": "parul-university",
  "pillai-college-of-engineering": "pillai-college-of-engineering",
  "ai-universal-university": "ai-universal-university",
};

export const normalizeKeyForRegular = (label) => {
  console.log("Im In normalize");
  console.log("label : ", label);
  const raw = slugify(label);
  return ALIASES[raw] || raw;
};

/* ---------- registry: slug -> component ---------- */
export const CourseComponentsForRegular = {
  // Regular Admission components
  "ai-universal-university": AiUniversity,
  "arham-international-institute-of-information-security":
    ArhamInternationalInstituteOfInformationSecurity,
  "dr-a-p-j-abdul-kalam-university": DrAPJAbdulKalamUniversity,
  "pune-institute-of-business-management": PuneInstituteOfBusinessManagement,
  "parul-university": ParulUniversity,
  "chhatrapati-shivaji-maharaj-university": ChhatrapatiShivajiMaharajUniversity,
  "transstadia-institute": TransStadiaInstitute,
  "oriental-university": OrientalUniversity,
  "navsahyadri-group-of-institutes": NavsahyadriGroupOfInstitutes,
  "yenepoya-university": YenepoyaUniversity,
  "isms-group-of-institutions": ISMSGroupOfInstitutions,
  "vishweshraiya-group-of-institutions": VishweshraiyaGroupOfInstitutions,
  "s-vyasa-university": SVyasaUniversity,
  "sage-university": SAGEUniversity,
  "g-h-raisoni-international-skill-tech-university":
    GHRaisoniInternationalSkillTechUniversity,
  "pillai-college-of-engineering": PillaiCollegeOfEngineering,
};
