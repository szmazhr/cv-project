/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Form from './Form';
import Preview from './Preview';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        photo: '',
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

  // componentDidUpdate() {
  //   // temporary solution
  //   const { template } = this.props;
  //   if (JSON.stringify(template) !== JSON.stringify(this.state)) {
  //     this.updateState(template);
  //   }
  // }

  updateState = (data) => {
    this.setState(data);
  };

  render() {
    const { state, template, emptyTemplate, theme } = this.props;

    return (
      <main className="main">
        {state === 'edit' ? (
          <Form
            data={this.state}
            template={template}
            saveData={this.updateState}
            emptyTemplate={emptyTemplate}
          />
        ) : (
          <Preview data={this.state} theme={theme} />
        )}
      </main>
    );
  }
}
