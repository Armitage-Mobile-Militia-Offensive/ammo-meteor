import React, { Component } from 'react'
import {Link, browserHistory } from 'react-router'
import ClockUTC from '../../client/utils/ClockUTC'
import md5 from 'js-md5'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      branch: ''
    }
  }
  componentWillMount(){
    if(Meteor.userId()) browserHistory.replace('/login')
  }
  onSubmit(e) {
    e.preventDefault()
    if(this.refs.password.value !== this.refs.confirmPassword.value){
      return this.setState({error: 'Passwords do not match'})
    }
    if(this.refs.email.value !== this.refs.confirmEmail.value) {
      return this.setState({error: 'Emails do not match'})
    }
    if((this.refs.email.value !== this.refs.confirmEmail.value) && (this.refs.password.value !== this.refs.confirmPassword.value)) {
      return this.setState({error: 'Passwords & Emails do not match'})
    }
    if((this.refs.email.value === this.refs.confirmEmail.value) && (this.refs.password.value === this.refs.confirmPassword.value)) {
      alert(
        "Username: " + this.refs.username.value + '\n' +
        "Password: " + this.refs.password.value + '\n' +
        "Email: " + this.refs.email.value
      )
    }
    // let email = this.refs.email.value.toLowerCase().trim()
    // let password = this.refs.password.value.trim()
    // let confirmpassword = this.refs.confirmpassword.value.trim()
    // let username = this.refs.username.value.trim()
    // let name = this.refs.fullName.value.trim()
    // let profile = {
    //   name: name,
    //   branch: this.state.branch
    // }
    // if (password === confirmpassword) {
    //   Accounts.createUser({
    //     username,
    //     email,
    //     password,
    //     profile
    //   }, (err) => {
    //     console.log('Sign-Up Error:', err)
    //   })
    //
    // } else {
    //   this.setState({error: 'Password missmatch'})
    // }
  }
  handleBranchClick = (value) => {
    this.setState({branch: value})
  }

  render() {
      return (
        <div className="container-fluid">
          <div className="alert alert-info text-center" role="alert">
            <strong className="display-4">For authorized users, Welcome.</strong><br/> Please follow the directions to set up your A.M.M.O. account.
          </div>
          <form onSubmit={this.onSubmit.bind(this)} style={{paddingLeft: '15px', paddingRight: '15px'}}>
            <div className="row">
              <div className="card card-outline-primary col-7">
                <div className="card-block">
                  <h2 className="card-title">Account Info</h2>
                  <h6 className="card-subtitle mb-2 text-muted">Username, Password, and Email</h6>
                  <div className="input-group">
                    <div className="input-group-addon text-right" style={{width: '170px'}}>Username:</div>
                    <input type="text" ref="username" className="form-control" placeholder="" />
                  </div>
                  <br/>
                  <div className="input-group">
                    <div className="input-group-addon text-right" style={{width: '170px'}}>Password:</div>
                    <input type="password" ref="password" className="form-control"/>
                  </div>
                  <br/>
                  <div className="input-group">
                    <div className="input-group-addon text-right" style={{width: '170px'}}>Confirm Password:</div>
                    <input type="password" ref="confirmPassword" className="form-control"/>
                  </div>
                  <br/>
                  <div className="input-group">
                    <div className="input-group-addon text-right" style={{width: '170px'}}>Email:</div>
                    <input type="text" ref="email" className="form-control" placeholder="example@example.com" />
                  </div>
                  <br/>
                  <div className="input-group">
                    <div className="input-group-addon text-right" style={{width: '170px'}}>Confirm Email:</div>
                    <input type="text" ref="confirmEmail" className="form-control"/>
                  </div>
                  <br/>
                </div>
                {this.state.error ? <div className="alet alert-danger">{this.state.error}</div> : undefined}
              </div>
            </div>
            <br/>
            <button className="btn btn-block">Submit</button>
          </form>
        </div>
      )
    }
}

export default Signup
