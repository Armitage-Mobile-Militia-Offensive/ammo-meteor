import React, {Component} from 'react'
import {Meteor} from 'meteor/meteor'
import EditAccount from './editProfile/editAccount'
import EditCitizen from './editProfile/editCitizen'
import { MatrixShips } from '../api/matrixShips'

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
  componentWillReceiveProps(){
    return this.props.user ? this.setState({branch: this.props.user.profile.branch, userID: this.props.user._id}) : undefined
  }
  // onSubmit(){
  //   if(this.refs.updateAccount.checked){
  //     ((this.refs.email.value.trim() < 1) || (this.refs.email.value.trim() === this.props.user.emails[0].address)) ? console.log('Unchanged') : console.log('Changed')
  //   }
  //   if(this.refs.updateCitizen.checked){
  //     ((this.refs.fullName.value.trim() < 1) || (this.refs.fullName.value.trim() === this.props.user.profile.name)) ? console.log('Unchanged') : console.log('Changed')
  //     this.refs.branchSelect.value === this.props.user.profile.branch ? undefined : Meteor.users.update(Meteor.userId(), {$set: {"profile.branch": this.refs.branchSelect.value}})
  //     this.refs.primarySkill.value === this.props.user.profile.primarySkill ? undefined : Meteor.users.update(Meteor.userId(), {$set: {"profile.primarySkill": this.refs.primarySkill.value}})
  //     this.refs.secondarySkill.value === this.props.user.profile.secondarySkill ? undefined : Meteor.users.update(Meteor.userId(), {$set: {"profile.secondarySkill": this.refs.secondarySkill.value}})
  //   }
  // }
  render() {
    console.log('Props Log:', this.props.user)
    return (
      <div className="container-fluid" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
        {this.props.user ? <EditAccount className="container-fluid" user={this.props.user}/> : <EditAccount className="container-fluid" user={undefined}/>}
        <br/>
        {this.props.user ? <EditCitizen className="container-fluid" user={this.props.user}/> : <EditCitizen className="container-fluid" user={undefined}/>}
        <div className="row"></div>
        <br/>
        <div className="row">
          <button type="submit" onClick={this.onSubmit.bind(this)} className="btn btn-primary btn-block col-12 display-4" style={{fontFamily: 'Electrolize', fontVariant: 'small-caps'}}>
            <b> S u b m i t </b>
          </button>
          <button type="button" onClick={() => Meteor.call('shipMatrix.insert')} className="btn btn-primary btn-block col-12 display-4" style={{fontFamily: 'Electrolize', fontVariant: 'small-caps'}}>
            <b> Meteor Call </b>
          </button>
        </div>
      </div>
    )
  }
}

export default EditProfile
