import React, { Component } from 'react'
import Nav from './nav'
import { PropTypes } from 'prop-types'
import { browserHistory } from 'react-router'

export default class Site extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <Nav user={this.props.user}/>
        <div style={{paddingTop: `${browserHistory.getCurrentLocation().pathname === '/' ? '0px' : '53px' }`, fontFamily: 'Electrolize'}}>
          {React.cloneElement(this.props.children, { user: this.props.user })}
        </div>
      </div>
    )
  }
}

Site.PropTypes = {
  user: PropTypes.object
}
