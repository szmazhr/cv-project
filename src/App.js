import React, { Component } from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';

export default class App extends Component {
  icons = (
    <>
      <DarkMode />
      <LightMode />
    </>
  );

  constructor(props) {
    super(props);

    this.state = {
      theme: 'light-mode',
    };
  }

  changeTheme = (isDark) => {
    this.setState({ theme: isDark ? 'dark-mode' : 'light-mode' });
  };

  render() {
    const { theme } = this.state;
    return (
      <div className={`app ${theme}`}>
        <Header toggle={this.changeTheme} icons={this.icons} />
        <Body />
        <Footer
          name="Shahzar Mazhar"
          repoLink="https://github.com/szmazhr/cv-project"
        />
      </div>
    );
  }
}
