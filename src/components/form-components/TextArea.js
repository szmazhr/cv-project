import React from 'react';

function TextArea({ id, label, value, onChange, placeholder }) {
  return (
    <div className={`input-field ${id}`}>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={id}
        rows={4}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default TextArea;
