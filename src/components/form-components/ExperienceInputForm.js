import { Remove } from '@mui/icons-material';
import React, { Component } from 'react';
import InputField from './InputField';
import TextArea from './TextArea';

export default class ExperienceInputForm extends Component {
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
    const { id, position, company, from, to, description } = state;
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
            placeholder="When did you left? (Year)"
            type="text"
          />
        </div>
        <InputField
          id="position"
          label="Position"
          value={position}
          updateValue={this.updateValue}
          placeholder={`What ${verb} Your Position?`}
          type="text"
        />
        <InputField
          id="company"
          label="Company"
          value={company}
          updateValue={this.updateValue}
          placeholder={`What ${verb} the Company Name?`}
          type="text"
        />
        <TextArea
          id="description"
          label="Description"
          value={description}
          updateValue={this.updateValue}
          placeholder="Tell us about your experience"
        />
      </div>
    );
  }
}
