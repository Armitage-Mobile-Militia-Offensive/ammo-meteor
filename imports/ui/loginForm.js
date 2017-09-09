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
      <div  className="align-self-center mx-auto" >
          <div className="alert alert-danger text-center display-4 d-flex justify-content-between" style={{ fontFamily: 'Electrolize'}}>
            <span className="fa fa-exclamation-triangle" aria-hidden="true"></span>
             Restricted Access
            <span className="fa fa-exclamation-triangle" aria-hidden="true"></span>
          </div>
          <div className="card text-center">
            <h2 className="card-header" style={{ fontFamily: 'Electrolize' }}><strong> <span style={{ fontSize: '150%' }}>A</span>rmitage <span style={{ fontSize: '150%' }}>M</span>obile <span style={{ fontSize: '150%' }}>M</span>ilitia <span style={{ fontSize: '150%' }}>O</span>ffensive Usage Only</strong></h2>
            <br/>
            <h4 className="card-title" style={{fontFamily: 'Electrolize'}}>A.M.M.O. Login</h4>
            <p className="card-text">For authorized users, Welcome. Please enter your Credentials</p>
            <div className="row justify-content-sm-center container ">
              {this.state.error ? <div className="alert alert-danger col-10">{this.state.error}</div> : undefined}
            </div>
            <form onSubmit={this.onSubmit.bind(this)} className="row justify-content-sm-center">
              <div className="col-10 form-group row justify-content-md-center" style={{marginRight: '0px'}}>
                <label className="col-sm-3 col-form-label text-right" >Email</label>
                <div className="col-sm-9">
                  <input type="text" ref="email" className="form-control" />
                </div>
              </div>
              <br/>
              <div className="col-10 form-group row justify-content-sm-center" style={{marginRight: '0px'}}>
                <label className="col-sm-3 col-form-label text-right" >Password</label>
                <div className="col-sm-9">
                  <input type="password" ref="password" className="form-control" />
                </div>
              </div>
              <br/>
              <div className="d-flex justify-content-center container-fluid row">
                <button type="submit" className="btn btn-primary col-4">Submit</button>
              </div>
              <br/>
            </form>
            <Link to="/signup" className="row justify-content-sm-center">Need a Account?</Link>
            <br/>
            <div className="card-footer text-muted">
              <ClockUTC/>
            </div>
          </div>
      </div>
    )
  }
}
