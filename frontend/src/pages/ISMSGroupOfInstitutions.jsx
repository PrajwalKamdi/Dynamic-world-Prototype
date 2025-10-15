import React from "react";
import ISMSGroupOfInstitutions01 from "../components/ISMSGroupofInstitutions01";
import ISMSGroupOfInstitutions02 from "../components/ISMS02";
import ISMSGroupOfInstitutions03 from "../components/ISMS03";
import ISMSGroupOfInstitutions04 from "../components/ISMS04";
import WarningSection from '../components/WarningSection'

const ISMSGroupOfInstitutions = () => {
  return (
    <div>
      <ISMSGroupOfInstitutions01 />
      <ISMSGroupOfInstitutions02/>
      <ISMSGroupOfInstitutions03/>
      <ISMSGroupOfInstitutions04/>
      <WarningSection/>
    </div>
  );
};

export default ISMSGroupOfInstitutions;
