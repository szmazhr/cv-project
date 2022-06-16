import { Remove } from '@mui/icons-material';
import React from 'react';
import InputField from './InputField';

function EducationInputForm({ state, setState, remove }) {
  const { id, degree, collage, from, to } = state;
  const verb = to ? 'was' : 'is';

  const updateValue = (prop, value) => {
    if (prop === 'from' || prop === 'to') {
      if (value.match(/\D|\d{5}/)) return;
    }
    setState(`educations`, id, prop, value);
  };

  return (
    <div className="education-form-inputs">
      <button type="button" onClick={() => remove(`educations`, id)}>
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
          placeholder="When it is complete? (Year)"
          type="text"
        />
      </div>
      <InputField
        id="degree"
        label="Degree"
        value={degree}
        onChange={(e) => updateValue(e.target.id, e.target.value)}
        placeholder={`What ${verb} the Degree?`}
        type="text"
      />
      <InputField
        id="collage"
        label="Collage/University"
        value={collage}
        onChange={(e) => updateValue(e.target.id, e.target.value)}
        placeholder={`What ${verb} the Collage/University Name?`}
        type="text"
      />
    </div>
  );
}

export default EducationInputForm;
