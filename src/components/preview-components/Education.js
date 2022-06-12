import React, { Component } from 'react';
import DescriptiveList from './DescriptiveList';
import Heading from './Heading';

export default class Education extends Component {
  render() {
    const { listItems } = this.props;
    const educationListEl = listItems.map((education) => {
      return (
        <DescriptiveList
          key={education.id}
          organization={education.collage}
          position={education.degree}
          period={`${education.from || '-'} - ${education.to || '-'}`}
        />
      );
    });

    return (
      <div className="education">
        <Heading text="Education" />
        <div className="education-list">{educationListEl}</div>
      </div>
    );
  }
}
