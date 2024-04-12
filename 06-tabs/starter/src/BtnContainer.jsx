import React, { useCallback } from "react";

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  const handleClick = useCallback(
    (index) => () => {
      setCurrentItem(index);
    },
    [setCurrentItem]
  );

  return (
    <div className="btn-container">
      {jobs.map(({ id, company }, index) => (
        <button
          key={id}
          className={index === currentItem ? "job-btn active-btn" : "job-btn"}
          onClick={handleClick(index)}
        >
          {company}
        </button>
      ))}
    </div>
  );
};

export default BtnContainer;
