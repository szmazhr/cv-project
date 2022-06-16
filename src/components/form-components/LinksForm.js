import { Cancel } from '@mui/icons-material';
import React, { useState } from 'react';
import { getIcon } from '../../modules/utils';

function LinksForm({ links, removeLink, sectionName, addLink }) {
  const section = sectionName.toLowerCase();

  const [value, setValue] = useState('');

  const submitHandler = (e) => {
    if (e.key.match(/Enter/)) {
      if (!links.includes(value)) {
        addLink('links', value);
      }
      setValue('');
    }
  };

  const linksEl = links.map((link) => {
    if (link.match(/\w/)) {
      const { iconElement, url } = getIcon(link);
      return (
        <div className="link-item" key={link}>
          <span className="icon">{iconElement}</span>
          <span>{url}</span>
          <button type="button" onClick={() => removeLink('links', link)}>
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
          value={value}
          onChange={(e) => setValue(e.target.value.replace(/\s/, ''))}
          placeholder="Add a link (then press enter to add)"
          name={id}
          onKeyDown={submitHandler}
        />
      </div>
    </section>
  );
}
export default LinksForm;
