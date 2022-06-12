import { Cancel } from '@mui/icons-material';
import React, { Component } from 'react';
import { getIcon } from '../../modules/formFunc';

export default class LinksForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      linkInput: '',
    };
  }

  addLink = (e) => {
    if (e.key.match(/Enter/)) {
      this.setState((prevState) => {
        const { linkInput } = prevState;
        const { addLink, links } = this.props;
        if (!links.includes(linkInput)) {
          addLink(linkInput);
        }
        return { linkInput: '' };
      });
    }
  };

  render() {
    const { links, removeLink, sectionName } = this.props;
    const section = sectionName.toLowerCase();
    const { linkInput } = this.state;
    const linksEl = links.map((link) => {
      if (link.match(/\w/)) {
        const { iconElement, url } = getIcon(link);
        return (
          <div className="link-item" key={link}>
            <span className="icon">{iconElement}</span>
            <span>{url}</span>
            <button type="button" onClick={() => removeLink(link)}>
              <Cancel />
            </button>
          </div>
        );
      }
      return null;
    });

    const id = 'linkInput';
    return (
      <section className={`${section}-info`}>
        <div className="section-header">
          <h1>{sectionName}</h1>
        </div>
        <div className="links-list"> {linksEl}</div>
        <div className={`input-field ${id}`}>
          <input
            id={id}
            value={linkInput}
            onChange={(e) => this.setState({ [id]: e.target.value })}
            placeholder="Add a link (then press enter to add)"
            name={id}
            onKeyDown={this.addLink}
          />
        </div>
      </section>
    );
  }
}
