import React from "react";
import { socialLinks } from "../data";

const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map(({ id, href, icon }) => (
        <li key={id}>
          <a href={href} target="_blank" className={itemClass} rel="noreferrer">
            <i className={icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
