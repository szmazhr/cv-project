import React, { useEffect, useRef, useState } from 'react';
import EEForm from './form-components/EEForm';
import PersonalInfoForm from './form-components/PersonalInfoForm';
import SkillsForm from './form-components/SkillsForm';
import LinksForm from './form-components/LinksForm';
import { template as defaultValue } from '../data/templateAndDummy';

function Form({ data, saveData, template }) {
  const isInitialMount = useRef(true);
  const [state, setState] = useState(data);
  const { personal, experiences, educations, skills, links } = state;
  const saved = JSON.stringify(data) === JSON.stringify(state);

  // Input Handler
  const changeHandler = (section, prop, value) => {
    setState({ ...state, [section]: { ...state[section], [prop]: value } });
  };

  // Add Skills or Links
  const addSkillOrLink = (itemName, value) => {
    const item = itemName.toLowerCase();
    setState({ ...state, [item]: [...state[item], value] });
  };

  // Remove Skills or Links
  const removeSkillOrLink = (itemName, value) => {
    const item = itemName.toLowerCase();
    setState({ ...state, [item]: state[item].filter((x) => x !== value) });
  };

  // Add Education or Experience Form
  const addNewEEForm = (section) => {
    const id = new Date().getTime();
    const items = state[section];
    const isExist = items.find((item) => item.id === id);

    if (isExist) {
      addNewEEForm(section);
      return;
    }
    const newItem = { id, ...defaultValue[section] };
    setState({ ...state, [section]: [...state[section], newItem] });
  };

  // Remove Education or Experience Form
  const removeEEForm = (section, id) => {
    const items = state[section];
    const newItems = items.filter((item) => item.id !== id);
    setState({ ...state, [section]: newItems });
  };

  // Education or Experience Form Update Handler
  const eeUpdateHandler = (section, id, prop, value) => {
    const items = state[section];
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, [prop]: value };
      }
      return item;
    });
    setState({ ...state, [section]: newItems });
  };

  // Loading dummy data or resetting form
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false; // skip the first render
    } else {
      setState(defaultValue.resume[template]);
    }
  }, [template]);

  const EEForms = ['Experience', 'Education'].map((x) => {
    return (
      <EEForm
        key={x}
        state={x === 'Experience' ? experiences : educations}
        setState={eeUpdateHandler}
        addNew={addNewEEForm}
        remove={removeEEForm}
        sectionName={x}
      />
    );
  });

  return (
    <div className="forms">
      <PersonalInfoForm personalInfo={personal} setState={changeHandler} />
      {EEForms}
      <SkillsForm
        sectionName="Skills"
        skills={skills}
        addSkill={addSkillOrLink}
        removeSkill={removeSkillOrLink}
      />
      <LinksForm
        sectionName="Socials"
        links={links}
        addLink={addSkillOrLink}
        removeLink={removeSkillOrLink}
      />
      <div className={`form-buttons ${saved ? '' : 'show'}`}>
        <button type="button" onClick={() => saveData(state)}>
          {saved ? 'Saved' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}

export default Form;
