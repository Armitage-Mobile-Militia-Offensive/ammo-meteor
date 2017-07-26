import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

export default class AdminDashboard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      user: this.props.user
    }
  }
  render(){
    if(Meteor.userId()){
      return (
        <div>
          <div className="alert alert-danger" role="alert">
            <strong>Oh snap!</strong> Change a few things up and try submitting again.
          </div>
        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }
}
