import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import {Tracker} from 'meteor/tracker'

import {routes, onAuthChange} from '../imports/routes/routes'
import '../imports/startup/simple-schema-configuration.js'
import '../imports/api/users'
import '../imports/api/matrixShips'
// const App = () => {
//   return (
//     <Router history={browserHistory}>
//       <Route component={Site}>
//         <Route path="/" component={Home} />
//         <Route path="/login" component={Login} />
//         <Route path="/fleet" component={Fleet}/>
//         <Route path="/about" component={About}/>
//         <Route path="/floatila" component={Floatila}/>
//         <Route path="/schedule" component={Schedule} />
//         <Route path="/profile/edit" component={EditProfile} />
//         <Route path="*" component={NotFound} />
//       </Route>
//     </Router>
//   );
// };

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId()
  onAuthChange(isAuthenticated)
})

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.app'));
});
