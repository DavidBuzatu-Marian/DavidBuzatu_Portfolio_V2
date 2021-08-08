import React from 'react';

const ProjectCard = ({
  project: { full_name, updated_at, description, language, html_url },
}) => {
  return (
    <div className='card-project'>
      <div className='body'>
        <div className='project-title'>
          <p>{full_name && full_name.substr(19)}</p>
        </div>
        <div className='project-description'>
          <p>{description}</p>
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
        {language ? (
          language
            .match(/[A-Z][a-z]+/g)
            .map((word, idx) => <p key={idx}>{word}</p>)
        ) : (
          <p>None</p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
