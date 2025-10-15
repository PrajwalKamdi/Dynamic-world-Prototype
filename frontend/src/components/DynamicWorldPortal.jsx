import axios from "axios";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const DynamicWorldPortal = () => {
  const [selected, setSelected] = useState({ type: null, item: null });
  const [expandedItems, setExpandedItems] = useState({});
  const [onlineUniversity, setOnlineUniversity] = useState([]);
  const [distanceUniversity, setDistanceUniversity] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [universityData, setUniversityData] = useState(null);
  const [countryData, setCountryData] = useState(null);

  const api = import.meta.env.VITE_BACKEND_API || "https://dummyapi.io";

  // Track/cancel in-flight request when user clicks quickly
  const reqAbortRef = useRef(null);

  const dedupe = (arr) => Array.from(new Set(arr.filter(Boolean))).sort();
  const tidy = (s) => (typeof s === "string" ? s.trim() : s);

  // fetch online universities
  const handleApi01 = useCallback(async () => {
    try {
      const res = await axios.get(`${api}/onlineUniversities`);
      const universities = res.data?.data || [];
      setOnlineUniversity(
        dedupe(universities.map((u) => tidy(u.universityName)))
      );
    } catch (e) {
      console.error("Error fetching online universities:", e);
      setOnlineUniversity([]);
    }
  }, [api]);

  // fetch distance universities
  const handleApi02 = useCallback(async () => {
    try {
      const res = await axios.get(`${api}/getAllUniversities`);
      const universities = res.data?.data || [];
      setDistanceUniversity(
        dedupe(universities.map((u) => tidy(u.universityName)))
      );
    } catch (e) {
      console.error("Error fetching distance universities:", e);
      setDistanceUniversity([]);
    }
  }, [api]);

  useEffect(() => {
    (async () => {
      try {
        await Promise.all([handleApi01(), handleApi02()]);
      } catch (e) {
        console.error("Error bootstrapping data:", e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [handleApi01, handleApi02]);

  const vocationCourses = useMemo(
    () => ["DVOC", "BVOC", "MVOC", "DIPLOMA", "SKILL COURSE", "UPGRAD"],
    []
  );
  const regularFullTimeEducation = useMemo(
    () => [
      "Pillai College of Engineering",
      "Parul University",
      "Chhatrapati Shivaji Maharaj University",
      "TransStadia Institute",
      "Dr A P J Abdul Kalam University",
      "Pune Institute Of Management Studies",
      "AI Universal University",
      "Arham International Institute of Information Security",
      "Oriental University",
      "Navsahyadri Group of Institutes",
      "Yenepoya University",
      "ISMS Group of Institutions",
      "Vishweshraiya Group of Institutions",
      "S-VYASA University",
      "SAGE University",
      "GH Raisoni Skill Tech University",
    ],
    []
  );

  const collegeAdmission = useMemo(
    () => [
      "MBBS",
      "MBBS Abroad",
      "Engineering",
      "Management",
      "Pharmacy",
      "Law",
      "Teaching",
      "PHD",
    ],
    []
  );
  const countries = [
    "Austria",
    "Australia",
    "Czech Republic",
    "Dubai",
    "Europe",
    "France",
    "Germany",
    "Italy",
    "Ireland",
    "Norway",
    "NewZealand",
    "Singapure",
    "Sweden",
  ];
  const studyAbroad = useMemo(
    () => [
      "Home",
      "Immigration",
      "Visa Services",
      "Attestation & Apostile",
      "Online & Home Tuition",
    ],
    []
  );
  const sidebarData = useMemo(
    () => [
      {
        title: "Career Guidance",
        items: [
          "Career Counseling",
          "Job Opportunities",
          "Interview Preparation",
          "Resume Building",
        ],
      },
      {
        title: "Online Universities",
        type: "Online University",
        items: onlineUniversity,
      },
      {
        title: "Distance University",
        type: "Distance University",
        items: distanceUniversity,
      },
      {
        title: "Vocational Courses",
        type: "Vocational Courses",
        items: vocationCourses,
      },
      // TODO: plug real data when ready
      {
        title: "Regular Admission",
        type: "Regular Admission",
        items: regularFullTimeEducation,
      },
      {
        title: "College Admission",
        type: "College Admission",
        items: collegeAdmission,
      },
      {
        title: "Study Abroad",
        type: "Study Abroad",
        items: studyAbroad,
      },
      {
        title: "Study Abroad Countries",
        type: "Study Abroad Countries",
        items: countries,
      },
    ],
    [
      onlineUniversity,
      distanceUniversity,
      vocationCourses,
      regularFullTimeEducation,
      collegeAdmission,
      studyAbroad,
      countries,
    ]
  );

  const toggleExpand = useCallback((index) => {
    setExpandedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  }, []);

  const handleItemClick = useCallback(
    async (item, type) => {
      setSelected({ type, item });
      setError(null);

      // Cancel previous request if any
      if (reqAbortRef.current) reqAbortRef.current.abort();
      reqAbortRef.current = null;

      switch (type) {
        case "Online University":
        case "Distance University": {
          try {
            setIsLoading(true);

            // new controller for this click
            const controller = new AbortController();
            reqAbortRef.current = controller;

            const endpoint =
              type === "Online University"
                ? "onlineUniversity"
                : "distanceUniversity";
            const { data } = await axios.get(`${api}/${endpoint}`, {
              params: { universityName: tidy(item) },
              signal: controller.signal, // axios >=0.22
            });

            // if not aborted, update state
            setUniversityData(data?.data ?? null);
          } catch (e) {
            // Ignore cancellations; surface real errors
            if (e?.name !== "CanceledError" && e?.code !== "ERR_CANCELED") {
              console.error(e);
              setError("Failed to fetch university data.");
              setUniversityData(null);
            }
          } finally {
            setIsLoading(false);
          }
          break;
        }

        case "Study Abroad Countries": {
          console.log(type, item);
          try {
            setIsLoading(true);
            const controller = new AbortController();
            reqAbortRef.current = controller;
            const endpoint = `country?countryName=${item}`;
            const { data } = await axios.get(`${api}/country`, {
              params: { countryName: tidy(item) },
              signal: controller.signal, // axios >=0.22
            });
            setCountryData(data.data);
          } catch (e) {
            // Ignore cancellations; surface real errors
            if (e?.name !== "CanceledError" && e?.code !== "ERR_CANCELED") {
              console.error(e);
              setError("Failed to fetch university data.");
              setUniversityData(null);
            }
          } finally {
            setIsLoading(false);
          }
        }

        default: {
          // Future categories
          setUniversityData(null);
          break;
        }
      }
    },
    [api]
  );

  return (
    <div className="flex flex-col lg:flex-row p-4 parent ">
      <div className="h-[inherit]">
        <Sidebar
          sidebarData={sidebarData}
          expandedItems={expandedItems}
          setExpandedItems={setExpandedItems}
          onlineUniversity={onlineUniversity}
          distanceUniversity={distanceUniversity}
          toggleExpand={toggleExpand}
          handleItemClick={handleItemClick}
          isLoading={isLoading}
        />
      </div>

      <div className="flex-1 bg-white shadow  ml-4 rounded-lg">
        <MainContent
          selected={selected}
          universityData={universityData}
          isLoading={isLoading}
          error={error}
          countryData={countryData}
        />
      </div>
    </div>
  );
};

export default DynamicWorldPortal;
