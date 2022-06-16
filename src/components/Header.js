import React from 'react';
import Toggler from './Toggler';

function Header({ toggle, icons }) {
  return (
    <header className="header">
      <div>
        <span>
          <a href="./">CV Creator</a>
          <sub>
            powered by{' '}
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
              reactjs
            </a>
          </sub>
        </span>
      </div>
      <Toggler id="toggle-theme" toggle={toggle} icons={icons} />
    </header>
  );
}

export default Header;
