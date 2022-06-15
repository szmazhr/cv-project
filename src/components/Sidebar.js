import React, { Component } from 'react';
import FormOptionButton from './others/FormOptionButton';
import ThemeOptionButton from './others/ThemeOptionButton';
import TabsSelector from './TabsSelector';

export default class Sidebar extends Component {
  render() {
    const { state, setState, loadTemplate, changeTheme, theme } = this.props;
    return (
      <section className="sidebar">
        <TabsSelector state={state} setState={setState} />
        {state === 'edit' && <FormOptionButton loadTemplate={loadTemplate} />}
        {state === 'preview' && (
          <ThemeOptionButton changeTheme={changeTheme} theme={theme} />
        )}
      </section>
    );
  }
}
