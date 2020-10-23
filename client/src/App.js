import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch, } from 'react-router-dom';
import Bookstore from 'views/Bookstore';
import Landing from 'views/Landing';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/get-started' component={Landing} />
        <Route path='/bookstore' component={Bookstore} />
        <Redirect from='/' to="/get-started" />
      </Switch>
    </Router>
  );
}

export default App;
