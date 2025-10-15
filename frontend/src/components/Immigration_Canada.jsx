import React from "react";
import CanadaFlag from "../assets/Flag_of_Canada.svg";

const Immigration_Canada = () => {
  const jobDetails = [
    [
      "Job Positions",
      "Cashier, Accountant, Sales & Marketing, Skilled Jobs, IT Jobs, Healthcare, Engineers, Administration, Store Manager, Mall Executives",
    ],
    ["Salary Range", "INR 1.50 Lacs / Month"],
    ["Duration of Employment Visa", "2 Years"],
    ["Insurance & Medical", "Provided by the Company"],
    ["Total Leaves/Year", "35 Days"],
    ["Accommodation/Food", "Provided by the Company"],
    ["Process Time", "3 Months"],
    ["Job Type", "Skilled, IT, Healthcare, and Administrative Positions"],
  ];

  const servicesProvided = [
    ["Service Agreement", "2 Years"],
    ["Visa Process", "Work Permit"],
    ["Itinerary", "Travel Included"],
    ["Travel Insurance", "Provided"],
    ["Flight Tickets", "Included"],
  ];

  return (
    <>
      {/* Embedded CSS (mirrors the Europe page styles) */}
      <style>{`
        .page-container {
          min-height: 100vh;
          background-color: #3E96F4; /* brand blue */
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
          width: 5rem; /* 80px, similar presence as prior */
          height: 3rem; /* 48px */
          object-fit: cover;
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
          background-color: rgba(255, 255, 255, 0.10); /* glassy card */
          border: 1px solid rgba(255,255,255,0.20);
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

        /* Optional: CTA styles (if you want to keep the buttons) */
        .cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 8px;
        }
        .btn-primary {
          background: #fff;
          color: #31393C;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }
        .btn-secondary {
          border: 1px solid rgba(255,255,255,0.6);
          color: #fff;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: 10px;
          text-decoration: none;
        }

        @media (max-width: 640px) {
          .title { font-size: 1.5rem; }
          .table-wrapper { padding: 1rem; }
          .info-table td { padding: 0.65rem 0.75rem; }
        }
      `}</style>

      <div className="page-container">
        {/* Header */}
        <div className="header">
          <img src={CanadaFlag} alt="Canada Flag" className="flag" />
          <h1 className="title">Canada Immigration Opportunities</h1>
        </div>

        {/* Job Information */}
        <h2 className="section-title">Job Information</h2>
        <div className="table-wrapper">
          <table className="info-table">
            <tbody>
              {jobDetails.map(([category, details], i) => (
                <tr key={i}>
                  <td className="category-cell">{category}</td>
                  <td>{details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* What Dynamic World is Providing */}
        <h2 className="section-title">What Dynamic World is providing?</h2>
        <div className="table-wrapper">
          <table className="info-table">
            <tbody>
              {servicesProvided.map(([category, details], i) => (
                <tr key={i}>
                  <td className="category-cell">{category}</td>
                  <td>{details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Optional: keep the CTA row (comment out if not needed) */}
        {/* <div className="cta-row">
          <a href="#apply" className="btn-primary">Apply Now</a>
          <a href="#consultation" className="btn-secondary">Free Consultation</a>
        </div> */}
      </div>
    </>
  );
};

export default Immigration_Canada;
