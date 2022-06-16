import React from 'react';

function ButtonGroup({ children, heading }) {
  return (
    <div className="sb-option">
      <h2>{heading}</h2>
      <div className="sb-btn-group">{children}</div>
    </div>
  );
}

export default ButtonGroup;
