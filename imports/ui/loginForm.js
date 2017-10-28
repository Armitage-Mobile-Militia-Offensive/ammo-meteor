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
  componentWillMount(){
    document.body.style.backgroundImage = 'url("./assets/Locked.jpg")'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundAttachment = 'fixed'
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = 'center'
  }
  componentWillUnmount(){
    document.body.style.backgroundImage = ''
    document.body.style.backgroundRepeat = ''
    document.body.style.backgroundAttachment = ''
    document.body.style.backgroundSize = ''
    document.body.style.backgroundPosition = ''
  }
  onSubmit(e) {
    e.preventDefault()
    if(this.refs.email.value.toLowerCase().trim().includes('@')) {
      let email = this.refs.email.value.toLowerCase().trim()
      let password = this.refs.password.value.trim()
      Meteor.loginWithPassword({ email }, password, (err) => {
        if (err) {
          this.setState({error: err.reason})
        } else {
          this.setState({error: ''})
        }
      })
    } else {
      let username = this.refs.email.value.toLowerCase().trim()
      let password = this.refs.password.value.trim()
      Meteor.loginWithPassword({ username }, password, (err) => {
        if (err) {
          this.setState({error: err.reason})
        } else {
          this.setState({error: ''})
        }
      })
    }
  }
  render(){
    return(
      <div  className="align-self-center mx-auto" >
          <div className="alert alert-danger text-center display-4 d-flex justify-content-between" style={{ fontFamily: 'Electrolize', backgroundColor: 'rgba(255,0,0,.5)', color: 'white'}}>
            <span className="fa fa-exclamation-triangle" aria-hidden="true"></span>
             Restricted Access
            <span className="fa fa-exclamation-triangle" aria-hidden="true"></span>
          </div>
          <div id="glasscard" className="card text-center glass" style={{backgroundColor: 'rgba(0,0,0,.5)', overflow: 'hidden', color: 'white'}}>
            <h2 className="" style={{ fontFamily: 'Electrolize', color: 'white', backgroundColor: 'rgba(0,0,0,.5)' }}><strong> <span style={{ fontSize: '125%' }}>A</span>rmitage <span style={{ fontSize: '125%' }}>M</span>obile <span style={{ fontSize: '125%' }}>M</span>ilitia <span style={{ fontSize: '125%' }}>O</span>ffensive Usage Only</strong></h2>
            <br/>
            <h4 className="card-title" style={{fontFamily: 'Electrolize'}}>A.M.M.O. Login</h4>
            <p className="card-text">For authorized users, Welcome. Please enter your Credentials</p>
            <div className="row justify-content-sm-center container ">
              {this.state.error ? <div className="alert alert-danger col-10">{this.state.error}</div> : undefined}
            </div>
            <form onSubmit={this.onSubmit.bind(this)} className="row justify-content-sm-center">
              <div className="col-10 form-group row justify-content-md-center" style={{marginRight: '0px'}}>
                <label className="col-sm-3 col-form-label text-right" style={{fontSize: '125%' }} >Email</label>
                <div className="col-sm-9">
                  <input type="text" ref="email" className="form-control" />
                </div>
              </div>
              <br/>
              <div className="col-10 form-group row justify-content-sm-center" style={{marginRight: '0px'}}>
                <label className="col-sm-3 col-form-label text-right" style={{fontSize: '125%' }} >Password</label>
                <div className="col-sm-9">
                  <input type="password" ref="password" className="form-control" />
                </div>
              </div>
              <br/>
              <div className="d-flex justify-content-center container-fluid row">
                <button type="submit" className="btn btn-outline-dark col-4 h4 " style={{color: '#F59B45', backgroundColor: 'black'}}>Submit</button>
              </div>
              <br/>
            </form>
            <Link to="/signup" className="row justify-content-sm-center" style={{color: '#F59B45'}}>Need a Account?</Link>
            <br/>
            <div className="card-footer" style={{backgroundColor: 'rgba(0,0,0,.5)', color: 'white'}}>
              <ClockUTC />
            </div>
          </div>
      </div>
    )
  }
}
