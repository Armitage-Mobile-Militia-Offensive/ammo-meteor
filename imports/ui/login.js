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
        <div className="d-flex align-items-center" style={{height: '100vh', width: '100vw'}}>
          <LoginForm />
        </div>
      )
    } else {
      return (
        <div className="d-flex align-items-center" style={{height: '100vh', width: '100vw'}}>
          <LoginCard user={this.props.user ? this.props.user : undefined}/>
        </div>
      )
    }
  }
}

export default Login
