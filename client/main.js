import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Site from './site'
import Home from './components/home'
import About from './components/about'
import Fleet from './components/fleet'
import Login from '../imports/ui/login'
import Floatila from './components/floatila'
import Schedule from './components/schedule'
import NotFound from '../imports/ui/notFound'
import EditProfile from '../imports/ui/editProfile'
import {requireAuth} from './utils/AuthService'


const App = () => {
  return (
    <Router history={browserHistory}>
      <Route component={Site}>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/fleet" component={Fleet}/>
        <Route path="/about" component={About}/>
        <Route path="/floatila" component={Floatila}/>
        <Route path="/schedule" component={Schedule} />
        <Route path="/profile/edit" component={EditProfile} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.app'));
});
