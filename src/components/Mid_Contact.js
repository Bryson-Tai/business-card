import React from "react";

const MidContact = ({ src, title }) => {
  return (
    <div>
      <img src={src} alt={title + " logo"} />
      <p>{title}</p>
    </div>
  );
};

export default MidContact;
