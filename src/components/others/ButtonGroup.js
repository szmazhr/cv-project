import React, { Component } from 'react';

export default class ButtonGroup extends Component {
  render() {
    const { children, heading } = this.props;
    return (
      <div className="sb-option">
        <h2>{heading}</h2>
        <div className="sb-btn-group">{children}</div>
      </div>
    );
  }
}
