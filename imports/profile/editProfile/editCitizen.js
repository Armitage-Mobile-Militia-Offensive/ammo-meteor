import React, { Component } from 'react'
import md5 from 'js-md5'

const tradeskills = [
  'Pilot - Fighter',
  'Pilot',
  'Engineer',
  'Hauler',
  'Explorer',
  'Mining',
  'Mercenary',
  'Combat',
  'Mechanic'
]

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
      <select className="custom-select" ref="branchSelect" defaultValue={this.props.user.profile.branch}>
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
    console.log(this.props)
    return (
      <div className="row">
        <div className="card card-outline-primary col-12">
          <div className="card-block">
            <h4 className="display-4">Citizen Info</h4>
            <h6 className="card-subtitle mb-2 text-muted">Branch, Primary Trade, and Secondary Trade</h6>
            <br/>
            <h4>Name</h4>
            <h6 className="text-muted">In-game name of character (<b>Not</b> your handle)</h6>
            <div className="input-group row container">
              <div className="input-group-addon text-right" style={{ width: '160px' }}>Full Name:</div>
              <input type="text" ref="fullName" className="form-control col-6" placeholder={this.props.user ? this.props.user.profile.name : 'Loading...'}/>
            </div>
            <br/>
            <h4>Branch</h4>
            {this.props.user ? this.renderBranch() : <p>Loading...</p>}
            <br/>
            <br/>
            <h4>Skills</h4>
            <div className="input-group">
              <div className="input-group-addon text-right" style={{ width: '160px' }}>Primary Skill</div>
              {this.props.user ? <select className="custom-select" ref="primarySkill" defaultValue={this.props.user.profile.primarySkill}>{this.mapSkills()}</select> : <p>Loading..</p>}
            </div>
            <br/>
            <div className="input-group">
              <div className="input-group-addon text-right" style={{ width: '160px' }}>Secondary Skill</div>
              {this.props.user ? <select className="custom-select" ref="secondarySkill" defaultValue={this.props.user.profile.secondarySkill}>{this.mapSkills()}</select> : <p>Loading..</p>}
            </div>
          </div>
          <div className="container-fluid">
            <label className="custom-control custom-checkbox">
              <input type="checkbox" ref="updateCitizen" className="custom-control-input"/>
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Update Citizen Information?</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}
