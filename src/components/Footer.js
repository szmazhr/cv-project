import React, { Component } from 'react';
import { Favorite, GitHub } from '@mui/icons-material';
import { destructureGithubRepoLink } from '../modules/utils';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    const { name, repoLink } = this.props;
    const { owner } = destructureGithubRepoLink(repoLink);
    return (
      <footer className="footer">
        <div>
          <span>
            Made with <Favorite color="error" fontSize="small" /> by
            <a
              href={`https://github.com/${owner}`}
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              {name}
            </a>
          </span>
        </div>
        <div className="repo_link">
          <a href={repoLink} target="_blank" rel="noreferrer">
            <GitHub />
          </a>
        </div>
      </footer>
    );
  }
}
