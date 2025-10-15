import React from "react";
import UniversityStrip from "./UniversitityStrip";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { use } from "react";
import MBBBTable from "./MBBBTable";
import MBBSHeader from "./MBBSHeader";
const MBBSIndia02 = () => {
  const mongoUrl = import.meta.env.VITE_BACKEND_API;
  const [deemedClg, setDeemedClg] = useState([]);
  const [mh_gov, setMh_Gov] = useState([]);
  const [mh_pvt, setMh_pvt] = useState([]);
  const [bds_mh_pvt, setBDS_MH_PVT] = useState([]);
  const [bds_gov, setBDS_GOV] = useState([]);
  const [bams_pvt, setBAMS_PVT] = useState([]);
  const [bams_gov, setBAMS_GOV] = useState([]);
  const [bhms_gov, setBhMS_GOV] = useState([]);
  const [bhms_pvt, setBhMS_PVT] = useState([]);
  const handleApi = async () => {
    try {
      const { data } = await axios.get(`${mongoUrl}/getAllMBBS`);
      const allData = data?.data || [];
      const deemed = allData.filter((clg) => clg.type === "deemed");
      const mhGov = allData.filter((clg) => clg.type === "mh_gov");
      const mhPvt = allData.filter((clg) => clg.type === "mh_pvt");
      const bdsPvt = allData.filter((clg) => clg.type === "bds_mh_pvt");
      const bdsGov = allData.filter((clg) => clg.type === "bds_mh_gov");
      const bamsPvt = allData.filter((clg) => clg.type === "bams_mh_pvt");
      const bamsGov = allData.filter((clg) => clg.type === "bams_mh_gov");
      const bhmsGov = allData.filter((clg) => clg.type === "bhms_mh_gov");
      const bhmsPvt = allData.filter((clg) => clg.type === "bhms_mh_pvt");
      setDeemedClg(deemed);
      setMh_Gov(mhGov);
      setMh_pvt(mhPvt);
      setBDS_MH_PVT(bdsPvt);
      setBDS_GOV(bdsGov);
      setBAMS_PVT(bamsPvt);
      setBAMS_GOV(bamsGov);
      setBhMS_GOV(bhmsGov);
      setBhMS_PVT(bhmsPvt);

      console.log("✅ Data categorized successfully:");
      console.table({
        deemed: deemed.length,
        mh_gov: mhGov.length,
        mh_pvt: mhPvt.length,
        bds_mh_pvt: bdsPvt.length,
        bds_mh_gov: bdsGov.length,
        bams_mh_pvt: bamsPvt.length,
        bams_mh_gov: bamsGov.length,
        bhms_mh_gov: bhmsGov.length,
        bhms_mh_pvt: bhmsPvt.length,
      });
    } catch (error) {
      console.error("❌ Error fetching API:", error);
    }
  };

  useEffect(() => {
    handleApi();
  }, []);
  return (
    <div className="max-w-7xl m-5 ">
      {/* <MBBSHeader heading={heading} tags={tags} /> */}
      <MBBBTable
        heading={"TOP MBBS Colleges in India"}
        tags={
          "Approved by UGC, BCI, PCI, NCTE, AIU, NBA, AICTE-accredited, recognized degrees, high-quality education."
        }
        subHeading={"MBBS Deemed Colleges in India"}
        data={deemedClg}
      />
      <MBBBTable
        tags={
          "UGC, AICTE, BCI, NCTE, PCI-accredited, research awards, engineering excellence, regular education approved."
        }
        subHeading={"MBBS Maharashtra Govt. Colleges"}
        data={mh_gov}
      />

      <MBBBTable
        tags={
          "UGC, AICTE, BCI, NCTE, PCI-accredited, research awards, engineering excellence, regular education approved."
        }
        subHeading={"BDS Maharashtra Pvt. Colleges"}
        data={bds_mh_pvt}
      />
      <MBBBTable
        tags={
          "UGC, AICTE, BCI, NCTE, PCI-accredited, research awards, engineering excellence, regular education approved."
        }
        subHeading={"BDS Maharashtra Govt. Colleges"}
        data={bds_gov}
      />
      <MBBBTable
        tags={
          "UGC, AICTE, BCI, NCTE, PCI-accredited, research awards, engineering excellence, regular education approved."
        }
        subHeading={"BAMS Maharashtra Pvt. Colleges"}
        data={bams_pvt}
      />
      <MBBBTable
        tags={
          "UGC, AICTE, BCI, NCTE, PCI-accredited, research awards, engineering excellence, regular education approved."
        }
        subHeading={"BAMS Maharashtra Govt. Colleges"}
        data={bams_gov}
      />
      <MBBBTable
        tags={
          "UGC, AICTE, BCI, NCTE, PCI-accredited, research awards, engineering excellence, regular education approved."
        }
        subHeading={"BHMS Maharashtra Govt. College"}
        data={bhms_gov}
      />
      <MBBBTable
        tags={
          "UGC, AICTE, BCI, NCTE, PCI-accredited, research awards, engineering excellence, regular education approved."
        }
        subHeading={"BHMS Maharashtra Pvt. Colleges"}
        data={bhms_pvt}
      />
    </div>
  );
};

export default MBBSIndia02;
