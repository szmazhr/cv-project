import React, { Component } from 'react';
import DescriptiveList from './DescriptiveList';
import Heading from './Heading';

export default class Experience extends Component {
  render() {
    const { listItems } = this.props;
    const experienceListEl = listItems.map((experience) => {
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
    });

    return (
      <div className="experience">
        <Heading text="Experience" />
        <div className="experience-list">{experienceListEl}</div>
      </div>
    );
  }
}
