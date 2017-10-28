import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

import Mission from './about/mission'
import History from './about/history'
import Rules from './about/rules'
import Diplomacy from './about/diplomacy'

const activeNavItem = {
    color: '#F59B45',
    borderBottom: '4px solid black'
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

export default class About extends Component {
  constructor(props){
    super(props)
    this.state = {
      subPage: 'Mission',
      mission: activeNavItem,
      rules: navItem,
      ranks: navItem,
      history: navItem,
      diplomacy: navItem
    }
  }
  navSwitching () {
    switch(browserHistory.getCurrentLocation().pathname){
      case "/about/mission":
          return this.setState({mission: activeNavItem, rules: navItem, ranks: navItem, diplomacy: navItem, history: navItem })
          break
      case "/about/history":
          return this.setState({mission: navItem, rules: navItem, ranks: navItem, diplomacy: navItem, history: activeNavItem })
          break
      case "/about/rules":
          return this.setState({mission: navItem, rules: activeNavItem, ranks: navItem, diplomacy: navItem, history: navItem })
          break
      case "/about/ranks":
          return this.setState({mission: navItem,rules: navItem, ranks: activeNavItem, diplomacy: navItem, history: navItem })
          break
      case "/about/diplomacy":
          return this.setState({mission: navItem, rules: navItem, ranks: navItem, diplomacy: activeNavItem, history: navItem })
          break
      default:
          return this.setState({mission: activeNavItem, rules: navItem, ranks: navItem, diplomacy: navItem, history: navItem })
    }
  }
  componentWillMount(){
    this.navSwitching()
    document.body.style.background = `url(${"../assets/ScreenShot0019.jpg"})`
    document.body.style.backgroundRepeat = 'no-repeat'
   }
  componentWillUnmount(){
    document.body.style.backgroundImage = ''
    document.body.style.backgroundRepeat = ''
    document.body.style.backgroundSize = ''
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
          case "Ranks":
              (browserHistory.getCurrentLocation().pathname === '/about/ranks') ? null : this.setState({ranks: hoveredItem})
              break
          case "Diplomacy":
              (browserHistory.getCurrentLocation().pathname === '/about/diplomacy') ? null : this.setState({diplomacy: hoveredItem})
              break
          default:
              return this.setState({mission: navItem, rules: navItem,ranks: navItem, diplomacy: navItem, history: navItem})
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
          case "Ranks":
              (browserHistory.getCurrentLocation().pathname === '/about/ranks') ? null : this.setState({ranks: navItem})
              break
          case "Diplomacy":
              (browserHistory.getCurrentLocation().pathname === '/about/diplomacy') ? null : this.setState({diplomacy: navItem})
              break
          default:
              return this.setState({mission: navItem, rules: navItem,ranks: navItem, diplomacy: navItem, history: navItem});
      }
  }
  render(){
    return (
      <div className="container" style={{ background: `url(${"./assets/Locked.jpg"})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw' }}>
        <div className="display-1 text-center" style={{fontVariant: 'small-caps', color: 'white'}}>About<span style={{color: '#F59B45'}}>A.M.M.O.</span></div>
          <div className="container">
              <ul className="nav nav-pills row justify-content-center" style={{color: 'white'}}>
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
                  <Link className="nav-link h5" style={this.state.ranks} to="/about/ranks"  onMouseEnter={() => this.onMouseEnter('Ranks')} onMouseLeave={() => this.onMouseLeave('Ranks')}>Ranks</Link>
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
