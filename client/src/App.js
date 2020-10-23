import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Redirect, Route, Switch, } from 'react-router-dom';
import store from 'redux/store';
import Bookstore from 'views/Bookstore';
import Landing from 'views/Landing';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/get-started' component={Landing} />
          <Route path='/bookstore' component={Bookstore} />
          <Redirect from='/' to="/get-started" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
