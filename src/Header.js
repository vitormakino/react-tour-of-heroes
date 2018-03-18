import React from 'react';
import './Header.css';

import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Tour of Heroes</h1>
    <nav>
        <NavLink to='/dashboard'>Dashboard</NavLink>
        <NavLink to='/heroes'>Heroes</NavLink>
    </nav>
  </header>
);

export default Header;