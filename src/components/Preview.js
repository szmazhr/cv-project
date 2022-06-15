import { Email, LocationCity, Phone } from '@mui/icons-material';
import React, { Component } from 'react';
import { getIcon } from '../modules/formFunc';
import Education from './preview-components/Education';
import Experience from './preview-components/Experience';
import Header from './preview-components/Header';
import List from './preview-components/List';
import Para from './preview-components/Para';
import Photo from './preview-components/Photo';

export default class Preview extends Component {
  render() {
    const { data, theme } = this.props;
    const { personal, experiences, educations, skills, links } = data;
    const { photo, name, bio, title, phone, email, address, city, country } =
      personal;

    const linkListEl = links.map((link) => {
      const { iconElement, url } = getIcon(link);
      return [iconElement, url];
    });
    return (
      <section className={`preview ${theme}`}>
        <Header name={name} title={title} />
        <Photo name={name} photo={photo} />
        <Para text={bio} />
        <List
          heading="Contacts"
          listItems={[
            [<Phone fontSize="small" />, phone],
            [<Email />, email],
            [
              <LocationCity />,
              `${address}${address && city ? ', ' : ''}${city}${
                country && (address || city) ? ', ' : ''
              }${country}`,
            ],
          ]}
        />
        <Experience listItems={experiences} />
        <Education listItems={educations} />
        <List heading="Skills" listItems={skills} />
        <List heading="Other Links" listItems={linkListEl} />
      </section>
    );
  }
}
