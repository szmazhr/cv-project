import React from 'react';

function Header({ name, title }) {
  return (
    <div className="name-title">
      <h1 className="user-name">{name}</h1>
      <h2 className="user-title">{title}</h2>
    </div>
  );
}

export default Header;
