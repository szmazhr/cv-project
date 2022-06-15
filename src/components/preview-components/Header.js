import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const { name, title } = this.props;
    return (
      <div className="name-title">
        <h1 className="user-name">{name}</h1>
        <h2 className="user-title">{title}</h2>
      </div>
    );
  }
}
