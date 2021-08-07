import React, { Fragment } from 'react';
import Landing from '../landing/Landing';
import BlogLanding from '../landing_blog/BlogLanding';

const Home = () => {
  return (
    <Fragment>
      <Landing />
      <BlogLanding />
    </Fragment>
  );
};

export default Home;
