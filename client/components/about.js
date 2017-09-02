import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'


import Mission from './about/mission'
import History from './about/history'
import Rules from './about/rules'
import Diplomacy from './about/diplomacy'

import './about.css'

const activeNavItem = {
    color: 'black',
    borderBottom: '4px solid black'
}

const hoveredItem = {
    color: 'black',
    textDecoration: 'none',
    borderBottom: '4px solid #F59B45'
}

const navItem = {
    color: 'black',
    textDecoration: 'none'
}

class About extends Component {
  constructor(props){
    super(props)
    this.state = {
      subPage: 'Mission',
      mission: activeNavItem,
      rules: navItem,
      history: navItem,
      diplomacy: navItem
    }
  }
  navSwitching = () => {
    switch(browserHistory.getCurrentLocation().pathname){
      case "/about/mission":
          return this.setState({mission: activeNavItem, rules: navItem, diplomacy: navItem, history: navItem })
          break
      case "/about/history":
          return this.setState({mission: navItem, rules: navItem, diplomacy: navItem, history: activeNavItem })
          break
      case "/about/rules":
          return this.setState({mission: navItem, rules: activeNavItem, diplomacy: navItem, history: navItem })
          break
      case "/about/diplomacy":
          return this.setState({mission: navItem, rules: navItem, diplomacy: activeNavItem, history: navItem })
          break
      default:
          return this.setState({mission: activeNavItem, rules: navItem, diplomacy: navItem, history: navItem })
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
          case "Mission":
              (browserHistory.getCurrentLocation().pathname === '/about/mission') ? null : this.setState({mission: hoveredItem})
              break
          case "History":
              (browserHistory.getCurrentLocation().pathname === '/about/history') ? null : this.setState({history: hoveredItem})
              break
          case "Rules":
              (browserHistory.getCurrentLocation().pathname === '/about/rules') ? null : this.setState({rules: hoveredItem})
              break
          case "Diplomacy":
              (browserHistory.getCurrentLocation().pathname === '/about/diplomacy') ? null : this.setState({diplomacy: hoveredItem})
              break
          default:
              return this.setState({mission: navItem, rules: navItem, diplomacy: navItem, history: navItem})
      }
  }
  onMouseLeave = (link) => {
      switch (link) {
          case "Mission":
              (browserHistory.getCurrentLocation().pathname === '/about/mission') ? null : this.setState({mission: navItem})
              break
          case "History":
              (browserHistory.getCurrentLocation().pathname === '/about/history') ? null : this.setState({history: navItem})
              break
          case "Rules":
              (browserHistory.getCurrentLocation().pathname === '/about/rules') ? null : this.setState({rules: navItem})
              break
          case "Diplomacy":
              (browserHistory.getCurrentLocation().pathname === '/about/diplomacy') ? null : this.setState({diplomacy: navItem})
              break
          default:
              return this.setState({mission: navItem, rules: navItem, diplomacy: navItem, history: navItem});
      }
  }
  render(){
    return (
      <div className="container">
        <div className="display-1 text-center" style={{fontVariant: 'small-caps'}}>About <span style={{color: '#F59B45'}}>A.M.M.O.</span></div>
          <div className="container">
              <ul className="nav nav-pills row justify-content-center">
                <li className="nav-item text-center col-md-auto">
                  <Link className="nav-link h5" style={this.state.mission} to="/about/mission" onMouseEnter={() => this.onMouseEnter('Mission')} onMouseLeave={() => this.onMouseLeave('Mission')}>Mission</Link>
                </li>
                <li className="nav-item text-center col-md-auto">
                  <Link className="nav-link h5" style={this.state.history} to="/about/history" onMouseEnter={() => this.onMouseEnter('History')} onMouseLeave={() => this.onMouseLeave('History')}>History</Link>
                </li>
                <li className="nav-item text-center col-md-auto">
                  <Link className="nav-link h5" style={this.state.rules} to="/about/rules"  onMouseEnter={() => this.onMouseEnter('Rules')} onMouseLeave={() => this.onMouseLeave('Rules')}>Rules</Link>
                </li>
                <li className="nav-item text-center col-md-auto">
                  <Link className="nav-link h5" style={this.state.diplomacy} to="/about/diplomacy" onMouseEnter={() => this.onMouseEnter('Diplomacy')} onMouseLeave={() => this.onMouseLeave('Diplomacy')}>Diplomacy</Link>
                </li>
              </ul>
          </div>
        {this.props.children}
      </div>
    )
  }
}

export default About;
