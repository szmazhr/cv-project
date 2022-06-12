import React, { Component } from 'react';
import placeHolderImg from '../../assets/user-placeholder.png';

export default class Photo extends Component {
  render() {
    const { name, photo } = this.props;
    return (
      <div className="user-photo">
        <img src={photo || placeHolderImg} alt={name} />
      </div>
    );
  }
}
