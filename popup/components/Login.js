import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import LoadingScreen from './LoadingScreen'


const login = (username, password) => {
  const data = {
    type: 'LOGIN_ATTEMPT',
    username: username,
    password: password
  };
  return data
}

const cancelAction = () => {
  const data = {
    type: 'CANCEL_LOGIN',
  };
  return data;
}

const startLogin = () => {
  const data = {
    type: 'LOGGING_IN'
  };
  return data;
}

let timer = null;

class Login extends Component {

  state = {
    counter: 0,
    username: '',
    password: ''
  };

  startTimer = () => {
    timer = setInterval(this.tick, 1000);
  }

  tick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  formSubmit = e => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    this.setState({username})
    this.setState({password})
    this.startTimer()
    this.props.dispatch(startLogin())
  }

  cancelLogin = e => {
    e.preventDefault();
    timer = clearInterval(timer);
    this.setState({ 
      counter: 0,
      username: '',
      password: ''
    })
    this.props.dispatch(cancelAction());
  }

  componentDidUpdate() {
    console.log(this.state.counter)

    if (this.state.counter >= 3) {
      this.props.dispatch(login(this.state.username, this.state.password));
      timer = clearInterval(timer);
      this.setState({ 
        counter: 0,
        username: '',
        password: ''
      })
    }
  }


  render() {
    return (
      <div>
        {this.props.isLoggingIn &&
          <LoadingScreen
            cancelLogin={this.cancelLogin}
          />
        }
        <div className="title">
          <h1>Login</h1>
        </div>
        <div className="wrapper component">
          <form className="loginForm" onSubmit={this.formSubmit}>
            {this.props.loginFailed &&
              <p>Login Attempt Failed :(</p>
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
    isLoggingIn: state.loginReducer.isLoggingIn,
  };
}

export default connect(
  mapStateToProps,
)(Login);