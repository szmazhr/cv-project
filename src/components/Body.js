import React, { useRef, useState } from 'react';
import Main from './Main';
import Sidebar from './Sidebar';

function Body() {
  const [activeTab, setActiveTab] = useState('edit');
  const [theme, setTheme] = useState('');
  const [template, setTemplate] = useState('empty');
  const previewRef = useRef(null);

  return (
    <div className="app-body">
      <Main
        activeTab={activeTab}
        template={template}
        theme={theme}
        previewRef={previewRef}
      />
      <Sidebar
        activeTab={activeTab}
        setTemplate={setTemplate}
        setActiveTab={setActiveTab}
        theme={theme}
        changeTheme={setTheme}
        previewRef={previewRef}
      />
    </div>
  );
}
export default Body;
