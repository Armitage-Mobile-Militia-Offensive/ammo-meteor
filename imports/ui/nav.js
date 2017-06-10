import React, { Component } from 'react';
import {Router, Route, browserHistory, Link} from 'react-router';
import PropTypes from 'prop-types'
import { Meteor } from 'meteor/meteor'

const activeNavItem = {
    color: '#F59B45',
    borderBottom: '4px solid #F59B45'
}

const hoveredItem = {
    color: 'white',
    textDecoration: 'none',
    borderBottom: '4px solid #F59B45'
}

const navItem = {
    color: 'white',
    textDecoration: 'none'
}

export class Nav extends Component {
  constructor(props) {
      super(props)
      this.state = {
          home: navItem,
          floatila: navItem,
          fleet: navItem,
          scheduler: navItem,
          about: navItem
      }
  }



  navSwitching = () => {
    switch(browserHistory.getCurrentLocation().pathname){
      case "/":
          return this.setState({home: activeNavItem, floatila: navItem, fleet: navItem, scheduler: navItem, about: navItem})
          break
      case "/schedule":
          return this.setState({home: navItem, floatila: navItem, fleet: navItem, scheduler: activeNavItem, about: navItem})
          break
      case "/floatila":
          return this.setState({home: navItem, floatila: activeNavItem, fleet: navItem, scheduler: navItem, about: navItem})
          break
      case "/fleet":
          return this.setState({home: navItem, floatila: navItem, fleet: activeNavItem, scheduler: navItem, about: navItem})
          break
      case "/about":
          return this.setState({home: navItem, floatila: navItem, fleet: navItem, scheduler: navItem, about: activeNavItem})
          break
      default:
          return this.setState({home: navItem, floatila: navItem, fleet: navItem, scheduler: navItem, about: navItem})
    }
  }
  componentWillMount(){
      this.navSwitching()
  }
  componentWillReceiveProps(){
      this.navSwitching()
  }

  onMouseEnter = (link) => {
      switch (link) {
          case "home":
              (browserHistory.getCurrentLocation().pathname === '/') ? null : this.setState({home: hoveredItem})
              break
          case "scheduler":
              (browserHistory.getCurrentLocation().pathname === '/scheduler') ? null : this.setState({scheduler: hoveredItem})
              break
          case "floatila":
              (browserHistory.getCurrentLocation().pathname === '/floatila') ? null : this.setState({floatila: hoveredItem})
              break
          case "fleet":
              (browserHistory.getCurrentLocation().pathname === '/fleet') ? null : this.setState({fleet: hoveredItem})
              break
          case "about":
              (browserHistory.getCurrentLocation().pathname === '/about') ? null : this.setState({about: hoveredItem})
              break
          default:
              this.setState({home: navItem, floatila: navItem, fleet: navItem, scheduler: navItem, about: navItem})
      }
  }
  onMouseLeave = (link) => {
      switch (link) {
          case "home":
              (browserHistory.getCurrentLocation().pathname === '/') ? null : this.setState({home: navItem})
              break
          case "scheduler":
              (browserHistory.getCurrentLocation().pathname === '/scheduler') ? null : this.setState({scheduler: navItem})
              break
          case "floatila":
              (browserHistory.getCurrentLocation().pathname === '/floatila') ? null : this.setState({floatila: navItem})
              break
          case "fleet":
              (browserHistory.getCurrentLocation().pathname === '/fleet') ? null : this.setState({fleet: navItem})
              break
          case "about":
              (browserHistory.getCurrentLocation().pathname === '/about') ? null : this.setState({about: navItem})
              break
          default:
              this.setState({home: navItem, floatila: navItem, fleet: navItem, scheduler: navItem, about: navItem});
      }
  }

  render() {

      let renderProfileDropdown = () => {
          let name = 'Guest'
          if (Meteor.userId()) {
              name = 'Temp'
          }

          if (Meteor.userId()) {
              return (
                  <span className="nav-item nav-right dropdown" style={{ color: 'white' }} >
                      <span className="nav-link dropdown-toggle" id="navbarDropdownMenuLinkMember" data-toggle="dropdown" style={{ navItem }}>Welcome {name}</span>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLinkMember">
                          <Link to="/profile/edit" className="dropdown-item">Edit Profile</Link>
                          <span className="dropdown-item" onClick={() => Accounts.logout((err) => {console.log('Logout Error: ', err)})}>Logout</span>
                      </div>
                  </span>
              );
          } else {
              return (
                  <span className="nav-item nav-right dropdown" style={{ color: 'white' }} >
                      <span className="nav-link dropdown-toggle nav-text" id="navbarDropdownMenuLinkGuest" data-toggle="dropdown" style={{navItem}}>Welcome {name}</span>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLinkGuest">
                        <Link to="/login" className="dropdown-item">Login / Sign-up page</Link>
                      </div>
                  </span>
              );
          }
      }

      return (
          <nav className="navbar navbar-toggleable-md fixed-top navbar-dark bg-inverse" style={{
              fontFamily: 'Electrolize',
              padding: '0px'
          }}>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="fa fa-bars nav-text" aria-hidden="true" style={{
                      backgroundColor: 'white',
                      marginTop: '20%',
                      marginBottom: '20%'
                  }}></span>
              </button>
              <Link to="/"><img src="/assets/AMMO_LOGOv2.png" className="navbar-brand" alt="" style={{
              height: '40px'
          }}/></Link>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item" >
                          <Link to="/" className="nav-link" style={this.state.home} onMouseEnter={() => this.onMouseEnter("home")} onMouseLeave={() => this.onMouseLeave("home")}>Home</Link>
                      </li>
                      <li className="nav-item" >
                          <Link to="/schedule" className="nav-link" style={this.state.scheduler} onMouseEnter={() => this.onMouseEnter("scheduler")} onMouseLeave={() => this.onMouseLeave("scheduler")}>Schedule</Link>
                      </li>
                      <li className="nav-item" >
                          <Link to="/floatila" className="nav-link" style={this.state.floatila} onMouseEnter={() => this.onMouseEnter("floatila")} onMouseLeave={() => this.onMouseLeave("floatila")}>Floatila</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/fleet" className="nav-link" style={this.state.fleet} onMouseEnter={() => this.onMouseEnter("fleet")} onMouseLeave={() => this.onMouseLeave("fleet")}>Fleet</Link>
                      </li>
                  </ul>
                  {renderProfileDropdown()}
              </div>
          </nav>
      )
  }
}

export default Nav
