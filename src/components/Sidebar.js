import React from 'react';
import FormOptionButton from './others/FormOptionButton';
import Print from './others/Print';
import ThemeOptionButton from './others/ThemeOptionButton';
import TabsSelector from './TabsSelector';

function Sidebar({
  activeTab,
  setActiveTab,
  setTemplate,
  changeTheme,
  previewRef,
}) {
  return (
    <section className="sidebar">
      <TabsSelector activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'edit' && <FormOptionButton setTemplate={setTemplate} />}
      {activeTab === 'preview' && (
        <>
          <ThemeOptionButton changeTheme={changeTheme} />
          <Print previewRef={previewRef} />
        </>
      )}
    </section>
  );
}

export default Sidebar;
