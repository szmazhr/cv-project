import React, { Component } from 'react';
import './Toggler.scss';

export default class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Active: false,
    };
  }

  componentDidMount() {
    const { toggle } = this.props;
    const { Active } = this.state;
    toggle(Active);
  }

  componentDidUpdate(prevProps, prevState) {
    const { Active } = this.state;
    const { toggle } = this.props;
    if (prevState.Active !== Active) {
      toggle(Active);
    }
  }

  render() {
    const { Active } = this.state;
    const { id, icons } = this.props;
    return (
      <div className={`toggle ${id}`}>
        <input
          type="checkbox"
          id={id}
          checked={Active}
          onChange={(e) => this.setState({ Active: e.target.checked })}
        />
        <label htmlFor={id}>{icons}</label>
      </div>
    );
  }
}
