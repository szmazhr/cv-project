import React, { Component } from 'react';
import TabsSelector from './TabsSelector';

export default class Sidebar extends Component {
  render() {
    const { state, setState } = this.props;
    return (
      <section className="sidebar">
        <TabsSelector state={state} setState={setState} />
      </section>
    );
  }
}
