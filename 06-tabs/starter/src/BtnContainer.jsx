import React from "react";

const BtnContainer = ({ jobs }) => {
  return (
    <div className="btn-container">
      {jobs.map(({ id, company }) => (
        <button key={id} className="job-btn">
          {company}
        </button>
      ))}
    </div>
  );
};

export default BtnContainer;
