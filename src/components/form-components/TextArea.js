import React, { Component } from 'react';

export default class TextArea extends Component {
  render() {
    const { id, label, value, updateValue, placeholder } = this.props;
    return (
      <div className={`input-field ${id}`}>
        <textarea
          id={id}
          value={value}
          onChange={(e) => updateValue(id, e.target.value)}
          placeholder={placeholder}
          name={id}
          rows={4}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}
