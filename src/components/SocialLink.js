import React from "react";

const SocialLink = ({ id, href, itemClass, icon }) => {
  return (
    <li key={id}>
      <a href={href} target="_blank" className={itemClass} rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
