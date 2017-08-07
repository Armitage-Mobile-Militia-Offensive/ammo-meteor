import React, { Component } from 'react'
import {Accounts} from 'meteor/accounts-base'
import md5 from 'js-md5'

export default class EditAccount extends Component{
  constructor(props) {
    super(props);
    this.state = {
      branch: '',
      userId: '',
      error: ''
    }
  }
  render() {
    return (
      <div className="row">
        <div className="card card-outline-primary col-7">
          <div className="card-block">
            <h4 className="display-4">Account Info</h4>
            <h6 className="card-subtitle mb-2 text-muted">Username, Password, and Email</h6>
            <br/>
            <div className="input-group">
              <div className="input-group-addon text-right" style={{ width: '180px' }}>Username:</div>
              <input type="text" ref="username" className="form-control" placeholder={this.props.user ? this.props.user.username : 'Loading...'}/>
            </div>
            <br/>
            <div className="input-group">
              <div className="input-group-addon text-right" style={{ width: '180px' }}>Current Password:</div>
              <input type="password" ref="oldpassword" className="form-control"/>
            </div>
            <br/>
            <div className="input-group">
              <div className="input-group-addon text-right" style={{ width: '180px' }}>New Password:</div>
              <input type="password" ref="newpassword" className="form-control"/>
            </div>
            <br/>
            <div className="input-group">
              <div className="input-group-addon text-right" style={{ width: '180px' }}>Email:</div>
              <input type="text" ref="email" className="form-control" placeholder={this.props.user ? this.props.user.emails[0].address : 'Loading...'}/>
            </div>
          </div>
            <div className="container">
              <button className="pull-left btn btn-primary" onClick={() => Meteor.call('editAccount.update', {email: this.refs.email.value.trim(), username: this.refs.username.value.trim()})}>Update Account</button>
              <button className="pull-left btn btn-primary" onClick={() => Accounts.changePassword(this.refs.oldpassword.value, this.refs.newpassword.value, (err) => { this.setState({error: err.reason})})}>Update Password</button>
            </div>
          <br/>
          {this.state.error ? <div className="alert alert-danger">{this.state.error}</div> : undefined}
        </div>
        <img className="float-right img-thumbnail push-1 col-3 img-fluid rounded" style={{ backgroundSize: 'cover',   backgroundPosition: 'center' }} src={this.props.user ? `https://www.gravatar.com/avatar/${md5(this.props.user.emails[0].address)}?s=200` : ''} style={{ padding: '60px' }}/>
      </div>
    )
  }
}
