import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../actions/loginAction'

class Login extends Component {

  login = e => {
    e.preventDefault();
    const { actions } = this.props;
    const username = e.target[0].value;
    const password = e.target[1].value;
    actions.login();
  }

  render() {
    console.log('login props', this.props)
    return (
      <div className="loginWrapper">
        <form className="loginForm" onSubmit={this.login}>
          <h1>Login</h1>
          <p>{this.props.count}</p>
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
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

// <input type="button" onClick={ this.dispatchClickedAlias.bind(this) } />
// dispatchClickedAlias() {
//   this.props.dispatch({ type: 'user-clicked-alias' });
// }

function mapStateToProps(state) {
  return {
    count: state.countReducer,
    loginFailed: state.loginReducer.loginFailed,
    isLoggingIn: state.loginReducer.isLoggingIn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);