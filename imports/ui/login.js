import React, { Component } from 'react';
import {Link} from 'react-router';
import { PropTypes } from 'prop-types';
import { Button, Header, Icon, Image} from 'semantic-ui-react';
import ClockUTC from '../../client/utils/ClockUTC'
import md5 from 'js-md5'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: false,
      signupUN: '',
      signupEM: '',
      signupFullName: '',
      errorType: '',
      branch: '',
      user: Meteor.user()
    }
  }
  componentWillMount(){
    this.setState({user: Meteor.user()})
  }
  _toggleApply = () => {
    this.setState({signup: !this.state.signup})
  }
  _handleLogin = () => {
    let email = this.refs.loginEmail.value.toLowerCase().trim()
    let password = this.refs.loginPassword.value.trim()
    Meteor.loginWithPassword({
      email
    }, password, (err) => {
      console.log('Sign-In Error:', err)
    })
  }
  handleSignup = () => {
    let email = this.refs.email.value.toLowerCase().trim()
    let password = this.refs.password.value.trim()
    let confirmpassword = this.refs.confirmpassword.value.trim()
    let username = this.refs.username.value.trim()
    let name = this.refs.fullName.value.trim()
    let profile = {
      name: name,
      branch: this.state.branch
    }
    if (password === confirmpassword) {
      Accounts.createUser({
        username,
        email,
        password,
        profile
      }, (err) => {
        console.log('Sign-Up Error:', err)
      })

    } else {
      this.setState({errorType: 'Password missmatch'})
    }
  }
  handleBranchClick = (value) => {
    this.setState({branch: value})
  }
  loginSignupInternals(){
    if(!this.state.signup){
      return (
        <div className="card-block">
          <h4 className="card-title" style={{fontFamily: 'Electrolize'}}>Please follow directions below</h4>
          <p className="card-text">For authorized users, Welcome.<br/>Please follow the button to either sign-in to your profile or sign-up as a new member.</p>
          <div className="form-signin col-6 offset-3">
            <h2 className="form-signin-heading" style={{fontFamily: 'Electrolize'}}>Input your Credentials</h2>
            <input type="email" className="form-control" placeholder="Email address" ref="loginEmail" />
            <input type="password" className="form-control" ref="loginPassword" placeholder="Password"/>
            <div className="row container-fluid">
              <button className="btn btn-lg btn-primary col-7" onClick={() => this._handleLogin()}>Enter</button>
              <button className="btn btn-lg btn-outline-primary col-4 push-1" onClick={() => this._toggleApply()}>Apply</button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="card-block">
          <h4 className="card-title" style={{fontFamily: 'Electrolize'}}>A.M.M.O. Enrollment</h4>
          <p className="card-text">For authorized users, Welcome.<br/>Please follow the Guide bellow to enroll as a new A.M.M.O. member</p>
          <div className="col-10 offset-1">
            <h3 className="text-left" style={{fontFamily: 'Electrolize'}}>Username</h3>
            <input type="email" id="inputEmail" className="form-control" placeholder="Username" ref="username" value ={this.state.signupUN} onChange={() => {this.setState({signupUN: this.refs.username.value.trim()})}}/>
            <br/>
            <h3 className="text-left" style={{fontFamily: 'Electrolize'}}>Full Name</h3>
            <h6 className="text-left text-muted" style={{fontFamily: 'Electrolize'}}>Name of Current Star Citizen Character</h6>
            <input type="email" id="inputEmail" className="form-control" placeholder="Last, First Name" ref="fullName" value ={this.state.signupFullName} onChange={() => {this.setState({signupFullName: this.refs.fullName.value.trim()})}}/>
            <br/>
            <h3 className="text-left" style={{fontFamily: 'Electrolize'}}>Email</h3>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" ref="email" value ={this.state.signupEM} onChange={() => {this.setState({signupEM: this.refs.email.value.toLowerCase().trim()})}}/>
            <br/>
            <h3 className="text-left" style={{fontFamily: 'Electrolize'}}>Password</h3>
            <input type="password" className="form-control" placeholder="Password" ref="password"/>
            <input type="password" className="form-control" placeholder="Confirm Password" ref="confirmpassword"/>
            <br/>
            <h3 className="text-left" style={{fontFamily: 'Electrolize'}}>Branch</h3>
            <div className="form-group text-left">
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" name="gridRadios" id="Fleet" value="Fleet" onClick={()=>this.handleBranchClick('Fleet')}/>
                  Fleet
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" name="gridRadios" id="Marines" value="Marines" onClick={()=>this.handleBranchClick('Marines')}/>
                  Marines
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" name="gridRadios" id="PaIR" value="PaIR" onClick={()=>this.handleBranchClick('PaIR')}/>
                  Public and Internal Relations
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" name="gridRadios" id="LaS" value="LaS" onClick={()=>this.handleBranchClick('LaS')}/>
                  Logistics and Science
                </label>
              </div>
            </div>
            <br/>
            <div className="row container-fluid">
              <button className="btn btn-lg btn-primary col-7" onClick={() => this.handleSignup()}>Enter</button>
              <button className="btn btn-lg btn-outline-primary col-4 push-1" onClick={() => this._toggleApply()}>Cancel</button>
            </div>
          </div>
        </div>
      )
    }
  }
  render() {
    console.log(this.state.user)
    if (!Meteor.userId()) {
      return (
        <div className="container-fluid row">
          <div className="col-8 offset-2">
            <h1 className="display-4 alert alert-danger text-center" style={{ fontFamily: 'Electrolize' }}>
              <span className="fa fa-exclamation-triangle" aria-hidden="true"></span> Restricted Access <span className="fa fa-exclamation-triangle" aria-hidden="true"></span>
            </h1>
            <div className="card text-center row ">
              <h2 className="card-header" style={{ fontFamily: 'Electrolize' }}><strong> <span style={{ fontSize: '150%' }}>A</span>rmitage <span style={{ fontSize: '150%' }}>M</span>obile <span style={{ fontSize: '150%' }}>M</span>ilitia <span style={{ fontSize: '150%' }}>O</span>ffensive Usage Only</strong></h2>
              {this.loginSignupInternals()}
              <div className="card-footer text-muted">
                <ClockUTC/>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1 className="display-2 alert alert-info text-center">Welcome {this.state.user.username}</h1>
          <div className="text-center">
            <img className="img-fluid" alt="User Avatar" src={`https://www.gravatar.com/avatar/${md5(this.state.user.email[0].address)}`}/>
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
      );
    }
  }
}

export default Login
