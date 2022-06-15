import {
  removePattern,
  urlIcons,
  template,
  linkIcon,
} from '../data/templateAndDummy';
// eslint-disable-next-line no-unused-vars

function load(type) {
  const data = template.resume[type];
  if (data) {
    this.setState({ template: data });
  }
}

function eeUpdateHandler(section, id, prop, value) {
  this.setState((prevState) => {
    const items = [...prevState[section]];
    const index = items.findIndex((item) => item.id === id);
    items[index] = { ...items[index], [prop]: value };
    return { [section]: [...items] };
  });
}

function changeHandler(section, prop, value) {
  this.setState((prevState) => ({
    // ...prevState,
    [section]: { ...prevState[section], [prop]: value },
  }));
}

function addNew(section) {
  this.setState((prevState) => {
    const id = new Date().getTime();
    const items = prevState[section];
    const isExist = items.find((item) => item.id === id);

    if (isExist) {
      this.addNew(section);
      return prevState;
    }

    const newItem = { id, ...template[section] };
    return { [section]: [...items, newItem] };
  });
}

function remove(section, id) {
  this.setState((prevState) => {
    const items = [...prevState[section]];
    const newSection = items.filter((item) => item.id !== id);
    return { [section]: newSection };
  });
}

function addSkill(skill) {
  this.setState((prevState) => {
    const { skills } = prevState;
    if (!skills.includes(skill)) {
      const newSkills = [...skills, skill];
      return { skills: newSkills };
    }
    return null;
  });
}

function removeSkill(skill) {
  this.setState((prevState) => {
    const { skills } = prevState;
    const newSkills = skills.filter((item) => item !== skill);
    return { skills: newSkills };
  });
}

function addLink(link) {
  this.setState((prevState) => {
    const { links } = prevState;
    if (!links.includes(link)) {
      const newlinks = [...links, link];
      return { links: newlinks };
    }
    return null;
  });
}

function removeLink(link) {
  this.setState((prevState) => {
    const { links } = prevState;
    const newLinks = links.filter((item) => item !== link);
    return { links: newLinks };
  });
}

function getIcon(url) {
  const newUrl = url.trim().replace(removePattern, '');
  const main = newUrl.split('/')[0];
  const icon = urlIcons.find((item) => item.url.toLowerCase() === main);
  const iconElement = icon ? icon.icon : linkIcon;
  return { iconElement, url: newUrl };
}

export {
  eeUpdateHandler,
  changeHandler,
  addNew,
  remove,
  addSkill,
  removeSkill,
  addLink,
  removeLink,
  getIcon,
  load,
};
