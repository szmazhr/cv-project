/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function TabsSelector({ activeTab, setActiveTab }) {
  const btn = (tabName) => {
    const id = tabName.toLowerCase().replace(/\s+/g, '-');
    return (
      <div
        className={`option-toggle ${activeTab === id ? 'active' : ''}`}
        onClick={() => setActiveTab(id)}
      >
        <span>{tabName}</span>
      </div>
    );
  };

  return (
    <div className="toggle-options">
      {btn('Edit')}
      <span className="or">OR</span>
      {btn('Preview')}
    </div>
  );
}

export default TabsSelector;
