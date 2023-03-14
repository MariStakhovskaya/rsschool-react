import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

function Header() {
  return (
    <div className={style.headerContainer}>
      <Link to="/">
        <span>MainPage</span>
      </Link>
      <Link to="/about">
        <span>About us</span>
      </Link>
    </div>
  );
}

export default Header;
