import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import GitHubLogo from '../../img/github.svg';
import config from '../../config/default.json';
import axios from 'axios';
import { Element } from 'react-scroll';

const ProjectLanding = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getLatestSixUpdatedRepositories = (repositories) => {
      let repos = repositories;
      repos.sort((r1, r2) => {
        return new Date(r2.updated_at) - new Date(r1.updated_at);
      });
      repos = repos.slice(0, 6);
      return repos;
    };
    const fetchProfileInfo = async () => {
      axios.defaults.headers.common['Authorization'] =
        'token ' + config.github_api;
      const res = await axios.get(
        'https://api.github.com/users/DavidBuzatu-Marian/repos'
      );
      const repos = getLatestSixUpdatedRepositories(res.data);
      setProjects(repos);
    };
    fetchProfileInfo();
  }, []);

  return (
    <Element id='projects' name='projects'>
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
    </Element>
  );
};

export default ProjectLanding;
