import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

function Header() {
  return (
    <div className={style.headerContainer}>
      <NavLink to="/" className={({ isActive }) => (isActive ? `${style.activeLink}` : '')}>
        <span>MainPage</span>
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? `${style.activeLink}` : '')}>
        <span>About us</span>
      </NavLink>
    </div>
  );
}

export default Header;
