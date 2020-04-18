import React from "react";

const Link = ({ to, target, download, children }) => {
  return (
    <a href={to} target={target} download={download}>
      {children}
    </a>
  );
};

export default Link;
