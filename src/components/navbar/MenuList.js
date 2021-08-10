import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const MenuList = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  return (
    <ul>
      <li className={`${'home' === activeMenu ? 'nav-active' : ''}`}>
        <RouterLink to='/' onClick={(e) => setActiveMenu('home')}>
          Home
        </RouterLink>
      </li>
      {/* <li className={`${'blog' === activeMenu ? 'nav-active' : ''}`}>
        <RouterLink to='/' onClick={(e) => setActiveMenu('blog')}>
          Blog
        </RouterLink>
      </li> */}
      <li className={`${'projects' === activeMenu ? 'nav-active' : ''}`}>
        {' '}
        <Link
          to='projects'
          spy={true}
          smooth={true}
          duration={500}
          activeClass={'active'}
          onClick={(e) => setActiveMenu('projects')}
        >
          Projects
        </Link>
      </li>
      <li>
        <a
          href='https://drive.google.com/file/d/1QcvQDyKShHoDX42v12UkHMlxMvL1_eVl/view?usp=sharing'
          target='_blank'
          rel='noreferrer'
        >
          Resume
        </a>
      </li>
    </ul>
  );
};

export default MenuList;
