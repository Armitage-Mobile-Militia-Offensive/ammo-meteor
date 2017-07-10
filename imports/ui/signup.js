import React, { Component } from 'react'
import {Link, browserHistory } from 'react-router'
import ClockUTC from '../../client/utils/ClockUTC'
import md5 from 'js-md5'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

const tradeskills = ['Pilot - Fighter', 'Pilot', 'Engineer', 'Hauler', 'Explorer', 'Mining', 'Mercenary', 'Combat', 'Mechanic']

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      branch: '',
      passwordPrompt: false
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentWillMount(){
    if(Meteor.userId()) browserHistory.replace('/login')
  }
mapSkills() {
  return tradeskills.map((tradeskill) => {
    return (
      <option value={tradeskill} key={tradeskill}>{tradeskill}</option>
    )
  })
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
  handleChange(event){
    event.target.value.length > 8 ? this.setState({passwordPrompt: false}) : this.setState({passwordPrompt: true})
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
                    <div className="input-group-addon text-right" style={{width: '160px'}}>Username:</div>
                    <input type="text" ref="username" className="form-control" placeholder="Please use your in-game handle" />
                  </div>
                  <br/>
                  <div className="input-group">
                    <div className="input-group-addon text-right" style={{width: '160px'}}>Password:</div>
                    <input type="password" ref="password" className="form-control" onChange={this.handleChange.bind(this)}/>
                  </div>
                  {this.state.passwordPrompt ? <p className="card-text-muted text-right">Must be over 8 characters</p> : <br/>}
                  <div className="input-group">
                    <div className="input-group-addon text-right" style={{width: '160px'}}>Confirm Password:</div>
                    <input type="password" ref="confirmPassword" className="form-control" value=""/>
                  </div>
                  <br/>
                  <div className="input-group">
                    <div className="input-group-addon text-right" style={{width: '160px'}}>Email:</div>
                    <input type="text" ref="email" className="form-control" placeholder="example@example.com" />
                  </div>
                  <br/>
                  <div className="input-group">
                    <div className="input-group-addon text-right" style={{width: '160px'}}>Confirm Email:</div>
                    <input type="text" ref="confirmEmail" className="form-control" placeholder="example@example.com"/>
                  </div>
                  <br/>
                </div>
                {this.state.error ? <div className="alet alert-danger">{this.state.error}</div> : undefined}
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="card card-outline-primary col-12">
                <div className="card-block">
                  <h4 className="display-4">Citizen Info</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Branch, Primary Trade, and Secondary Trade</h6>
                  <br/>
                  <h4>Branch</h4>
                  <div className="btn-group" data-toggle="buttons">
                    <label className={(this.state.branch === 'Fleet') ? 'btn btn-primary active' : 'btn btn-primary'}>
                      <input type="radio" id="fleetButton" autoComplete="off" onClick={() => this.setState({ branch: 'Fleet'})} />Fleet
                    </label>
                    <label className={(this.state.branch === 'Marines') ? 'btn btn-primary active' : 'btn btn-primary'}>
                      <input type="radio" id="marinesButton" autoComplete="off" onClick={() => this.setState({ branch: 'Marines'})} />Marines
                    </label>
                    <label className={(this.state.branch === 'PaIR') ? 'btn btn-primary active' : 'btn btn-primary'}>
                      <input type="radio" id="pairButton" autoComplete="off" onClick={() => this.setState({ branch: 'PaIR'})} />Public and Internal Relations
                    </label>
                    <label className={(this.state.branch === 'LaS') ? 'btn btn-primary active' : 'btn btn-primary'}>
                      <input type="radio" id="lasButton" autoComplete="off" onClick={() => this.setState({ branch: 'LaS'})} />Logistics and Science
                    </label>
                  </div>
                  <br/>
                  <br/>
                  <div className="input-group">
                    <div className="input-group-addon text-right" style={{width: '160px'}}>Primary Skill</div>
                    <select className="custom-select">{this.mapSkills()}</select>
                  </div>
                  <br/>
                  <div className="input-group">
                    <div className="input-group-addon text-right" style={{width: '160px'}}>Secondary Skill</div>
                    <select className="custom-select">{this.mapSkills()}</select>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-block" style={{margin: '0px'}}>Submit</button>
          </form>
        </div>
      )
    }
}

export default Signup
