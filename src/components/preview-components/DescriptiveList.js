import React from 'react';

function DescriptiveList({ organization, position, period, description }) {
  return (
    <div className="desc-list-item">
      <h4 className="position">{position}</h4>
      <h3 className="org">{organization}</h3>
      <p className="period">{period}</p>
      <p className="description">{description}</p>
    </div>
  );
}

export default DescriptiveList;
