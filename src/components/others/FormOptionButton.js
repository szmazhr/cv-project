import { Download, RestartAlt } from '@mui/icons-material';
import React from 'react';
import Button from './Button';
import ButtonGroup from './ButtonGroup';

function FormOptionButton({ setTemplate }) {
  return (
    <ButtonGroup heading="Form Options">
      <Button
        id="load-filled-template"
        label="Load Template"
        onClick={() => setTemplate('filled')}
        icon={<Download />}
      />
      <Button
        id="load-empty-template"
        label="Reset Form"
        onClick={() => setTemplate('empty')}
        icon={<RestartAlt />}
      />
    </ButtonGroup>
  );
}

export default FormOptionButton;
