import React from 'react';

const ProjectCard = ({
  project: { title, date_created, description, language },
}) => {
  return (
    <div className='card-project'>
      <div className='body'>
        <div className='project-title'>
          <p>{title}</p>
        </div>
        <div className='project-description'>
          <p>{description}</p>
        </div>
        <div className='date'>
          <button className='btn btn-date'>
            <span className='material-icons-outlined'>date_range</span>
          </button>
          <p>
            Updated on:
            <br />
            {new Date(date_created).toLocaleDateString(
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
      </div>
      <div className='footer'>
        <p>{language}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
