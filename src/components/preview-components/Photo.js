import React from 'react';
import placeHolderImg from '../../assets/user-placeholder.png';

function Photo({ name, photo }) {
  return (
    <div className="user-photo">
      <img src={photo || placeHolderImg} alt={name} />
    </div>
  );
}
export default Photo;
