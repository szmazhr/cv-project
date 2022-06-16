import { Remove } from '@mui/icons-material';
import React, { Component } from 'react';
import InputField from './InputField';

export default class EducationInputForm extends Component {
  updateValue = (prop, value) => {
    if (prop === 'from' || prop === 'to') {
      if (value.match(/\D|\d{5}/)) return;
    }
    const { state, setState, section } = this.props;
    const { id } = state;
    setState(`${section}s`, id, prop, value);
  };

  render() {
    const { state, remove, section } = this.props;
    const { id, degree, collage, from, to } = state;
    const verb = to ? 'was' : 'is';
    return (
      <div className={`${section}-form-inputs`}>
        <button type="button" onClick={() => remove(`${section}s`, id)}>
          <Remove fontSize="large" />
        </button>
        <div className="input-group">
          <InputField
            id="from"
            label="From"
            value={from}
            updateValue={this.updateValue}
            placeholder="When did you joined? (Year)"
            type="text"
          />
          <InputField
            id="to"
            label="To"
            value={to}
            updateValue={this.updateValue}
            placeholder="When it is complete? (Year)"
            type="text"
          />
        </div>
        <InputField
          id="degree"
          label="Degree"
          value={degree}
          updateValue={this.updateValue}
          placeholder={`What ${verb} the Degree?`}
          type="text"
        />
        <InputField
          id="collage"
          label="Collage/University"
          value={collage}
          updateValue={this.updateValue}
          placeholder={`What ${verb} the Collage/University Name?`}
          type="text"
        />
      </div>
    );
  }
}
