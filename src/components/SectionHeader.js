import '../styles/SectionHeader.scss';
import React from 'react';

const SectionHeader = (props) => {
  return (
    <div className="section__header">
      <h3>{props.title}</h3>
      <h4>{props.subTitle}</h4>
    </div>
  );
};

export default SectionHeader;
