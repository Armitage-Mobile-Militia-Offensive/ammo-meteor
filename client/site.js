import React, { Component } from 'react'
import Nav from '../imports/ui/nav'
import { PropTypes } from 'prop-types'
import { browserHistory } from 'react-router'

export class Site extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div style={{paddingTop: `${browserHistory.getCurrentLocation().pathname === '/' ? '0px' : '53px' }`, fontFamily: 'Electrolize'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Site
