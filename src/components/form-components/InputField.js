import React, { Component } from 'react';

export default class InputField extends Component {
  render() {
    const { id, label, value, updateValue, placeholder, type } = this.props;

    return (
      <div className={`input-field ${id}`}>
        <input
          id={id}
          // eslint-disable-next-line react/jsx-props-no-spreading
          type={type}
          value={value}
          onChange={(e) => updateValue(id, e.target.value)}
          placeholder={placeholder}
          name={id}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}
