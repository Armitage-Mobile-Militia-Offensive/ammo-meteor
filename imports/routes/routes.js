import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Site from '../../client/site'
import Home from '../../client/components/home'
import About from '../../client/components/about'
import Fleet from '../../client/components/fleet'
import Login from '../ui/login'
import Floatila from '../../client/components/floatila'
import Schedule from '../../client/components/schedule'
import NotFound from '../ui/notFound'
import EditProfile from '../ui/editProfile'

const unauthenticatedPages = ['/', '/login', '/about', '/floatila']
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

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/links')
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/')
  }
}

export const routes = (
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
