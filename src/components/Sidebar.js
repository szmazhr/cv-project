import React, { Component } from 'react';
import FormOptionButton from './others/FormOptionButton';
import Print from './others/Print';
import ThemeOptionButton from './others/ThemeOptionButton';
import TabsSelector from './TabsSelector';

export default class Sidebar extends Component {
  render() {
    const { state, setState, loadTemplate, changeTheme, theme, previewRef } =
      this.props;
    return (
      <section className="sidebar">
        <TabsSelector state={state} setState={setState} />
        {state === 'edit' && <FormOptionButton loadTemplate={loadTemplate} />}
        {state === 'preview' && (
          <>
            <ThemeOptionButton changeTheme={changeTheme} theme={theme} />
            <Print previewRef={previewRef} />
          </>
        )}
      </section>
    );
  }
}
