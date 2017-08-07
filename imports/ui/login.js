import React, { Component } from 'react'
import {Link, browserHistory } from 'react-router'
import ClockUTC from '../../client/utils/ClockUTC'
import md5 from 'js-md5'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

import LoginForm from './loginForm'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      user: this.props.user
    }
  }
  componentWillReceiveProps(props){
    this.setState({user: this.props.user})
  }
  render() {
    if (!Meteor.userId()) {
      return (
        <div className="row">
          <LoginForm  />
        </div>
      )
    } else {
      return (
        <div className="container">
          <h1 className="display-2 alert alert-info text-center">Welcome { this.props.user ? this.props.user.username : 'loading...' } </h1>
          <div className="text-center">
            <img className="img-fluid" alt="User Avatar" src={this.props.user ? `https://www.gravatar.com/avatar/${md5(this.props.user.emails[0].address)}` : ''}/>
          </div>
          <div className="card text-center">
            <h2 className="card-header">
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
}

export default Login
