import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

const Header = () => {
  return (
    <div className="flex items-center justify-center py-4">
      <Link to="/">
        <img className="w-20 h-20" src={logo} alt="Logo" />
      </Link>
    </div>
  );
};

export default Header;
