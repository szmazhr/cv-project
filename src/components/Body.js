import React, { Component } from 'react';
import Main from './Main';
import Sidebar from './Sidebar';

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'edit',
    };
  }

  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <div className="app-body">
        <Main state={activeTab} setState={this.changeTab} />
        <Sidebar state={activeTab} setState={this.changeTab} />
      </div>
    );
  }
}
