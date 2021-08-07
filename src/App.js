import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Fragment>
  );
};

export default App;
