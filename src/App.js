import React, { useState } from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  const icons = (
    <>
      <DarkMode />
      <LightMode />
    </>
  );
  const [theme, setTheme] = useState('light-mode');

  const changeTheme = (isDark) => {
    setTheme(isDark ? 'dark-mode' : 'light-mode');
  };

  return (
    <div className={`app ${theme}`}>
      <Header toggle={changeTheme} icons={icons} />
      <Body />
      <Footer
        name="Shahzar Mazhar"
        repoLink="https://github.com/szmazhr/cv-project"
      />
    </div>
  );
}

export default App;
