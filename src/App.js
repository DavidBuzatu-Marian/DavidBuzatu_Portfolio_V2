import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/landing/Landing';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
    </Switch>
  );
};

export default App;
