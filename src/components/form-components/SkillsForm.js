import { Cancel } from '@mui/icons-material';
import React, { useState } from 'react';

function SkillsForm({ skills, removeSkill, sectionName, addSkill }) {
  const section = sectionName.toLowerCase();
  const [value, setValue] = useState('');

  const submitHandler = (e) => {
    if (e.key.match(/Enter/)) {
      if (!skills.includes(value)) {
        addSkill('skills', value);
      }
      setValue('');
    }
  };

  const skillsEl = skills.map((skill) => {
    if (skill.match(/\w/)) {
      return (
        <div className="skill-item" key={skill}>
          <span>{skill.trim()}</span>
          <button type="button" onClick={() => removeSkill('skills', skill)}>
            <Cancel />
          </button>
        </div>
      );
    }
    return null;
  });

  const id = 'skillInput';
  return (
    <section className={`${section}-info`}>
      <div className="section-header">
        <h1>{sectionName}</h1>
      </div>
      <div className="skills-list"> {skillsEl}</div>
      <div className={`input-field ${id}`}>
        <input
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a skill (then press enter to add)"
          name={id}
          onKeyDown={submitHandler}
        />
      </div>
    </section>
  );
}

export default SkillsForm;
