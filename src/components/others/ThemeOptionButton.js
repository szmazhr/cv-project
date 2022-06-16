import React, { Component } from 'react';
import Button from './Button';
import ButtonGroup from './ButtonGroup';

export default class ThemeOptionButton extends Component {
  changeTheme = (e, theme) => {
    const { changeTheme } = this.props;
    const activated = e.target
      .closest('.sb-btn-group')
      .querySelectorAll('.active');
    if (activated.length > 0) {
      activated.forEach((el) => el.classList.remove('active'));
    }
    e.target.classList.add('active');
    changeTheme(theme);
  };

  render() {
    const { theme: activeTheme } = this.props;
    const themesBtn = ['Brown Minimal', 'Gray Pink'].map((theme) => {
      const id = theme.toLowerCase().replace(/\s+/g, '-');
      return (
        <Button
          key={id}
          id={id}
          label={theme}
          onClick={(e) => this.changeTheme(e, id)}
          className={activeTheme === id ? 'active' : ''}
        />
      );
    });
    return <ButtonGroup heading="Theme Options">{themesBtn}</ButtonGroup>;
  }
}
