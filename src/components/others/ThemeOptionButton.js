import React, { useEffect } from 'react';
import Button from './Button';
import ButtonGroup from './ButtonGroup';

function ThemeOptionButton({ changeTheme }) {
  const [theme, setTheme] = React.useState('brown-minimal');

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  const clickHandler = (e) => {
    setTheme(e.target.id);
    const activated = e.target
      .closest('.sb-btn-group')
      .querySelectorAll('.active');
    if (activated) {
      activated.forEach((el) => el.classList.remove('active'));
    }
    e.target.classList.add('active');
  };

  const themesBtn = ['Brown Minimal', 'Gray Pink'].map((btn) => {
    const id = btn.toLowerCase().replace(/\s+/g, '-');
    return (
      <Button
        key={id}
        id={id}
        label={btn}
        onClick={clickHandler}
        className={theme === id ? 'active' : ''}
      />
    );
  });

  return <ButtonGroup heading="Theme Options">{themesBtn}</ButtonGroup>;
}

export default ThemeOptionButton;
