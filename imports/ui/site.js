import React, { Component } from 'react'
import Nav from './nav'
import { PropTypes } from 'prop-types'
import { browserHistory } from 'react-router'
import './site.css'
export default class Site extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  homeFooter() {
    return (
      <div class="d-flex align-items-center" style={{height: '2vh', padding: '0px'}}>
        <div className="container">
          <div className="navbar navbar-fixed-bottom ">
            <div className="nav-text text-center" style={{color: 'white', fontFamily: 'Electrolize'}}>Join our discord to data at <a style={{color: '#F59B45'}} className="nav-text" href="https://discord.gg/pgJs3u6">here</a> or our RSI page at <a style={{color: '#F59B45'}} className="nav-text" href="https://robertsspaceindustries.com/orgs/AMMO">{'https://robertsspaceindustries.com/orgs/AMMO'}</a></div>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div >
        <Nav user={this.props.user}/>
        <div style={{position: 'fixed', top: '0', minHeight: '50px', marginBottom: '20px', background: 'rgba(0,0,0,.4)', zIndex: '1010', filter: 'blur(20px)', width: '100%'}}></div>
        <div style={{paddingTop: `${browserHistory.getCurrentLocation().pathname === '/' ? '0px' : '53px' }`, fontFamily: 'Electrolize'}}>
          {React.cloneElement(this.props.children, { user: this.props.user })}
        </div>
        {/* {browserHistory.getCurrentLocation().pathname === '/' ? this.homeFooter() : undefined } */}
      </div>
    )
  }
}

Site.PropTypes = {
  user: PropTypes.object
}
