import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";


const login = (username, password) => {
	console.log('test was run');
  const data = {
    type: 'LOGIN_ATTEMPT',
    username: username,
    password: password
	};
	return data;
}

const cancelLogin = () => {
  const data = {
    type: 'CANCEL_LOGIN'
  };
  return data;
}

const testAction = () => {
  console.log('test action')
  const data = {
    type: 'TESTING'
  };
  return data;
}

const cancelTestAction = () => {
  console.log('cancel test action')
  const data = {
    type: 'CANCEL_TESTING',
    cancelling: true
  };
  return data;
}

class Login extends Component {

  formSubmit = e => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    this.props.dispatch(login(username, password));
  }

  cancelLogin = () => {
    this.props.dispatch(cancelLogin());
  }

  beginTest = () => {
    this.props.dispatch(testAction());
  }

  cancelTest = () => {
    this.props.dispatch(cancelTestAction());
  }


  render() {
    console.log('login props', this.props)
    return (
      <div>
        {/* <button onClick={this.beginTest}>Begin</button>
        <button onClick={this.cancelTest}>Cancel</button> */}
        <div className="title">
          <h1>Login</h1>
        </div>
        <div className="wrapper component">
          <form className="loginForm" onSubmit={this.formSubmit}>
            {this.props.loginFailed &&
              <p>Login Attempt Failed :(</p>
            }
            {this.props.isLoggingIn &&
              <div>
                <p>...logging in... </p>
                {/* <button onClick={this.cancelLogin}>Cancel Login</button> */}
              </div> 
            }
            <label htmlFor="nameInput">Name</label>
            <input type="text" id="nameInput"/>
            <label htmlFor="passwordInput">Password</label>
            <input type="password" id="passwordInput"/>
            <input className="navButton" type="submit"/>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.countReducer,
    loginFailed: state.loginReducer.loginFailed,
    isLoggingIn: state.loginReducer.isLoggingIn
  };
}

export default connect(
  mapStateToProps,
)(Login);