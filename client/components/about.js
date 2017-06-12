import React, {Component} from 'react';

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
              (this.state.mission === activeNavItem) ? null : this.setState({Mission: hoveredItem})
              break
          case "History":
              (this.state.history === activeNavItem) ? null : this.setState({history: hoveredItem})
              break
          case "Rules":
              (this.state.rules === activeNavItem) ? null : this.setState({rules: hoveredItem})
              break
          case "Diplomacy":
              (this.state.diplomacy === activeNavItem) ? null : this.setState({diplomacy: hoveredItem})
              break
          default:
              this.setState({Mission: navItem, rules: navItem, diplomacy: navItem, history: navItem})
      }
  }
  onMouseLeave = (link) => {
      switch (link) {
          case "Mission":
              (this.state.mission === activeNavItem) ? null : this.setState({Mission: navItem})
              break
          case "History":
              (this.state.history === activeNavItem) ? null : this.setState({scheduler: navItem})
              break
          case "Rules":
              (this.state.rules === activeNavItem) ? null : this.setState({rules: navItem})
              break
          case "Diplomacy":
              (this.state.diplomacy === activeNavItem) ? null : this.setState({diplomacy: navItem})
              break
          default:
              this.setState({Mission: navItem, rules: navItem, diplomacy: navItem, history: navItem});
      }
  }
  handlePageTurn(link){
    switch (link) {
        case "Mission":
            this.setState({subPage: 'Home'})
            break
        case "History":
            this.setState({subPage: 'History'})
            break
        case "Rules":
            this.setState({subPage: 'Rules'})
            break
        case "Diplomacy":
            this.setState({subPage: 'Diplomacy'})
            break
        default:
            this.setState({subPage: 'Home'});
    }
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
        <ul className="nav nav-fill">
          <li className="nav-item">
            <div className="nav-link active" onClick={() => this.handlePageTurn('Mission')} onMouseEnter={() => this.onMouseEnter('Mission')} onMouseLeave={() => this.onMouseLeave('Mission')}>Mission</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={() => this.handlePageTurn('History')} onMouseEnter={() => this.onMouseEnter('History')} onMouseLeave={() => this.onMouseLeave('History')}>History</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={() => this.handlePageTurn('Rules')} onMouseEnter={() => this.onMouseEnter('Rules')} onMouseLeave={() => this.onMouseLeave('Rules')}>Rules</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={() => this.handlePageTurn('Diplomacy')} onMouseEnter={() => this.onMouseEnter('Diplomacy')} onMouseLeave={() => this.onMouseLeave('Diplomacy')}>Diplomacy</div>
          </li>
        </ul>
        {this.handlePageTurn()}
      </div>
    )
  }
}

export default About;
