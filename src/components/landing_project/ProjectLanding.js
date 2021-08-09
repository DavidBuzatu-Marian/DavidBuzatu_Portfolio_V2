import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import GitHubLogo from '../../img/github.svg';
import axios from 'axios';
import { Element } from 'react-scroll';
import CircularProgress from '@material-ui/core/CircularProgress';

const ProjectLanding = () => {
  const [projects, setProjects] = useState(null);

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
      const token = process.env.REACT_APP_GITHUB_API;
      axios.defaults.headers.common['Authorization'] = 'token ' + token;
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
      <div className='container-projects fade-in-up'>
        <h2>
          <img src={GitHubLogo} alt='GitHub logo' />
          My GitHub projects
        </h2>
        <div className='container-background'>
          <div className='container-projects-list'>
            {projects && projects.length > 0 ? (
              projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))
            ) : projects === null ? (
              <CircularProgress />
            ) : (
              <p className='no-repos'>
                No repositories available. Check your internet connection
              </p>
            )}
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
