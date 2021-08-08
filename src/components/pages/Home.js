import React, { Fragment } from 'react';
import Landing from '../landing/Landing';
import BlogLanding from '../landing_blog/BlogLanding';
import ProjectLanding from '../landing_project/ProjectLanding';

const Home = () => {
  return (
    <Fragment>
      <Landing />
      <BlogLanding />
      <ProjectLanding />
    </Fragment>
  );
};

export default Home;
