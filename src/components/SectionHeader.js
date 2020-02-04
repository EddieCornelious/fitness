import "../styles/SectionHeader.scss";
import React from "react";

const SectionHeader = props => {
  return (
    <div className="section__header">
      <p>{props.title}</p>
      <h3>{props.subTitle}</h3>
    </div>
  );
};

export default SectionHeader;
