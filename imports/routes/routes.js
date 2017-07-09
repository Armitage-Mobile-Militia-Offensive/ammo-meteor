import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import siteContainer from '../ui/siteContainer'
import Home from '../../client/components/home'
import About from '../../client/components/about'
import Mission from '../../client/components/about/mission'
import History from '../../client/components/about/history'
import Rules from '../../client/components/about/rules'
import Diplomacy from '../../client/components/about/diplomacy'

import Fleet from '../../client/components/fleet'
import Login from '../ui/login'
import Signup from '../ui/signup'
import Floatila from '../../client/components/floatila'
import Schedule from '../../client/components/schedule'
import NotFound from '../ui/notFound'
import EditProfile from '../profile/editProfile'

const unauthenticatedPages = ['/', '/login', '/about/mission', '/about/history', '/about/rules', '/about/diplomacy', '/floatila', '/signup']
const authenticatedPages = ['/fleet', '/profile', '/profile/edit', '/schedule']
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/login')
  }
}
export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname)
  const isAuthenticatedPage = authenticatedPages.includes(pathname)

  if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/login')
  }
}

export const routes = (
  <Router history={browserHistory}>
      <Route component={siteContainer}>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/fleet" onEnter={onEnterPrivatePage} component={Fleet}/>
        <Route component={About}>
          <Route path="/about/mission" component={Mission}/>
          <Route path="/about/history" component={History}/>
          <Route path="/about/rules" component={Rules}/>
          <Route path="/about/diplomacy" component={Diplomacy}/>
        </Route>
        <Route path="/floatila" component={Floatila}/>
        <Route path="/schedule" onEnter={onEnterPrivatePage} component={Schedule} />
        <Route path="/profile/edit" onEnter={onEnterPrivatePage} component={EditProfile} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
);
