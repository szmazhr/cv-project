import React from 'react';

function Button({ id, label, onClick, icon, className }) {
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

export default Button;
