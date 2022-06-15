import { Download, RestartAlt } from '@mui/icons-material';
import React, { Component } from 'react';
import Button from './Button';
import ButtonGroup from './ButtonGroup';

export default class FormOptionButton extends Component {
  render() {
    const { loadTemplate } = this.props;
    return (
      <ButtonGroup heading="Form Options">
        <Button
          id="load-filled-template"
          label="Load Template"
          onClick={() => loadTemplate('filled')}
          icon={<Download />}
        />
        <Button
          id="load-empty-template"
          label="Reset Form"
          onClick={() => loadTemplate('empty')}
          icon={<RestartAlt />}
        />
      </ButtonGroup>
    );
  }
}
