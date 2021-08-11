import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
const ProjectsLinks = ({ link, setActiveMenu }) => {
  const ProjectLink =
    link !== null ? (
      <RouterLink to={link}>Projects</RouterLink>
    ) : (
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
    );

  return ProjectLink;
};

export default ProjectsLinks;
