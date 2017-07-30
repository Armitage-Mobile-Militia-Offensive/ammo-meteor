import React, { Component } from 'react'
import md5 from 'js-md5'

export default class EditAccount extends Component{
  constructor(props) {
    super(props);
    this.state = {
      branch: '',
      userId: ''
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
              <div className="input-group-addon text-right" style={{ width: '110px' }}>Username:</div>
              <input type="text" ref="email" className="form-control" placeholder={this.props.user ? this.props.user.username : 'Loading...'}/>
            </div>
            <br/>
            <div className="input-group">
              <div className="input-group-addon text-right" style={{ width: '110px' }}>Current Password:</div>
              <input type="text" ref="oldpassword" className="form-control"/>
            </div>
            <br/>
            <div className="input-group">
              <div className="input-group-addon text-right" style={{ width: '110px' }}>New Password:</div>
              <input type="text" ref="newpassword" className="form-control"/>
            </div>
            <br/>
            <div className="input-group">
              <div className="input-group-addon text-right" style={{ width: '110px' }}>Email:</div>
              <input type="text" ref="email" className="form-control" placeholder={this.props.user ? this.props.user.emails[0].address : 'Loading...'}/>
            </div>
          </div>
            <div className="container">
              <button className=" pull-left btn btn-primary" onClick={() => console.log(this.refs.email.value.trim().length)}>Update Account</button>
            </div>
          <br/>
        </div>
        <img className="float-right img-thumbnail push-1 col-3 img-fluid rounded" style={{ backgroundSize: 'cover',   backgroundPosition: 'center' }} src={this.props.user ? `https://www.gravatar.com/avatar/${md5(this.props.user.emails[0].address)}?s=200` : ''} style={{ padding: '60px' }}/>
      </div>
    )
  }
}
