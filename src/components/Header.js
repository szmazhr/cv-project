import React, { Component } from 'react';
import './Header.scss';
import Toggler from './Toggler';

export default class Header extends Component {
  render() {
    const { toggle, icons } = this.props; // following eslint, otherwise we can spread props directly
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
}
