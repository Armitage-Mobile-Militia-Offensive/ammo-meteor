import React, { Component } from 'react'

import LoginForm from './loginForm'
import LoginCard from './loginCard'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      user: this.props.user
    }
  }
  componentWillReceiveProps(props){
    this.setState({user: this.props.user})
  }
  render() {
    if (!Meteor.userId()) {
      return (
        <div className="row">
          <LoginForm  />
        </div>
      )
    } else {
      return (
        <LoginCard user={this.props.user ? this.props.user : undefined}/>
      )
    }
  }
}

export default Login
