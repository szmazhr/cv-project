import React, { Component } from 'react';

export default class InputField extends Component {
  render() {
    const { id, label, value, updateValue, placeholder, type } = this.props;
    let bind;
    if (type === 'date') {
      bind = {
        type: 'text',
        onFocus: (e) => {
          e.target.type = 'date';
        },
        onBlur: (e) => {
          e.target.type = 'text';
        },
      };
    } else {
      bind = {
        type,
      };
    }
    return (
      <div className={`input-field ${id}`}>
        <input
          id={id}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...bind}
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
