import React from "react";

const UAEFlag =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760432749/Flag_of_the_United_Arab_Emirates_wkwp6p.svg";

const Immigration03 = () => {
  const jobDetails = [
    {
      category: "Job Positions",
      details:
        "Cashier, Accountant, BPO/KPO, Sales & Marketing, Executives in Malls, Store Supervisor, Store Manager, Administration, Factory Supervisor, A/C Technicians",
    },
    { category: "Salary Range", details: "INR 40,000 – 50,000 / Month" },
    { category: "Duration of Employment Visa", details: "2 Years" },
    { category: "Insurance & Medical", details: "Provided by the Company" },
    { category: "Total Leaves/Year", details: "35 Days" },
    { category: "Accommodation/Food", details: "Provided by the Company" },
    { category: "Process Time", details: "45 Days" },
    { category: "Job Type", details: "Skilled and Professional Positions" },
  ];

  const servicesProvided = [
    { category: "Service Agreement", details: "2 Years" },
    { category: "Visa Process", details: "Work Permit" },
    { category: "Flight Tickets", details: "Included" },
    { category: "Travel Insurance", details: "Provided" },
    { category: "Process Time", details: "1 Month" },
    { category: "Accommodation", details: "Provided" },
  ];

  return (
    <>
      {/* Embedded CSS to mirror Europe component */}
      <style>{`
        .page-container {
          min-height: 100vh;
          background-color: #3E96F4; /* brand blue to match your theme */
          color: white;
          padding: 2rem;
          font-family: Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
        }
        .header {
          display: flex;
          align-items: center;
          gap: 0.75rem; /* 12px */
          margin-bottom: 1.5rem; /* 24px */
          padding-bottom: 1rem; /* 16px */
          border-bottom: 1px solid rgba(255,255,255,0.3);
        }
        .flag {
          width: 2.5rem; /* 40px */
          height: auto;
          border-radius: 6px;
          box-shadow: 0 1px 0 rgba(255,255,255,0.4) inset, 0 4px 12px rgba(0,0,0,0.15);
        }
        .title {
          font-size: 1.875rem; /* 30px */
          font-weight: 700;
        }
        .section-title {
          font-size: 1.25rem; /* 20px */
          font-weight: 700;
          margin-bottom: 0.75rem; /* 12px */
        }
        .table-wrapper {
          background-color: rgba(255, 255, 255, 0.10); /* bg-white/10 */
          border: 1px solid rgba(255,255,255,0.20);    /* ring */
          border-radius: 1rem; /* 16px */
          padding: 1.25rem; /* 20px */
          margin-bottom: 1.75rem; /* 28px */
          backdrop-filter: saturate(140%) blur(2px);
        }
        .info-table {
          width: 100%;
          border-collapse: collapse;
          border-radius: 0.75rem; /* 12px */
          overflow: hidden;
        }
        .info-table tr + tr {
          border-top: 1px solid rgba(255, 255, 255, 0.25);
        }
        .info-table td {
          padding: 0.75rem 1rem; /* py-3 px-4 */
          vertical-align: top;
        }
        .category-cell {
          font-weight: 600;
          width: 33.33%;
          border-right: 1px solid rgba(255, 255, 255, 0.25);
        }

        /* Small screens tweaks */
        @media (max-width: 640px) {
          .title { font-size: 1.5rem; }
          .table-wrapper { padding: 1rem; }
          .info-table td { padding: 0.65rem 0.75rem; }
        }
      `}</style>

      <div className="page-container">
        {/* Header */}
        <div className="header">
          <img src={UAEFlag} alt="UAE Flag" className="flag" />
          <h1 className="title">DUBAI</h1>
        </div>

        {/* Job Information */}
        <h2 className="section-title">Job Information</h2>
        <div className="table-wrapper">
          <table className="info-table">
            <tbody>
              {jobDetails.map((row, i) => (
                <tr key={i}>
                  <td className="category-cell">{row.category}</td>
                  <td>{row.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* What Dynamic World is providing */}
        <h2 className="section-title">What Dynamic World is providing?</h2>
        <div className="table-wrapper">
          <table className="info-table">
            <tbody>
              {servicesProvided.map((row, i) => (
                <tr key={i}>
                  <td className="category-cell">{row.category}</td>
                  <td>{row.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* (Optional) CTA row to match your other pages */}
        {/* <div style={{display:'flex', gap:'12px', marginTop:'8px', flexWrap:'wrap'}}>
          <a href="#apply" style={{background:'#fff', color:'#31393C', fontWeight:600, padding:'8px 14px', borderRadius:'10px', textDecoration:'none', boxShadow:'0 4px 10px rgba(0,0,0,0.15)'}}>Apply Now</a>
          <a href="#consultation" style={{border:'1px solid rgba(255,255,255,0.6)', color:'#fff', fontWeight:600, padding:'8px 14px', borderRadius:'10px', textDecoration:'none'}}>Free Consultation</a>
        </div> */}
      </div>
    </>
  );
};

export default Immigration03;
