import React from 'react';
import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ContactLanding from '../landing_contact/ContactLanding';
import Navbar from '../navbar/Navbar';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Fragment>
        <Navbar />
        <Component {...props} />
        <ContactLanding />
      </Fragment>
    )}
  />
);

export default PublicRoute;
