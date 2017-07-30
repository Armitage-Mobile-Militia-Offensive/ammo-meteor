import React, {Component} from 'react'
import {Meteor} from 'meteor/meteor'
import EditAccount from './editProfile/editAccount'
import EditCitizen from './editProfile/editCitizen'
import { MatrixShips } from '../api/matrixShips'

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      branch: '',
      userId: ''
    }
  }
  componentWillReceiveProps(){
    return this.props.user ? this.setState({branch: this.props.user.profile.branch, userID: this.props.user._id}) : undefined
  }
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
          <button type="button" onClick={() => Meteor.call('shipMatrix.insert')} className="btn btn-primary btn-block col-12 display-4" style={{fontFamily: 'Electrolize', fontVariant: 'small-caps'}}>
            <b> Meteor Call </b>
          </button>
        </div>
      </div>
    )
  }
}

export default EditProfile
