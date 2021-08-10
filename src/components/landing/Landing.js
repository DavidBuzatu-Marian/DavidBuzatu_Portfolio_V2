import React from 'react';
import { Comet } from './Comet';
import { Link } from 'react-scroll';

const Landing = () => {
  return (
    <div className='title fade-in-up'>
      <div className='main'>
        <h1>
          Welcome to my <span className='title-bar'>world</span>
        </h1>
        <h3>
          You came to the right place to find out more about me, my interests
          and, unexpectedly, about literature
        </h3>
        <button className='btn btn-projects btn-3d-hover'>
          <Link to='projects' spy={true} smooth={true} duration={500}>
            <p>See my projects</p>
          </Link>
        </button>
      </div>
      <Comet />
    </div>
  );
};

export default Landing;
