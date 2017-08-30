import React, { Component} from 'react'
import { Meteor } from 'meteor/meteor'
import {Link, browserHistory } from 'react-router'

import ClockUTC from '../../client/utils/ClockUTC'

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      user: ''
    }
  }
  onSubmit(e) {
    e.preventDefault()
    let email = this.refs.email.value.toLowerCase().trim()
    let password = this.refs.password.value.trim()
    Meteor.loginWithPassword({ email }, password, (err) => {
      if (err) {
        this.setState({error: err.reason})
      } else {
        this.setState({error: ''})
      }
    })
  }
  render(){
    return(
      <div className="container">
          <div className="display-4 alert alert-danger text-center" style={{ fontFamily: 'Electrolize'}}>
            <span className="fa fa-exclamation-triangle" aria-hidden="true"></span>
             Restricted Access
            <span className="fa fa-exclamation-triangle" aria-hidden="true"></span>
          </div>
          <div className="card text-center row">
            <h2 className="card-header" style={{ fontFamily: 'Electrolize' }}><strong> <span style={{ fontSize: '150%' }}>A</span>rmitage <span style={{ fontSize: '150%' }}>M</span>obile <span style={{ fontSize: '150%' }}>M</span>ilitia <span style={{ fontSize: '150%' }}>O</span>ffensive Usage Only</strong></h2>
            <br/>
            <h4 className="card-title" style={{fontFamily: 'Electrolize'}}>A.M.M.O. Login</h4>
            <p className="card-text">For authorized users, Welcome. Please enter your Credentials</p>

            {this.state.error ? <div className="alert alert-danger col-6 offset-3">{this.state.error}</div> : undefined}

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
    )
  }
}
