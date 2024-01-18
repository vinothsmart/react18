import React from "react";
import { socialLinks } from "../data";
import SocialLink from "./SocialLink";

const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map(({ id, href, icon }) => (
        <SocialLink key={id} href={href} itemClass={itemClass} icon={icon} />
      ))}
    </ul>
  );
};

export default SocialLinks;
