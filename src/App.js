import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Blog from './components/blog/Blog';
import NotFoundPage from './components/pages/NotFoundPage';
import PublicRoute from './components/routes/PublicRoute';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <PublicRoute exact path='/' component={Home} />
        <PublicRoute exact path='/blogs/:id' component={Blog} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </Fragment>
  );
};

export default App;
