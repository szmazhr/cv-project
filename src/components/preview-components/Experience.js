import React from 'react';
import DescriptiveList from './DescriptiveList';
import Heading from './Heading';

function Experience({ listItems }) {
  const experienceListEl = listItems.map((experience) => {
    if (experience.company || experience.position) {
      return (
        <DescriptiveList
          key={experience.id}
          organization={experience.company}
          position={experience.position}
          period={`${experience.from || '-'} - ${
            experience.to || (experience.from && 'Present')
          }`}
          description={experience.description}
        />
      );
    }
    return null;
  });

  return (
    <div className="experience">
      <Heading text="Experience" />
      <div className="experience-list">{experienceListEl}</div>
    </div>
  );
}

export default Experience;
