import React, {Component} from 'react'
import {Meteor} from 'meteor/meteor'
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

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      branch: '',
      userId: ''
    }
  }
  mapSkills() {
    return tradeskills.map((tradeskill) => {
      return (
        <option value={tradeskill} key={tradeskill}>{tradeskill}</option>
      )
    })
  }
  handleBranchClick = (value) => {
    this.setState({branch: value})
  }
  branchChange(newBranch) {
    Meteor.users.update(Meteor.userId(), {
      $set: {
        "profile.someNewField": newData
      }
    })
  }
  // componentDidMount() {
  //   $('[data-toggle="tooltip"]').tooltip()
  // }
  //
  // componentDidUpdate() {
  //   $('[data-toggle="tooltip"]').tooltip()
  // }
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
  handleBranchUpdate(e){
    e.preventDefault()
    //Meteor.users.update(Meteor.userId(), {$set: {"profile.branch": this.refs.branchSelect.value}})
    console.log('Branch update fired', this.props.user.profile)
  }
  componentWillReceiveProps(){
    return this.props.user ? this.setState({branch: this.props.user.profile.branch, userID: this.props.user._id}) : undefined
  }
  onSubmit(){
    if(this.refs.updateAccount.checked){
      ((this.refs.email.value.trim() < 1) || (this.refs.email.value.trim() === this.props.user.emails[0].adress)) ? console.log('Unchanged') : console.log('Changed')
    }
    if(this.refs.updateCitizen.checked){
      this.refs.branchSelect.value === this.props.user.profile.branch ? undefined : Meteor.users.update(Meteor.userId(), {$set: {"profile.branch": this.refs.branchSelect.value}})
      this.refs.primarySkill.value === this.props.user.profile.primarySkill ? undefined : Meteor.users.update(Meteor.userId(), {$set: {"profile.primarySkill": this.refs.primarySkill.value}})
      this.refs.secondarySkill.value === this.props.user.profile.secondarySkill ? undefined : Meteor.users.update(Meteor.userId(), {$set: {"profile.secondarySkill": this.refs.secondarySkill.value}})
    }
  }
  render() {
    console.log(this.props.user)
    return (
      <div className="container-fluid" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
        <div className="row">
          <div className="card card-outline-primary col-7">
            <div className="card-block">
              <h4 className="display-4">Account Info</h4>
              <h6 className="card-subtitle mb-2 text-muted">Username, Password, and Email</h6>
              <br/>
              <div className="input-group">
                <div className="input-group-addon text-right" style={{ width: '110px' }}>Username:</div>
                <input type="text" className="form-control" placeholder={this.props.user ? this.props.user.username : 'Loading...'}/>
              </div>
              <br/>
              <div className="input-group">
                <div className="input-group-addon text-right" style={{
                  width: '110px'
                }}>Password:</div>
                <input type="text" className="form-control"/>
              </div>
              <br/>
              <div className="input-group">
                <div className="input-group-addon text-right" style={{ width: '110px' }}>Email:</div>
                <input type="text" ref='email' className="form-control" placeholder={this.props.user ? this.props.user.emails[0].address : 'Loading...'}/>
              </div>
            </div>
            <div className="row">
              <div className="container-fluid">
                <label className="custom-control custom-checkbox">
                  <input type="checkbox" ref="updateAccount" className="custom-control-input"/>
                  <span className="custom-control-indicator"></span>
                  <span className="custom-control-description">Update Citizen Information?</span>
                </label>
              </div>
            </div>
          </div>
          <img className="float-right img-thumbnail push-1 col-3 img-fluid rounded" style={{ backgroundSize: 'cover',   backgroundPosition: 'center' }} src={this.props.user ? `https://www.gravatar.com/avatar/${md5(this.props.user.emails[0].address)}?s=200` : ''} style={{ padding: '60px' }}/>
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
                <div className="input-group-addon text-right" style={{
                  width: '160px'
                }}>Full Name:</div>
                <input type="text" ref="fullName" className="form-control col-6" placeholder={this.props.user ? this.props.user.profile.name : 'Loading...'}/>
              </div>
              <br/>
              <h4>Branch</h4>
              {this.props.user ? this.renderBranch() : <p>Loading...</p>}
              <br/>
              <br/>
              <h4>Skills</h4>
              <div className="input-group">
                <div className="input-group-addon text-right" style={{
                  width: '160px'
                }}>Primary Skill</div>
                {this.props.user ? <select className="custom-select" ref="primarySkill" defaultValue={this.props.user.profile.primarySkill}>{this.mapSkills()}</select> : <p>Loading..</p>}
              </div>
              <br/>
              <div className="input-group">
                <div className="input-group-addon text-right" style={{
                  width: '160px'
                }}>Secondary Skill</div>
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
        <div className="row"></div>
        <br/>
        <div className="row">
          <button type="submit" onClick={this.onSubmit.bind(this)} className="btn btn-primary btn-block col-12 display-4" style={{fontFamily: 'Electrolize', fontVariant: 'small-caps'}}>
            <b> S u b m i t </b>
          </button>
        </div>
      </div>
    )
  }
}

export default EditProfile
