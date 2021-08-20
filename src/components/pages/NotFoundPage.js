import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='container-missing-page'>
      <h1>404</h1>
      <h3>
        You got to the wrong place. It may have been my fault, but please try
        going back <Link to='/'>home</Link>.
      </h3>
    </div>
  );
};

export default NotFoundPage;
