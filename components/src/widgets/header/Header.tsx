import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Header.module.css';

function Header() {
  return (
    <div className={style.headerContainer}>
      <NavLink
        to="/"
        data-testid="toMain"
        className={({ isActive }) => (isActive ? `${style.activeLink}` : '')}
      >
        <span>MainPage</span>
      </NavLink>
      <NavLink
        to="/about"
        data-testid="toAbout"
        className={({ isActive }) => (isActive ? `${style.activeLink}` : '')}
      >
        <span>About us</span>
      </NavLink>
      <NavLink
        to="/forms"
        data-testid="toForm"
        className={({ isActive }) => (isActive ? `${style.activeLink}` : '')}
      >
        <span>Forms</span>
      </NavLink>
    </div>
  );
}

export default Header;
