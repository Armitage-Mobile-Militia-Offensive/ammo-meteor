import React, { Component } from 'react'
import {Link, browserHistory } from 'react-router'
import ClockUTC from '../../client/utils/ClockUTC'
import md5 from 'js-md5'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

export default class LoginCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: ''
    }
  }
  componentWillMount(){
    document.body.style.backgroundImage = 'url("./assets/Unlocked.jpg")'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = 'center'
  }
  componentWillUnmount(){
    document.body.style.backgroundImage = ''
    document.body.style.backgroundRepeat = ''
    document.body.style.backgroundSize = ''
    document.body.style.backgroundPosition = ''
  }
  render(){
    return(
      <div className="container">
        <h1 className="display-2 alert alert-info text-center">Welcome { this.props.user ? this.props.user.username : 'loading...' } </h1>
        <div className="text-center">
          <img className="img-fluid" alt="User Avatar" src={this.props.user ? `https://www.gravatar.com/avatar/${md5(this.props.user.emails[0].address)}` : ''}/>
        </div>
        <div className="card text-center">
          <h2 className="card-header" style={{color: 'red'}}>
            <strong>Armitage Mobile Militia Offensive Usage Only</strong>
          </h2>
          <div className="card-block">
            <h4 className="card-title">Please follow directions below</h4>
            <p className="card-text">Member since:</p>
            <button type="button" className="btn btn-primary" onClick={() => Accounts.logout((err) => {
              console.log('Logout Error: ', err)
            })}>Log out of
              <span style={{ color: '#F59B45' }}>
                <strong>A.M.M.O.</strong>
              </span>
            </button>
          </div>
          <div className="card-footer text-muted">
            <ClockUTC/>
          </div>
        </div>
      </div>
    )
  }
}
