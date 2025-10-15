import React from "react";

const EuropeFlag =
  "https://res.cloudinary.com/dtaitsw4r/image/upload/v1760446180/Flag_of_Europe_li6ahv.svg";

const ImmigrationEurope = () => {
  const jobDetails = [
    {
      category: "Job Positions",
      details:
        "Cashier, Accountant, Sales & Marketing, Executives in Malls, Store Supervisor, Store Manager, Administration, Factory Supervisor, Delivery Person",
    },
    { category: "Salary Range", details: "INR 90,000 – 1.80 Lacs/Month" },
    { category: "Duration of Employment Visa", details: "2 + 1 Years" },
    { category: "Insurance & Medical", details: "Provided by the Company" },
    { category: "Total Leaves/Year", details: "35 Days" },
    { category: "Accommodation/Food", details: "Provided by the Company" },
    { category: "Process Time", details: "45 Days" },
    { category: "Job Type", details: "Skilled and Professional Positions" },
  ];

  const servicesProvided = [
    { category: "Service Agreement", details: "2 + 1 Years" },
    { category: "Visa Process", details: "Work Permit" },
    { category: "Itinerary", details: "Travel Included" },
    { category: "Travel Insurance", details: "Provided" },
    { category: "Process Time", details: "10 Days" },
    { category: "Accommodation", details: "Provided" },
  ];

  return (
    <>
      {/* CSS Styles embedded in the component file */}
      <style>{`
        .page-container {
          min-height: 100vh;
          background-color: #007bff; /* A standard blue similar to the images */
          color: white;
          padding: 2rem;
          font-family: sans-serif;
        }
        .header {
          display: flex;
          align-items: center;
          gap: 0.75rem; /* 12px */
          margin-bottom: 1.5rem; /* 24px */
        }
        .flag {
          width: 2.5rem; /* 40px */
          height: auto;
        }
        .title {
          font-size: 1.875rem; /* 30px */
          font-weight: bold;
        }
        .section-title {
           font-size: 1.5rem; /* 24px */
           font-weight: bold;
           margin-bottom: 1rem; /* 16px */
        }
        .table-wrapper {
          background-color: rgba(255, 255, 255, 0.1); /* Equivalent to bg-white/10 */
          border-radius: 1rem; /* 16px */
          padding: 1.5rem; /* 24px */
          margin-bottom: 2.5rem; /* 40px */
        }
        .info-table {
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.4); /* border-white/40 */
          border-collapse: collapse;
          border-radius: 0.75rem; /* 12px */
          overflow: hidden; /* Ensures border-radius is applied to corners */
        }
        .info-table tr {
          border-bottom: 1px solid rgba(255, 255, 255, 0.3); /* border-b border-white/30 */
        }
        .info-table tr:last-child {
          border-bottom: none;
        }
        .info-table td {
          padding: 0.75rem 1rem; /* py-3 px-4 */
        }
        .category-cell {
          font-weight: 600; /* font-semibold */
          border-right: 1px solid rgba(255, 255, 255, 0.3); /* border-r border-white/30 */
          width: 33.33%; /* w-1/3 */
        }
      `}</style>

      <div className="page-container">
        {/* Header */}
        <div className="header">
          <img src={EuropeFlag} alt="Europe Flag" className="flag" />
          <h1 className="title">EUROPE</h1>
        </div>

        {/* Job Information Table */}
        <div className="table-wrapper">
          <table className="info-table">
            <tbody>
              {jobDetails.map((item, index) => (
                <tr key={index}>
                  <td className="category-cell">{item.category}</td>
                  <td>{item.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Dynamic World Section */}
        <h2 className="section-title">What Dynamic World is providing?</h2>
        <div className="table-wrapper">
          <table className="info-table">
            <tbody>
              {servicesProvided.map((item, index) => (
                <tr key={index}>
                  <td className="category-cell">{item.category}</td>
                  <td>{item.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ImmigrationEurope;
