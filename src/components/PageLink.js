import React, { memo } from "react";

const PageLink = ({ link, itemClass }) => {
  return (
    <li>
      <a href={link.href} className={itemClass}>
        {link.text}
      </a>
    </li>
  );
};

export default memo(PageLink);
