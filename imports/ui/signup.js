import React, { Component } from 'react'
import {Link, browserHistory } from 'react-router'
import ClockUTC from '../../client/utils/ClockUTC'
import md5 from 'js-md5'
import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import uuidv4 from 'uuid/v4'

const tradeskills = ['Pilot - Fighter', 'Pilot - Cargo', 'Pilot - Hauler', 'Pilot - Passanger Transport', 'Pilot - Exploration', 'Pilot - Mining', 'Pilot - Racer', 'Engineering - Flight Crew', 'Engineering - Ground Crew', 'Engineering - Racer (Specialist Aerospace)', 'Engineering - Racer (Specialist Ground Vehicle)', 'Engineering - Mining', 'Diplomat', 'Ambassador', 'Broker', 'Salesman', 'Recruiter', 'Scientist', 'Analyst', 'Explorer', 'Mercenaries', 'Medics', 'Ground Vehicle Operators']

// Piloting:
// Pilot - Fighter
// Pilot - Cargo
// Pilot - Hauler
// Pilot - Passanger Transport
// Pilot - Exploration
// Pilot - Mining
// Pilot - Racer
//
// Engineering:
// Engineering - Flight Crew
// Engineering - Ground Crew
// Engineering - Racer (Specialist Aerospace)
// Engineering - Racer (Specialist Ground Vehicle)
// Engineering - Mining
//
// External Relations:
// > Diplomat
// > Ambassador
// > Broker
// > Salesman
// > Recruiter
//
// Research and Analytics:
// > Scientist
// > Analyst
// > Explorer
//
// Ground/Combat Relations:
// > Mercenaries
// > Medics
// > Ground Vehicle Operators

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
    document.body.style.backgroundImage = 'url("./assets/SCBunk2.jpg")'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = 'center'
  }
  componentWillUnmount(){
    document.body.style.backgroundImage = ''
    document.body.style.backgroundRepeat = ''
    document.body.style.backgroundSize = ''
    document.body.style.backgroundPosition = ''
  }
mapSkills() {
  return tradeskills.map((tradeskill) => {
    if(false){

    } else {
      return (
        <option value={tradeskill} key={tradeskill}>{tradeskill}</option>
      )
    }
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
      return (
        <div className="container-fluid">
          <div className="alert alert-info text-center" role="alert">
            <strong className="display-4">For authorized users, Welcome.</strong><br/> Please follow the directions to set up your A.M.M.O. account.
          </div>
          <form onSubmit={this.onSubmit.bind(this)} style={{paddingLeft: '15px', paddingRight: '15px'}}>
            <div className="row">
              <div className="card card-outline-primary col-7" style={{backgroundColor: 'rgba(0,0,0,.5)', color: 'white'}}>
                <div className="card-block">
                  <div className="row align-items-end" style={{ marginBottom: '0px'}}>
                    <div className="h1 col-xs-12 col-lg-4 text-left" style={{marginBottom: '0px'}}>Account Info</div>
                    <div className="h4 col-xs-12 col-lg-8 text-right d-none d-lg-block" style={{color: '#F59B45'}}>Username, Password, and Email</div>
                  </div>
                  <div className="form-group row" style={{marginRight: '0px'}}>
                    <label className="col-sm-2 col-form-label text-right" >Username</label>
                    <div className="col-sm-10">
                      <input type="text" ref="username" className="form-control" placeholder="Please use your in-game handle"  style={{backgroundColor: 'rgba(255,255,255,.8)', color: 'black'}}/>
                    </div>
                  </div>
                  <br/>
                  <div className="form-group row" style={{marginRight: '0px'}}>
                    <label className="col-sm-2 col-form-label text-right" >Password</label>
                    <div className="col-sm-10">
                      <input type="password" ref="password" className="form-control" onChange={this.handleChange.bind(this)}  style={{backgroundColor: 'rgba(255,255,255,.8)', color: 'black'}}/>
                    </div>
                  </div>
                  {this.state.passwordPrompt ? <p className="card-text-muted text-right">Must be over 8 characters</p> : <br/>}
                  <div className="form-group row" style={{marginRight: '0px'}}>
                    <label className="col-sm-2 col-form-label text-right" >Confirm Password</label>
                    <div className="col-sm-10">
                      <input type="password" ref="confirmPassword" className="form-control" style={{backgroundColor: 'rgba(255,255,255,.8)', color: 'black'}}/>
                    </div>
                  </div>
                  <br/>
                  <div className="form-group row" style={{marginRight: '0px'}}>
                    <label className="col-sm-2 col-form-label text-right" >Email</label>
                    <div className="col-sm-10">
                      <input type="text" ref="email" className="form-control" placeholder="example@example.com" style={{backgroundColor: 'rgba(255,255,255,.8)', color: 'black'}} />
                    </div>
                  </div>
                  <br/>
                  <div className="form-group row" style={{marginRight: '0px'}}>
                    <label className="col-sm-2 col-form-label text-right" >Confirm Email</label>
                    <div className="col-sm-10">
                      <input type="text" ref="confirmEmail" className="form-control" placeholder="example@example.com" style={{backgroundColor: 'rgba(255,255,255,.8)', color: 'black'}}/>
                    </div>
                  </div>
                  <br/>
                </div>
              </div>
              {this.state.error ? this.renderAlertCard() : undefined}
            </div>
            <br/>
            <div className="row">
              <div className="card card-outline-primary col-12" style={{backgroundColor: 'rgba(0,0,0,.5)', color: 'white'}}>
                <div className="card-block">
                  <div className="row align-items-end" style={{ marginBottom: '0px'}}>
                    <div className="h1 col-xs-12 col-lg-4 text-left" style={{marginBottom: '0px', textShadow: '1px 1px 3px #F59B45'}}>Citizen Info</div>
                    <div className="h4 col-xs-12 col-lg-8 text-right d-none d-lg-block" style={{color: '#F59B45', textShadow: '1px 1px 3px black'}}>Name, Branch, Primary Trade, and Secondary Trade</div>
                  </div>
                  <br/>
                  <h6 className="" style={{color: 'white'}}>In-game name of character (<b style={{borderBottom: '2px solid #F59B45'}}>Not</b> your handle)</h6>
                  <div className="form-group row" style={{marginRight: '0px'}}>
                    <label className="col-sm-2 col-form-label text-right" >Full Name:</label>
                    <div className="col-sm-10">
                      <input type="text" ref="fullName" className="form-control" placeholder="Last Name, First Name" style={{backgroundColor: 'rgba(255,255,255,.5)'}}/>
                    </div>
                  </div>
                  <br/>
                  <h4>Branch</h4>
                  <select className="custom-select" ref="branch">
                    <option value="Fleet">Fleet</option>
                    <option disabled className="h5" style={{color: 'purple'}}>Label Test</option>
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
