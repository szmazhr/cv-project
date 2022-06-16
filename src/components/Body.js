import React, { Component } from 'react';
import Main from './Main';
import Sidebar from './Sidebar';
import { load } from '../modules/formFunc';

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'edit',
      theme: 'brown-minimal',
      template: {},
    };
    this.load = load.bind(this);
  }

  // componentDidUpdate() {
  //   // temporary solution to update the template
  //   const { template } = this.state;
  //   if (JSON.stringify(template) === '{}') {
  //     this.load('filled');
  //   }
  // }

  emptyTemplate = () => {
    this.setState({ template: {} });
  };

  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  changeTheme = (theme) => {
    this.setState({ theme });
  };

  render() {
    const { activeTab, template, theme } = this.state;
    return (
      <div className="app-body">
        <Main
          state={activeTab}
          template={template}
          emptyTemplate={this.emptyTemplate}
          setState={this.changeTab}
          theme={theme}
        />
        <Sidebar
          state={activeTab}
          loadTemplate={this.load}
          setState={this.changeTab}
          theme={theme}
          changeTheme={this.changeTheme}
        />
      </div>
    );
  }
}
