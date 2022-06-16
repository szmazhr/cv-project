import { Email, LocationCity, Phone } from '@mui/icons-material';
import React from 'react';
import { getIcon } from '../modules/utils';
import Education from './preview-components/Education';
import Experience from './preview-components/Experience';
import Header from './preview-components/Header';
import List from './preview-components/List';
import Para from './preview-components/Para';
import Photo from './preview-components/Photo';

function Preview({ data, theme, componentRef }) {
  const { personal, experiences, educations, skills, links } = data;
  const { photo, name, bio, title, phone, email, address, city, country } =
    personal;
  const linkEl = links.map((link) => {
    const { iconElement, url } = getIcon(link);
    return [iconElement, url];
  });
  const isExperienceEmpty = experiences.find((e) => e.company || e.position);
  const isEducationEmpty = educations.find((e) => e.collage || e.degree);

  return (
    <section className={`preview ${theme}`} ref={componentRef}>
      <Header name={name} title={title} />
      <Photo name={name} photo={photo} />
      {bio && <Para text={bio} />}
      {(phone || email || address || city || country) && (
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
      )}
      {isExperienceEmpty && <Experience listItems={experiences} />}
      {isEducationEmpty && <Education listItems={educations} />}
      {skills.length > 0 && <List heading="Skills" listItems={skills} />}
      {linkEl.length > 0 && <List heading="Other Links" listItems={linkEl} />}
    </section>
  );
}

export default Preview;
