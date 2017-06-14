import React, {Component} from 'react';

import Mission from './about/mission'
import History from './about/history'
import Rules from './about/rules'
import Diplomacy from './about/diplomacy'

const activeNavItem = {
    color: '#F59B45',
    borderBottom: '4px solid black'
}

const hoveredItem = {
    textDecoration: 'none',
    borderBottom: '4px solid #F59B45'
}

const navItem = {
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
    switch(this.state.subPage){
      case "Mission":
          return this.setState({mission: activeNavItem, rules: navItem, diplomacy: navItem, history: navItem })
          break
      case "History":
          return this.setState({mission: navItem, rules: navItem, diplomacy: navItem, history: activeNavItem })
          break
      case "Rules":
          return this.setState({mission: navItem, rules: activeNavItem, diplomacy: navItem, history: navItem })
          break
      case "Diplomacy":
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
              return (this.state.subPage === link) ? null : this.setState({mission: hoveredItem})
              break
          case "History":
              return (this.state.subPage === link) ? null : this.setState({history: hoveredItem})
              break
          case "Rules":
              return (this.state.subPage === link) ? null : this.setState({rules: hoveredItem})
              break
          case "Diplomacy":
              return (this.state.subPage === link) ? null : this.setState({diplomacy: hoveredItem})
              break
          default:
              return this.setState({mission: navItem, rules: navItem, diplomacy: navItem, history: navItem})
      }
  }
  onMouseLeave = (link) => {
      switch (link) {
          case "Mission":
              return (this.state.mission === activeNavItem) ? null : this.setState({mission: navItem})
              break
          case "History":
              return (this.state.history === activeNavItem) ? null : this.setState({history: navItem})
              break
          case "Rules":
              return (this.state.rules === activeNavItem) ? null : this.setState({rules: navItem})
              break
          case "Diplomacy":
              return (this.state.diplomacy === activeNavItem) ? null : this.setState({diplomacy: navItem})
              break
          default:
              return this.setState({mission: navItem, rules: navItem, diplomacy: navItem, history: navItem});
      }
  }
  handlePageTurn(link){
    this.setState({subPage: link})
    this.navSwitching()
  }
  renderPage(){
    switch(this.state.subPage){
      case "Mission":
          return <Mission/>
          break
      case "History":
          return <History/>
          break
      case "Rules":
          return <Rules/>
          break
      case "Diplomacy":
          return <Diplomacy/>
          break
      default:
          return <Mission/>
        }
  }
  render(){
    return (
      <div className="container">
        <div className="display-1 text-center" style={{fontVariant: 'small-caps'}}>About <span style={{color: '#F59B45'}}>A.M.M.O.</span></div>
        <ul className="nav nav-fill container">
          <li className="nav-item" style={this.state.mission} onClick={() => this.handlePageTurn('Mission')} onMouseEnter={() => this.onMouseEnter('Mission')} onMouseLeave={() => this.onMouseLeave('Mission')}>Mission
          </li>
          <li className="nav-item" style={this.state.history} onClick={() => this.handlePageTurn('History')} onMouseEnter={() => this.onMouseEnter('History')} onMouseLeave={() => this.onMouseLeave('History')}>History
          </li>
          <li className="nav-item" style={this.state.rules} onClick={() => this.handlePageTurn('Rules')} onMouseEnter={() => this.onMouseEnter('Rules')} onMouseLeave={() => this.onMouseLeave('Rules')}>Rules
          </li>
          <li className="nav-item" style={this.state.diplomacy} onClick={() => this.handlePageTurn('Diplomacy')} onMouseEnter={() => this.onMouseEnter('Diplomacy')} onMouseLeave={() => this.onMouseLeave('Diplomacy')}>Diplomacy
          </li>
        </ul>
        {this.renderPage()}
      </div>
    )
  }
}

export default About;
