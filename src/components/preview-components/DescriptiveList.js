import React, { Component } from 'react';

export default class DescriptiveList extends Component {
  render() {
    const { organization, position, period, description } = this.props;
    return (
      <div className="desc-list-item">
        <h4 className="position">{position}</h4>
        <h3 className="org">{organization}</h3>
        <p className="period">{period}</p>
        <p className="description">{description}</p>
      </div>
    );
  }
}
