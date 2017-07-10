import React, { Component } from 'react'
import {Link, browserHistory } from 'react-router'
import ClockUTC from '../../client/utils/ClockUTC'
import md5 from 'js-md5'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      user: this.props.user
    }
  }
  onSubmit(e) {
    e.preventDefault()
    let email = this.refs.email.value.toLowerCase().trim()
    let password = this.refs.password.value.trim()
    Meteor.loginWithPassword({ email }, password, (err) => {
      if (err) {
        this.setState({error: 'Unable to login. Check email and password.'})
      } else {
        this.setState({error: ''})
      }
    })
  }
  componentWillReceiveProps(props){
    this.setState({user: this.props.user})
  }
  render() {
    if (!Meteor.userId()) {
      return (
        <div className="row">
          <div className="col-10 offset-1">
            <h1 className="display-4 alert alert-danger text-center" style={{ fontFamily: 'Electrolize' }}>
              <span className="fa fa-exclamation-triangle" aria-hidden="true"></span>
               Restricted Access 
              <span className="fa fa-exclamation-triangle" aria-hidden="true"></span>
            </h1>
            <div className="card text-center row ">
              <h2 className="card-header" style={{ fontFamily: 'Electrolize' }}><strong> <span style={{ fontSize: '150%' }}>A</span>rmitage <span style={{ fontSize: '150%' }}>M</span>obile <span style={{ fontSize: '150%' }}>M</span>ilitia <span style={{ fontSize: '150%' }}>O</span>ffensive Usage Only</strong></h2>
              <br/>
              <h4 className="card-title" style={{fontFamily: 'Electrolize'}}>A.M.M.O. Login</h4>
              <p className="card-text">For authorized users, Welcome. Please enter your Credentials</p>
              <form onSubmit={this.onSubmit.bind(this)}>
                <div className="input-group container-fluid col-6 offset-3 row">
                  <div className="input-group-addon container-fluid col-3 text-right" style={{width: '100px'}}>Email</div>
                  <input type="text" className="form-control container-fluid col-9" ref="email"/>
                </div>
                <br/>
                <div className="input-group col-6 offset-3 row">
                  <div className="input-group-addon col-3 text-right" style={{width: '100px'}}>Password</div>
                  <input type="password" className="form-control col-9" ref="password"/>
                </div>
                <br/>
                <div className="col-6 offset-3 row container-fluid">
                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </div>
                <br/>
              </form>
              <Link to="/signup" className="text-center">Need a Account?</Link>
              <br/>
              <div className="card-footer text-muted">
                <ClockUTC/>
              </div>
            </div>
          </div>
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
                <span style={{
                  color: '#F59B45'
                }}>
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
