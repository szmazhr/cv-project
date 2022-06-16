/* eslint-disable react/no-unused-state */
import React, { useState } from 'react';
import { template as defaultValue } from '../data/templateAndDummy';
import Form from './Form';
import Preview from './Preview';

const { empty } = defaultValue.resume;

function Main({ activeTab, template, theme, previewRef }) {
  const [cvData, setCvData] = useState(empty);

  const updateState = (data) => {
    setCvData(data);
  };
  return (
    <main className="main">
      {activeTab === 'edit' ? (
        <Form data={cvData} template={template} saveData={updateState} />
      ) : (
        <Preview data={cvData} theme={theme} componentRef={previewRef} />
      )}
    </main>
  );
}
export default Main;
