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
          schedule: navItem,
          about: navItem
      }
  }

  navSwitching = () => {
    switch(browserHistory.getCurrentLocation().pathname){
      case "/":
          return this.setState({home: activeNavItem, floatila: navItem, fleet: navItem, schedule: navItem, about: navItem})
          break
      case "/schedule":
          return this.setState({home: navItem, floatila: navItem, fleet: navItem, schedule: activeNavItem, about: navItem})
          break
      case "/floatila":
          return this.setState({home: navItem, floatila: activeNavItem, fleet: navItem, schedule: navItem, about: navItem})
          break
      case "/fleet":
          return this.setState({home: navItem, floatila: navItem, fleet: activeNavItem, schedule: navItem, about: navItem})
          break
      case "/about/mission":
          return this.setState({home: navItem, floatila: navItem, fleet: navItem, schedule: navItem, about: activeNavItem})
          break
      case "/about/rules":
          return this.setState({home: navItem, floatila: navItem, fleet: navItem, schedule: navItem, about: activeNavItem})
          break
      case "/about/history":
          return this.setState({home: navItem, floatila: navItem, fleet: navItem, schedule: navItem, about: activeNavItem})
          break
      case "/about/diplomacy":
          return this.setState({home: navItem, floatila: navItem, fleet: navItem, schedule: navItem, about: activeNavItem})
          break
      default:
          return this.setState({home: navItem, floatila: navItem, fleet: navItem, schedule: navItem, about: navItem})
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
          case "schedule":
              (browserHistory.getCurrentLocation().pathname === '/schedule') ? null : this.setState({schedule: hoveredItem})
              break
          case "floatila":
              (browserHistory.getCurrentLocation().pathname === '/floatila') ? null : this.setState({floatila: hoveredItem})
              break
          case "fleet":
              (browserHistory.getCurrentLocation().pathname === '/fleet') ? null : this.setState({fleet: hoveredItem})
              break
          case "about":
              (browserHistory.getCurrentLocation().pathname.includes('/about')) ? null : this.setState({about: hoveredItem})
              break
          default:
              this.setState({home: navItem, floatila: navItem, fleet: navItem, schedule: navItem, about: navItem})
      }
  }
  onMouseLeave = (link) => {
      switch (link) {
          case "home":
              (browserHistory.getCurrentLocation().pathname === '/') ? null : this.setState({home: navItem})
              break
          case "schedule":
              (browserHistory.getCurrentLocation().pathname === '/schedule') ? null : this.setState({schedule: navItem})
              break
          case "floatila":
              (browserHistory.getCurrentLocation().pathname === '/floatila') ? null : this.setState({floatila: navItem})
              break
          case "fleet":
              (browserHistory.getCurrentLocation().pathname === '/fleet') ? null : this.setState({fleet: navItem})
              break
          case "about":
              (browserHistory.getCurrentLocation().pathname.includes('/about')) ? null : this.setState({about: navItem})
              break
          default:
              this.setState({home: navItem, floatila: navItem, fleet: navItem, schedule: navItem, about: navItem});
      }
  }

  render() {
      let renderProfileDropdown = () => {
          if (Meteor.userId()) {
              return (
                  <span className="nav-item nav-right dropdown" style={{ color: 'white' }} >
                      <span className="nav-link dropdown-toggle" id="navbarDropdownMenuLinkMember" data-toggle="dropdown" style={{ navItem }}>{this.props.user ? this.props.user.username : 'Loading...'}</span>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLinkMember">
                          <Link to="/profile/edit" className="dropdown-item">Edit Profile</Link>
                          <span className="dropdown-item" onClick={() => Accounts.logout((err) => {
                            if(err){
                              console.log('Logout Error: ', err)
                            }
                          })}>Logout</span>
                      </div>
                  </span>
              );
          } else {
              return (
                  <span className="nav-item nav-right dropdown" style={{ color: 'white' }} >
                      <span className="nav-link dropdown-toggle nav-text" id="navbarDropdownMenuLinkGuest" data-toggle="dropdown" style={{navItem}}>Welcome Guest</span>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLinkGuest">
                        <Link to="/login" className="dropdown-item">Login / Sign-up page</Link>
                      </div>
                  </span>
              );
          }
      }

      return (
          <nav className="navbar fixed-top" style={{
              fontFamily: 'Electrolize',
              padding: '0px',
              background: 'rgba(255,0,0,.5)'
          }}>
              <Link to="/"><img src="/assets/AMMO_LOGOv2.png" className="navbar-brand" alt="" style={{height: '40px'}}/></Link>
              <Link to="/" className="nav-link" style={this.state.home} onMouseEnter={() => this.onMouseEnter("home")} onMouseLeave={() => this.onMouseLeave("home")}>Home</Link>
              <Link to="/schedule" className="nav-link" style={this.state.schedule} onMouseEnter={() => this.onMouseEnter("schedule")} onMouseLeave={() => this.onMouseLeave("schedule")}>Schedule</Link>
              <Link to="/floatila" className="nav-link" style={this.state.floatila} onMouseEnter={() => this.onMouseEnter("floatila")} onMouseLeave={() => this.onMouseLeave("floatila")}>Floatila</Link>
              <Link to="/fleet" className="nav-link" style={this.state.fleet} onMouseEnter={() => this.onMouseEnter("fleet")} onMouseLeave={() => this.onMouseLeave("fleet")}>Fleet</Link>
              <Link to="/about/mission" className="nav-link" style={this.state.about} onMouseEnter={() => this.onMouseEnter("about")} onMouseLeave={() => this.onMouseLeave("about")}>About</Link>
              {renderProfileDropdown()}
          </nav>
      )
  }
}

export default Nav
