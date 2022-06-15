/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';

export default class TabsSelector extends Component {
  render() {
    const { state, setState } = this.props;
    return (
      <div className="toggle-options">
        <div
          className={`option-toggle ${state === 'edit' ? 'active' : ''}`}
          onClick={() => setState('edit')}
        >
          <span>Edit</span>
        </div>
        <span className="or">OR</span>
        <div
          className={`option-toggle ${state === 'preview' ? 'active' : ''}`}
          onClick={() => setState('preview')}
        >
          <span>Preview</span>
        </div>
      </div>
    );
  }
}
