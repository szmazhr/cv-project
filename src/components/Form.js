import React, { Component } from 'react';
import {
  eeUpdateHandler,
  changeHandler,
  addNew,
  remove,
  addSkill,
  removeSkill,
  addLink,
  removeLink,
} from '../modules/formFunc';
import EEForm from './form-components/EEForm';
import PersonalInfoForm from './form-components/PersonalInfoForm';
import SkillsForm from './form-components/SkillsForm';
import LinksForm from './form-components/LinksForm';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        photo: '',
        name: '',
        bio: '',
        title: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        region: '',
        zipPin: '',
        country: '',
      },
      experiences: [],
      educations: [],
      skills: [],
      links: [],
    };

    this.eeUpdateHandler = eeUpdateHandler.bind(this);
    this.changeHandler = changeHandler.bind(this);
    this.addNew = addNew.bind(this);
    this.remove = remove.bind(this);
    this.addSkill = addSkill.bind(this);
    this.removeSkill = removeSkill.bind(this);
    this.addLink = addLink.bind(this);
    this.removeLink = removeLink.bind(this);
    this.formRef = React.createRef();
  }

  componentDidMount() {
    const { data } = this.props;
    if (data) {
      this.setState(data);
    }
  }

  componentDidUpdate() {
    const { template, emptyTemplate } = this.props;
    if (JSON.stringify(template) !== '{}') {
      this.setState(template);
      emptyTemplate();
    }
  }

  saveData = () => {
    const { saveData } = this.props;
    saveData(this.state);
  };

  render() {
    const { personal, experiences, educations, skills, links } = this.state;
    const { data } = this.props;
    const EEForms = ['Experience', 'Education'].map((x) => {
      return (
        <EEForm
          key={x}
          state={x === 'Experience' ? experiences : educations}
          setState={this.eeUpdateHandler}
          addNew={this.addNew}
          remove={this.remove}
          sectionName={x}
        />
      );
    });

    const saved = JSON.stringify(data) === JSON.stringify(this.state);

    return (
      <div className="forms" ref={this.formRef}>
        <PersonalInfoForm state={personal} setState={this.changeHandler} />
        {EEForms}
        <SkillsForm
          sectionName="Skills"
          skills={skills}
          addSkill={this.addSkill}
          removeSkill={this.removeSkill}
        />
        <LinksForm
          sectionName="Socials"
          links={links}
          addLink={this.addLink}
          removeLink={this.removeLink}
        />
        <div className={`form-buttons ${saved ? '' : 'show'}`}>
          <button type="button" onClick={this.saveData}>
            {saved ? 'Saved' : 'Save Changes'}
          </button>
        </div>
      </div>
    );
  }
}
