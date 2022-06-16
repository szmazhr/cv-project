import React from 'react';
import ReactToPrint from 'react-to-print';
import Button from './Button';
import ButtonGroup from './ButtonGroup';

function PrintBtn() {
  return <Button label="Generate PDF" />;
}

function Print({ previewRef }) {
  return (
    <ButtonGroup>
      <ReactToPrint trigger={PrintBtn} content={() => previewRef.current} />
    </ButtonGroup>
  );
}

export default Print;
