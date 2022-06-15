import React, { Component } from 'react';

export default class Heading extends Component {
  render() {
    const { text } = this.props;
    return <h2 className="section-heading">{text}</h2>;
  }
}
