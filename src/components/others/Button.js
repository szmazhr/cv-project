import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { id, label, onClick, icon, className } = this.props;
    return (
      <button
        id={id}
        type="button"
        onClick={onClick}
        className={`sidebar-btn${className && ` ${className}`}`}
      >
        {icon}
        {label}
      </button>
    );
  }
}
