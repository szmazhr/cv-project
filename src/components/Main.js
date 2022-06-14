/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Form from './Form';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        name: '',
        bio: '',
        title: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        region: '',
        zipPin: '',
        country: '',
      },
      experiences: [],
      educations: [],
      skills: [],
      links: [],
    };
  }

  updateState = (data) => {
    this.setState(data);
  };

  render() {
    const { state } = this.props;
    return (
      <main className="main">
        {state === 'edit' ? (
          <Form data={this.state} saveData={this.updateState} />
        ) : (
          'Main'
        )}
      </main>
    );
  }
}
