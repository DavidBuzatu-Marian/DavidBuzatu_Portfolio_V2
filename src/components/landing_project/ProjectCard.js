import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ProjectCard = ({
  project: { full_name, updated_at, description, languages_url, html_url },
}) => {

  const [languages, setLanguages] = useState(null)

  useEffect(() => {
      const fetchLanguages = async () => {
        const res = await axios.get(languages_url)
        setLanguages(res.data);
      }

      try {
        fetchLanguages();
      } catch (error) {
        setLanguages(null);
      }
  }, [languages_url])
  return (
    <div className='card-project'>
      <div className='body'>
        <div className='project-title'>
          <p>{full_name && full_name.substr(19)}</p>
        </div>
        <div className='project-description'>
          <p>
            {description
              ? description
              : 'See repository ReadMe for more details'}
          </p>
        </div>
        <div className='body-footer'>
          <div className='date'>
            <button className='btn btn-date'>
              <span className='material-icons-outlined'>date_range</span>
            </button>
            <p>
              Updated on:
              <br />
              {new Date(updated_at).toLocaleDateString(
                {},
                {
                  timeZone: 'UTC',
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric',
                }
              )}
            </p>
          </div>
          <button className='btn btn-project btn-3d-hover'>
            <a href={html_url} target='_blank' rel='noreferrer'>
              See repository
            </a>
          </button>
        </div>
      </div>
      <div className='footer'>
        {languages !== null && Object.keys(languages).length > 0 ? (
          Object.keys(languages)
            .map((word, idx) => <p key={idx}>{word}</p>)
        ) : (
          <p>None</p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
