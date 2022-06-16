import {
  LinkedIn,
  GitHub,
  Twitter,
  Facebook,
  Instagram,
  YouTube,
  Link as LinkIcon,
} from '@mui/icons-material';
// import LinkIcon from '@mui/icons-material/Link';
import React from 'react';
import photo from '../assets/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg';

const template = {
  experiences: {
    position: '',
    company: '',
    from: '',
    to: '',
    description: '',
  },
  educations: {
    degree: '',
    collage: '',
    from: '',
    to: '',
  },
  resume: {
    filled: {
      personal: {
        photo,
        name: 'Dummy Name',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor. Sed velit dignissim sodales ut eu sem integer vitae justo. Lectus quam id leo in vitae turpis massa sed. Non blandit massa enim nec dui nunc. Enim sit amet venenatis urna. Volutpat blandit aliquam etiam erat velit. Eget mi proin sed libero enim sed. Semper eget duis at tellus. Vivamus arcu felis bibendum ut tristique.',
        title: 'Dummy Title',
        phone: '+11234567890',
        email: 'hello@reallygreatsite.com',
        address: '123 Main St',
        city: 'Any City',
        region: 'AR',
        zipPin: '10001',
        country: 'Any Country',
      },
      experiences: [
        {
          id: 1,
          position: 'Software Engineer',
          company: 'Dummy Company',
          from: '2019',
          to: '2020',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        },
        {
          id: 2,
          position: 'Software Engineer',
          company: 'Dummy Company',
          from: '2021',
          to: '',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        },
      ],
      educations: [
        {
          id: 3,
          degree: 'Bachelor',
          collage: 'Dummy Collage',
          from: '2015',
          to: '2018',
        },
        {
          id: 4,
          degree: 'Masters',
          collage: 'Dummy Collage',
          from: '2018',
          to: '2020',
        },
      ],
      skills: ['Photo by', 'Vicky Hladynets ', 'on Unsplash'],
      links: [
        'https://www.linkedin.com/in/vhladynets/',
        'https://unsplash.com/@vhladynets',
      ],
    },
    empty: {
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
    },
  },
};

const urlIcons = [
  {
    url: 'linkedin.com',
    icon: <LinkedIn />,
  },
  {
    url: 'github.com',
    icon: <GitHub />,
  },
  {
    url: 'facebook.com',
    icon: <Facebook />,
  },
  {
    url: 'twitter.com',
    icon: <Twitter />,
  },
  {
    url: 'instagram.com',
    icon: <Instagram />,
  },
  {
    url: 'youtube.com',
    icon: <YouTube />,
  },
];

const linkIcon = <LinkIcon />;

export { urlIcons, template, linkIcon };
