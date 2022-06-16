import React from 'react';
import DescriptiveList from './DescriptiveList';
import Heading from './Heading';

function Education({ listItems }) {
  const educationListEl = listItems.map((education) => {
    if (education.degree || education.collage) {
      return (
        <DescriptiveList
          key={education.id}
          organization={education.collage}
          position={education.degree}
          period={`${education.from || '-'} - ${education.to || '-'}`}
        />
      );
    }
    return null;
  });

  return (
    <div className="education">
      <Heading text="Education" />
      <div className="education-list">{educationListEl}</div>
    </div>
  );
}

export default Education;
