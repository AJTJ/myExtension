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

class Login extends Component {

  formSubmit = e => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    this.props.dispatch(login(username, password));
  }


  render() {
    console.log('login props', this.props)
    return (
      <div>
        <div className="title">
          <h1>Login</h1>
        </div>
        <div className="wrapper component">
          <form className="loginForm" onSubmit={this.formSubmit}>
            {this.props.loginFailed &&
              <p>Login Attempt Failed :(</p>
            }
            {this.props.isLoggingIn &&
              <p>...logging in... </p>
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

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Login);