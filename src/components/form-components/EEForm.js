import { Add } from '@mui/icons-material';
import React from 'react';
import ExperienceInputForm from './ExperienceInputForm';
import EducationInputForm from './EducationInputForm';

function EEForm({ state, setState, addNew, remove, sectionName }) {
  const section = sectionName.toLowerCase();

  return (
    <section className={`${section}s-info`}>
      <div className="section-header">
        <h1>{sectionName}</h1>
        <button type="button" onClick={() => addNew(`${section}s`)}>
          <Add fontSize="large" />
        </button>
      </div>
      {state.map((item) => {
        if (section === 'experience') {
          return (
            <ExperienceInputForm
              key={item.id}
              state={item}
              setState={setState}
              remove={remove}
            />
          );
        }
        if (section === 'education') {
          return (
            <EducationInputForm
              key={item.id}
              state={item}
              setState={setState}
              remove={remove}
            />
          );
        }
        return null;
      })}
    </section>
  );
}

export default EEForm;
