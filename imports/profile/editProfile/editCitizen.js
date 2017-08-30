import React, { Component } from 'react'
import md5 from 'js-md5'

const tradeskills = ['Pilot - Fighter', 'Pilot', 'Engineer', 'Hauler', 'Explorer', 'Mining', 'Mercenary', 'Combat', 'Mechanic', 'Diplomat', 'Ambassador', 'Broker', 'Salesman', 'Recruiter', 'Racer', 'Scientist', 'Analyst']


export default class EditCitizen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      branch: '',
      userId: ''
    }
  }
  renderBranch(){
    return(
      <select className="form-control" ref="branchSelect" defaultValue={this.props.user.profile.branch}>
        <option value="Fleet" >Fleet</option>
        <option value="Marines" >Marines</option>
        <option value="LaS" >Logistics and Science</option>
        <option value="PaIR" >Public and Internal Relations</option>
      </select>
    )
  }
  mapSkills() {
    return tradeskills.map((tradeskill) => {
      return (
        <option value={tradeskill} key={tradeskill}>{tradeskill}</option>
      )
    })
  }
  render() {
    return (
      <div className="row">
        <div className="card card-outline-primary col-12">
          <div className="card-block">
            <h4 className="display-4">Citizen Info</h4>
            <h6 className="card-subtitle mb-2 text-muted">Branch, Primary Trade, and Secondary Trade</h6>
            <br/>
            <h4>Name</h4>
            <h6 className="text-muted">In-game name of character (<b>Not</b> your handle)</h6>
            <div className="form-group row">
              <label className="col-sm-1 col-form-label text-right">Full Name</label>
                <div className="col-sm-5">
                  <input type="text" ref="fullName" className="form-control" placeholder={this.props.user ? this.props.user.profile.name : 'Loading...'}/>
                  <p className="form-text text-muted">Current name: {this.props.user ? this.props.user.profile.name : 'Loading...'}</p>
                </div>
            </div>
            <h4>Branch</h4>
            <div className="form-group row">
              <div className="col-sm-1"></div>
              <div className="col-sm-5">
                {this.props.user ? this.renderBranch() : <p>Loading...</p>}
                <p className="form-text text-muted">Current branch: {this.props.user ? this.props.user.profile.branch : 'Loading...'}</p>
              </div>
            </div>
            <h4>Skills</h4>
            <div className="form-group row">
              <label className="col-sm-1 col-form-label text-right">Primary Skill</label>
                <div className="col-sm-5">
                  {this.props.user ? <select className="form-control" ref="primarySkill" defaultValue={this.props.user.profile.primarySkill}>{this.mapSkills()}</select> : <p>Loading..</p>}
                  <p className="form-text text-muted">Current primary skill: {this.props.user ? this.props.user.profile.primarySkill : 'Loading...'}</p>
                </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-1 col-form-label text-right">Secondary Skill</label>
                <div className="col-sm-5">
                  {this.props.user ? <select className="form-control" ref="secondarySkill" defaultValue={this.props.user.profile.secondarySkill}>{this.mapSkills()}</select> : <p>Loading..</p>}
                  <p className="form-text text-muted">Current secondary skill: {this.props.user ? this.props.user.profile.secondarySkill : 'Loading...'}</p>
                </div>
            </div>
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-11">
                <button className="btn btn-outline-dark">Update Citizen</button>
              </div>
            </div>
            <br/>
          </div>
        </div>
      </div>
    )
  }
}
