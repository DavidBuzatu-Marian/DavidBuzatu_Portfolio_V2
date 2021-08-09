import React, { useState } from 'react';
import Hamburger from 'hamburger-react';

import MenuList from './MenuList';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
      <div className='hamburger'>
        <Hamburger
          color={'#C4C4C4'}
          toggled={isMenuOpen}
          toggle={(e) => setMenuOpen(!isMenuOpen)}
        />
      </div>
      <div className={`mobile-navbar ${isMenuOpen ? 'visible' : ''}`}>
        <MenuList />
      </div>
      <div className='desktop-navbar'>
        <MenuList />
      </div>
    </nav>
  );
};

export default Navbar;
