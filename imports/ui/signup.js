import React, { Component } from 'react'
import {Link, browserHistory } from 'react-router'
import ClockUTC from '../../client/utils/ClockUTC'
import md5 from 'js-md5'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import uuidv4 from 'uuid/v4'

const tradeskills = ['Pilot - Fighter', 'Pilot', 'Engineer', 'Hauler', 'Explorer', 'Mining', 'Mercenary', 'Combat', 'Mechanic']

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
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
    if(this.refs.password.value.length <= 8){
      return this.setState({error: 'Password must be over 8 characters'})
    }
    if(this.refs.email.value !== this.refs.confirmEmail.value) {
      return this.setState({error: 'Emails do not match'})
    }
    if((this.refs.email.value !== this.refs.confirmEmail.value) && (this.refs.password.value !== this.refs.confirmPassword.value)) {
      return this.setState({error: 'Passwords & Emails do not match'})
    }
    if((this.refs.email.value === this.refs.confirmEmail.value) && (this.refs.password.value === this.refs.confirmPassword.value)) {
      let email = this.refs.email.value.toLowerCase().trim()
      let password = this.refs.password.value.trim()
      let username = this.refs.username.value.trim()
      let name = this.refs.fullName.value.trim()
      let profile = {
        name: name,
        branch: this.refs.branch.value,
        primarySkill: this.refs.primarySkill.value,
        secondarySkill: this.refs.secondarySkill.value,
        role: 'Director'
      }
      Accounts.createUser({
        username,
        email,
        password,
        profile
      }, (err) => {
        if(err){
          console.log(err)
          this.setState({error: err})
        }
      })
      browserHistory.push('/')
    }

  }
  handleChange(event){
    event.target.value.length > 8 ? this.setState({passwordPrompt: false}) : this.setState({passwordPrompt: true})
  }
  renderAlertCard(){
    return (
      <div className="card card-outline-danger push-1 col-4">
        <div className="card-block">
          <h2 className="card-title">Submission Error</h2>
          <h6 className="card-subtitle mb-2 text-muted">Something occured when submitting your information</h6>
          <p className="card-text">{this.state.error}</p>
        </div>
      </div>
    )
  }
  render() {
    console.log(this.state)
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
                    <input type="password" ref="confirmPassword" className="form-control"/>
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
              </div>
              {this.state.error ? this.renderAlertCard() : undefined}
            </div>
            <br/>
            <div className="row">
              <div className="card card-outline-primary col-12">
                <div className="card-block">
                  <h4 className="display-4">Citizen Info</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Branch, Primary Trade, and Secondary Trade</h6>
                  <br/>
                  <h4>Name</h4>
                  <h6 className="text-muted">In-game name of character (<b>Not</b> your handle)</h6>
                  <div className="input-group row container">
                    <div className="input-group-addon text-right" style={{width: '160px'}}>Full Name:</div>
                    <input type="text" ref="fullName" className="form-control col-6" placeholder="Last Name, First Name" />
                  </div>
                  <br/>
                  <h4>Branch</h4>
                  <select className="custom-select" ref="branch">
                    <option value="Fleet">Fleet</option>
                    <option value="Marines">Marines</option>
                    <option value="PaIR">Public and Internal Relations</option>
                    <option value="LaS">Logistics and Science</option>
                  </select>
                  <br/>
                  <br/>
                  <h4>Skills</h4>
                  <div className="input-group">
                    <div className="input-group-addon text-right" style={{width: '160px'}}>Primary Skill</div>
                    <select className="custom-select" ref="primarySkill">{this.mapSkills()}</select>
                  </div>
                  <br/>
                  <div className="input-group">
                    <div className="input-group-addon text-right" style={{width: '160px'}}>Secondary Skill</div>
                    <select className="custom-select" ref="secondarySkill">{this.mapSkills()}</select>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-block" onClick={() => this.onSubmit.bind(this)} style={{margin: '0px'}}>Submit</button>
          </form>
        </div>
      )
    }
}

export default Signup
