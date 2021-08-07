import React, { useState } from 'react';
import Hamburger from 'hamburger-react';

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
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Projects</li>
          <li>Resume</li>
        </ul>
      </div>
      <div className='desktop-navbar'>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Projects</li>
          <li>Resume</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
