import React from 'react';
import ProjectCard from './ProjectCard';
import GitHubLogo from '../../img/github.svg';

const projects = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit',
    description:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit blanditiis accusantium qui laudantium vero?',
    date_created: '2021-07-03T15:16:48.000Z',
    language: 'GoLang',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit',
    description:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit blanditiis accusantium qui laudantium vero?',
    date_created: '2021-08-02T15:16:48.000Z',
    language: 'Type Script',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit',
    description:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit blanditiis accusantium qui laudantium vero?',
    date_created: '2021-08-01T15:16:48.000Z',
    language: 'C++',
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit',
    description:
      ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit blanditiis accusantium qui laudantium vero?',
    date_created: '2021-07-13T15:16:48.000Z',
    language: 'Java',
  },
];

const ProjectLanding = () => {
  return (
    <div className='container-projects'>
      <h2>
        <img src={GitHubLogo} alt='GitHub logo' />
        My GitHub projects
      </h2>
      <div className='container-background'>
        <div className='container-projects-list'>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
        <button className='btn btn-github btn-3d-hover'>
          <p>
            <a
              href='https://github.com/DavidBuzatu-Marian'
              target='_blank'
              rel='noreferrer'
            >
              See GitHub
            </a>
          </p>
        </button>
      </div>
    </div>
  );
};

export default ProjectLanding;
