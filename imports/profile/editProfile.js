import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import md5 from 'js-md5'

class EditProfile extends Component {
  constructor(props){
    super(props);
  }
  mapEmails () {
    if(this.props.user) {
      return this.props.user.emails.map((email) => {
          return(
            <div className="row container-fluid" key={`${Meteor.userId() + '#' + email.address}`}>
              <input type="text" className="form-control col-4" placeholder={email.address} />
              <button type="button" className="btn btn-danger col-1" style={{marginRight: '10px', marginLeft: '10px'}}><span className="fa fa-trash" aria-hidden="true"></span></button>
              <button type="button" className="btn btn-info col-1" style={{marginRight: '10px', marginLeft: '10px'}} dataToggle="tooltip" dataPlacement="Top" title="Resend Verification"><span className="fa fa-refresh" aria-hidden="true"></span></button>
            </div>
          ) })
    } else {
      return ''
    }
  }
  renderBranch() {
    if(this.props.user) {
      return (<div className="btn-group" data-toggle="buttons">
        <label className={(this.props.user.profile.branch === 'Fleet') ? 'btn btn-primary active' : 'btn btn-primary'}>
          <input type="radio" id="fleetButton" autoComplete="off" onClick={() => this.branchChange('Fleet')}/>Fleet
        </label>
        <label className={(this.props.user.profile.branch === 'Marines') ? 'btn btn-primary active' : 'btn btn-primary'}>
          <input type="radio" id="marinesButton" autoComplete="off" onClick={() => this.branchChange('Marines')}/>Marines
        </label>
        <label className={(this.props.user.profile.branch === 'PaIR') ? 'btn btn-primary active' : 'btn btn-primary'}>
          <input type="radio" id="pairButton" autoComplete="off" onClick={() => this.branchChange('PaIR')}/>Public and Internal Relations
        </label>
        <label className={(this.props.user.profile.branch === 'LaS') ? 'btn btn-primary active' : 'btn btn-primary'}>
          <input type="radio" id="lasButton" autoComplete="off" onClick={() => this.branchChange('LaS')}/>Logistics and Science
        </label>
      </div>
      )
    } else {
      return(
        <p>Loading...</p>
      )
    }
  }
  branchChange(newBranch) {
    Meteor.users.update(this.props.user._id, {$set: {"profile.someNewField": newData}})
  }
  render(){
    console.log(this.props.user)
    return (
      <div className="container-fluid" style={{paddingLeft: '50px', paddingRight: '50px'}}>
        <div className="row">
          <div className="card card-outline-primary col-7">
            <div className="card-block">
              <h4 className="display-4">Account Info</h4>
              <h6 className="card-subtitle mb-2 text-muted">Username, Password, and Email</h6>
              <br/>
              <div className="input-group">
                <div className="input-group-addon text-right" style={{width: '110px'}}>Username:</div>
                <input type="text" className="form-control" placeholder={this.props.user ? this.props.user.username : 'Loading...'} />
              </div>
              <br/>
              <div className="input-group">
                <div className="input-group-addon text-right" style={{width: '110px'}}>Password:</div>
                <input type="text" className="form-control" />
              </div>
              <br/>
              <div className="input-group">
                <div className="input-group-addon text-right" style={{width: '110px'}}>Email:</div>
                <input type="text" className="form-control" placeholder={this.props.user ? this.props.user.emails[0].address : 'Loading...'} />
              </div>
            </div>
          </div>
          <img className="float-right img-thumbnail push-1 col-3 img-fluid rounded" src={this.props.user ? `https://www.gravatar.com/avatar/${md5(this.props.user.emails[0].address)}?s=200` : ''}  style={{padding: '60px'}}/>
        </div>
        <br/>
        <div className="row">
          <div className="card card-outline-primary col-12">
            <div className="card-block">
              <h4 className="display-4">Citizen Info</h4>
              <h6 className="card-subtitle mb-2 text-muted">Branch, Primary Trade, and Secondary Trade</h6>
              <br/>
              <h4>Branch</h4>
              {this.renderBranch()}
            </div>
          </div>
        </div>
        <div className="form-group h5">
          <label className="">Primary Skill/Trade: </label>
          <input type="text" className="form-control col-4" placeholder={'placeholder'} />
        </div>
        <div className="form-group h6">
          <label className="">Secondary Skill/Trade: </label>
          <input type="text" className="form-control col-4" placeholder={'placeholder'} />
        </div>
          <div className="row"></div>
          <div className="row"></div>
      </div>
    )
  }
}

export default EditProfile
