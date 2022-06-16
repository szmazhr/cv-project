import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import Button from './Button';
import ButtonGroup from './ButtonGroup';

export default class Print extends Component {
  printBtn = (<Button label="Generate PDF" />);

  render() {
    const { previewRef } = this.props;
    const printBtn = (
      <ReactToPrint
        trigger={() => this.printBtn}
        content={() => previewRef.current}
      />
    );
    return <ButtonGroup>{printBtn}</ButtonGroup>;
  }
}
