import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class EditProfile extends Component {
  constructor(props){
    super(props);
  }
  mapEmails () {
    const user = Meteor.user()
    return user.emails.map((email) => {
        return(
          <div className="row container-fluid" key={`${Meteor.userId() + '#' + email.address}`}>
            <input type="text" className="form-control col-4" placeholder={email.address} />
            <button type="button" className="btn btn-danger col-1" style={{marginRight: '10px', marginLeft: '10px'}}><span className="fa fa-trash" aria-hidden="true"></span></button>
            <button type="button" className="btn btn-info col-1" style={{marginRight: '10px', marginLeft: '10px'}} dataToggle="tooltip" dataPlacement="Top" title="Resend Verification"><span className="fa fa-refresh" aria-hidden="true"></span></button>
          </div>
        )
      })
  }
  render(){
    return (
      <div className="container">
        <div className="display-1 text-center">Welcome User</div>
        <div className="form-group h1">
          <label className="">Emails: </label>
          {this.mapEmails()}
        </div>
        <div className="form-group h2">
          <label className="">Username: </label>
          <input type="text" className="form-control col-4" placeholder={'placeholder'} />
        </div>
        <div className="form-group h3">
          <label className="">Change password: </label>
          <input type="text" className="form-control col-4" placeholder={'placeholder'} />
        </div>
        <div className="form-group h4">
          <label className="">Branch: </label>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Fleet" />
              Fleet
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Fleet" />
              Marines
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Fleet" />
              Public and Internal Relations
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Fleet" />
              Logistics and Science
            </label>
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
