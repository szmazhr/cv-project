import { Cancel } from '@mui/icons-material';
import React, { Component } from 'react';

export default class SkillsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillInput: '',
    };
  }

  addSkill = (e) => {
    if (e.key.match(/Enter/)) {
      this.setState((prevState) => {
        const { skillInput } = prevState;
        const { addSkill, skills } = this.props;
        if (!skills.includes(skillInput)) {
          addSkill(skillInput);
        }
        return { skillInput: '' };
      });
    }
  };

  render() {
    const { skills, removeSkill, sectionName } = this.props;
    const section = sectionName.toLowerCase();
    const { skillInput } = this.state;
    const skillsEl = skills.map((skill) => {
      if (skill.match(/\w/)) {
        return (
          <div className="skill-item" key={skill}>
            <span>{skill.trim()}</span>
            <button type="button" onClick={() => removeSkill(skill)}>
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
            value={skillInput}
            onChange={(e) => this.setState({ [id]: e.target.value })}
            placeholder="Add a skill (then press enter to add)"
            name={id}
            onKeyDown={this.addSkill}
          />
        </div>
      </section>
    );
  }
}
