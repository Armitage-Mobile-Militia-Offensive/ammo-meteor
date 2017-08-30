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
      <div className="row justify-content-between">
        <div className="card col-7">
          <div className="card-block">
            <h4 className="display-4">Account Info</h4>
            <h6 className="card-subtitle mb-2 text-muted">Username, Password, and Email</h6>
            <br/>
            <div className="form-group row" style={{marginRight: '0px'}}>
              <label className="col-sm-2 col-form-label text-right" >Username</label>
              <div className="col-sm-10">
                <input type="text" ref="username" className="form-control" placeholder={this.props.user ? this.props.user.username : 'Loading...'}/>
              </div>
            </div>
            <br/>
            <div className="form-group row" style={{marginRight: '0px'}}>
              <label className="col-sm-2 col-form-label text-right" style={{ width: '180px' }}>Current Password</label>
              <div className="col-sm-10">
                  <input type="password" ref="oldpassword" className="form-control"/>
              </div>
            </div>
            <br/>
            <div className="form-group row" style={{marginRight: '0px'}}>
              <label className="col-sm-2 col-form-label text-right" style={{ width: '180px' }}>New Password</label>
              <div className="col-sm-10">
                <input type="password" ref="newpassword" className="form-control"/>
              </div>
            </div>
            <br/>
            <div className="form-group row" style={{marginRight: '0px'}}>
              <label className="col-sm-2 col-form-label text-right" style={{ width: '180px' }}>Email</label>
              <div className="col-sm-10">
                <input type="text" ref="email" className="form-control" placeholder={this.props.user ? this.props.user.emails[0].address : 'Loading...'}/>
              </div>
            </div>
            <br/>
          </div>
          <span className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-10">
              <button className="btn btn-outline-dark" style={{marginRight: '10px'}} onClick={() => Meteor.call('editAccount.update', {email: this.refs.email.value.trim(), username: this.refs.username.value.trim()})}>Update Account</button>
              <button className="btn btn-outline-dark" onClick={() => Accounts.changePassword(this.refs.oldpassword.value, this.refs.newpassword.value, (err) => { this.setState({error: err.reason})})}>Update Password</button>
            </div>
          </span>
          <br/>
          {this.state.error ? <div className="alert alert-danger">{this.state.error}</div> : undefined}
        </div>
        { this.props.user ? <div className="col-3" style={{backgroundImage: `url(https://www.gravatar.com/avatar/${md5(this.props.user.emails[0].address)}?s=200)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div> : undefined} 
      </div>
    )
  }
}
