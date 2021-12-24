import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import ProjectsLinks from './ProjectsLinks';

const MenuList = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [link, setLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const blogPage = location.pathname.indexOf('blogs');
    if (blogPage !== -1) {
      setLink('/');
      setActiveMenu('');
    } else {
      setLink(null);
    }
  }, [location]);
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
        <ProjectsLinks link={link} setActiveMenu={setActiveMenu} />
      </li>
      <li>
        <a
          href='https://drive.google.com/file/d/1FdZ6Q3Sy1gL7nKyadUDciCz3KrVuyiXi/view?usp=sharing'
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
