import React, { Fragment } from 'react';
import Landing from '../landing/Landing';
import BlogLanding from '../landing_blog/BlogLanding';
import ContactLanding from '../landing_contact/ContactLanding';
import ProjectLanding from '../landing_project/ProjectLanding';

const Home = () => {
  return (
    <Fragment>
      <Landing />
      <BlogLanding />
      <ProjectLanding />
      <ContactLanding />
    </Fragment>
  );
};

export default Home;
