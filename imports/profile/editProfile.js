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
      branch: ''
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
  mapEmails() {
    if (this.props.user) {
      return this.props.user.emails.map((email) => {
        return (
          <div className="row container-fluid" key={`${Meteor.userId() + '#' + email.address}`}>
            <input type="text" className="form-control col-4" placeholder={email.address}/>
            <button type="button" className="btn btn-danger col-1" style={{
              marginRight: '10px',
              marginLeft: '10px'
            }}>
              <span className="fa fa-trash" aria-hidden="true"></span>
            </button>
            <button type="button" className="btn btn-info col-1" style={{
              marginRight: '10px',
              marginLeft: '10px'
            }} dataToggle="tooltip" dataPlacement="Top" title="Resend Verification">
              <span className="fa fa-refresh" aria-hidden="true"></span>
            </button>
          </div>
        )
      })
    } else {
      return ''
    }
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

  }
  handleBranchClick(branch){
    console.log(branch)
    console.log(this.props.user)
  }
  render() {
    return (
      <div className="container-fluid" style={{
        paddingLeft: '50px',
        paddingRight: '50px'
      }}>
        <div className="row">
          <div className="card card-outline-primary col-7">
            <div className="card-block">
              <h4 className="display-4">Account Info</h4>
              <h6 className="card-subtitle mb-2 text-muted">Username, Password, and Email</h6>
              <br/>
              <div className="input-group">
                <div className="input-group-addon text-right" style={{
                  width: '110px'
                }}>Username:</div>
                <input type="text" className="form-control" placeholder={this.props.user
                  ? this.props.user.username
                  : 'Loading...'}/>
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
                <div className="input-group-addon text-right" style={{
                  width: '110px'
                }}>Email:</div>
                <input type="text" className="form-control" placeholder={this.props.user ? this.props.user.emails[0].address : 'Loading...'}/>
                <button className="btn btn-info" style={{ width: '50px', marginLeft: '10px' }} data-toggle="tooltip" data-placement="top" title="Update email">
                  <span className="fa fa-refresh"></span>
                </button>
              </div>
            </div>
          </div>
          <img className="float-right img-thumbnail push-1 col-3 img-fluid rounded" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} src={this.props.user
            ? `https://www.gravatar.com/avatar/${md5(this.props.user.emails[0].address)}?s=200`
            : ''} style={{
            padding: '60px'
          }}/>
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
              <div className="btn-group" data-toggle="buttons">
                <label className={((this.props.user ? this.props.user.profile.branch : '') === 'Fleet') ? 'btn btn-primary active' : 'btn btn-primary'} onClick={() => this.handleBranchClick('Fleet')}>
                  <input type="radio" id="fleetButton" autoComplete="off" onClick={() => this.handleBranchClick('Fleet')}/>Fleet
                </label>
                <label className={((this.props.user ? this.props.user.profile.branch : '') === 'Marines') ? 'btn btn-primary active' : 'btn btn-primary'} onClick={() => this.handleBranchClick('Marines')}>
                  <input type="radio" id="marinesButton" autoComplete="off" onClick={() => this.handleBranchClick('Marines')}/>Marines
                </label>
                <label className={((this.props.user ? this.props.user.profile.branch : '') === 'PaIR') ? 'btn btn-primary active' : 'btn btn-primary'} onClick={() => this.handleBranchClick('PaIR')}>
                  <input type="radio" id="pairButton" autoComplete="off" />Public and Internal Relations
                </label>
                <label className={((this.props.user ? this.props.user.profile.branch : '') === 'LaS') ? 'btn btn-primary active' : 'btn btn-primary'} onClick={() => this.handleBranchClick('LaS')}>
                  <input type="radio" id="lasButton" autoComplete="off" />Logistics and Science
                </label>
              </div>
              <br/>
              <br/>
              <h4>Skills</h4>
              <div className="input-group">
                <div className="input-group-addon text-right" style={{
                  width: '160px'
                }}>Primary Skill</div>
                <select className="custom-select" ref="primarySkill">{this.mapSkills()}</select>
                <button className="btn btn-info" style={{ width: '50px', marginLeft: '10px' }} data-toggle="tooltip" data-placement="top" title="Update Primary Skill">
                  <span className="fa fa-refresh"></span>
                </button>
              </div>
              <br/>
              <div className="input-group">
                <div className="input-group-addon text-right" style={{
                  width: '160px'
                }}>Secondary Skill</div>
                <select className="custom-select" ref="secondarySkill">{this.mapSkills()}</select>
                <button className="btn btn-info" style={{ width: '50px', marginLeft: '10px' }} data-toggle="tooltip" data-placement="top" title="Update Secondary Skill">
                  <span className="fa fa-refresh"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    )
  }
}

export default EditProfile
