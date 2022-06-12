import React, { Component } from 'react';
import Heading from './Heading';

export default class Para extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className="bio">
        <Heading text="Personal Info" />
        <p>{text}</p>
      </div>
    );
  }
}
