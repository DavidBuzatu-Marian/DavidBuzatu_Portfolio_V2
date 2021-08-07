import React, { Fragment } from 'react';
import { Comet } from './Comet';

const Landing = () => {
  return (
    <div className='title'>
      <div className='main'>
        <h1>
          Welcome to my <span className='title-bar'>world</span>
        </h1>
        <h3>
          You came to the right place to find out more about me, my interests
          and, unexpectedly, about literature
        </h3>
        <button className='btn btn-projects'>
          <p>See my projects</p>
        </button>
      </div>
      <Comet />
    </div>
  );
};

export default Landing;
