import React, { Component } from 'react';
import Main from './Main';
import Sidebar from './Sidebar';

export default class Body extends Component {
  render() {
    return (
      <div className="app-body">
        <Main />
        <Sidebar />
      </div>
    );
  }
}
