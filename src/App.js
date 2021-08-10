import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/navbar/Navbar';
import Blog from './components/blog/Blog';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blogs/:id' component={Blog} />
      </Switch>
    </Fragment>
  );
};

export default App;
