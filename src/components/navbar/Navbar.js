import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

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
          <li>
            <RouterLink to='#'>Home</RouterLink>
          </li>
          <li>Blog</li>
          <li>
            {' '}
            <Link
              to='projects'
              spy={true}
              smooth={true}
              duration={500}
              activeClass={'active'}
            >
              Projects
            </Link>
          </li>
          <li>Resume</li>
        </ul>
      </div>
      <div className='desktop-navbar'>
        <ul>
          <li>
            <RouterLink to='#'>Home</RouterLink>
          </li>
          <li>Blog</li>
          <li>
            <Link
              to='projects'
              spy={true}
              smooth={true}
              duration={500}
              activeClass={'active'}
            >
              Projects
            </Link>
          </li>
          <li>Resume</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
