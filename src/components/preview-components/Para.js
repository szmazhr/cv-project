import React from 'react';
import Heading from './Heading';

function Para({ text }) {
  return (
    <div className="bio">
      <Heading text="Personal Info" />
      <p>{text}</p>
    </div>
  );
}
export default Para;
