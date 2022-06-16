import React from 'react';

function InputField({ id, label, value, onChange, placeholder, type }) {
  return (
    <div className={`input-field ${id}`}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={id}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default InputField;
