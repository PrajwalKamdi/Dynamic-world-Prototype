import axios from "axios";
import { useEffect, useState } from "react";
import MBBBTable from "./MBBBTable";
import EngineeringTable from "./EngineeringTable";
const Engineering02 = () => {
  const mongoUrl = import.meta.env.VITE_BACKEND_API;
  const [mumbai, setMumbai] = useState([]);
  const [pune, setPune] = useState([]);
  const [other, setOther] = useState([]);
  const [IIT, SetIIT] = useState([]);
  const [IIIT, SetIIIT] = useState([]);
  const [nit, setNit] = useState([]);
  const handleApi = async () => {
    try {
      const { data } = await axios.get(`${mongoUrl}/getAllEngineering`);
      const allData = data?.data || [];
      const mumbai = allData.filter((clg) => clg.city === "Mumbai");
      const pune = allData.filter((clg) => clg.city === "Pune");
      const other = allData.filter(
        (clg) => clg.city != "Pune" && clg.city != "Mumbai"
      );
      // const bdsPvt = allData.filter((clg) => clg.type === "bds_mh_pvt");
      // const bdsGov = allData.filter((clg) => clg.type === "bds_mh_gov");
      // const bamsPvt = allData.filter((clg) => clg.type === "bams_mh_pvt");
      // const bamsGov = allData.filter((clg) => clg.type === "bams_mh_gov");
      // const bhmsGov = allData.filter((clg) => clg.type === "bhms_mh_gov");
      // const bhmsPvt = allData.filter((clg) => clg.type === "bhms_mh_pvt");

      setMumbai(mumbai);
      setPune(pune);
      setOther(other);
      console.log("✅ Data categorized successfully:");
    } catch (error) {
      console.error("❌ Error fetching API:", error);
    }
  };

  useEffect(() => {
    handleApi();
  }, []);
  return (
    <div className="max-w-7xl lg:m-5  ">
      {/* <MBBSHeader heading={heading} tags={tags} /> */}
      <EngineeringTable
        tags={
          "Approved by UGC, BCI, PCI, NCTE, AIU, NBA, AICTE-accredited, recognized degrees, high-quality education."
        }
        subHeading={"Top Engineering Colleges In Mumbai"}
        data={mumbai}
      />
      <EngineeringTable
        tags={
          "UGC, AICTE, BCI, NCTE, PCI-accredited, research awards, engineering excellence, regular education approved."
        }
        subHeading={"Top Engineering Colleges In Pune"}
        data={pune}
      />

      <EngineeringTable
        tags={
          "UGC, AICTE, BCI, NCTE, PCI-accredited, research awards, engineering excellence, regular education approved."
        }
        subHeading={
          "Top Engineering Colleges In Maharashtra Except Pune & Mumbai"
        }
        data={other}
      />
    </div>
  );
};

export default Engineering02;
