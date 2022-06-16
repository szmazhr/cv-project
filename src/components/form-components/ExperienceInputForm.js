import { Remove } from '@mui/icons-material';
import React from 'react';
import InputField from './InputField';
import TextArea from './TextArea';

function ExperienceInputForm({ state, remove, setState }) {
  const { id, position, company, from, to, description } = state;
  const verb = to ? 'was' : 'is';
  const updateValue = (prop, value) => {
    if (prop === 'from' || prop === 'to') {
      if (value.match(/\D|\d{5}/)) return;
    }
    setState(`experiences`, id, prop, value);
  };

  return (
    <div className="experience-form-inputs">
      <button type="button" onClick={() => remove(`experiences`, id)}>
        <Remove fontSize="large" />
      </button>
      <div className="input-group">
        <InputField
          id="from"
          label="From"
          value={from}
          onChange={(e) => updateValue(e.target.id, e.target.value)}
          placeholder="When did you joined? (Year)"
          type="text"
        />
        <InputField
          id="to"
          label="To"
          value={to}
          onChange={(e) => updateValue(e.target.id, e.target.value)}
          placeholder="When did you left? (Year)"
          type="text"
        />
      </div>
      <InputField
        id="position"
        label="Position"
        value={position}
        onChange={(e) => updateValue(e.target.id, e.target.value)}
        placeholder={`What ${verb} Your Position?`}
        type="text"
      />
      <InputField
        id="company"
        label="Company"
        value={company}
        onChange={(e) => updateValue(e.target.id, e.target.value)}
        placeholder={`What ${verb} the Company Name?`}
        type="text"
      />
      <TextArea
        id="description"
        label="Description"
        value={description}
        onChange={(e) => updateValue(e.target.id, e.target.value)}
        placeholder="Tell us about your experience"
      />
    </div>
  );
}

export default ExperienceInputForm;
