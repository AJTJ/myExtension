import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../actions/loginAction'

class Login extends Component {

  login = e => {
    e.preventDefault();
    const { actions } = this.props;
    const name = e.target[0].value;
    const password = e.target[1].value;
    actions.loginAction();
  }

  render() {
    return (
      <div className="loginWrapper">
        <form className="loginForm" onSubmit={this.login}>
          <h1>Login</h1>
          <p>{this.props.count}</p>
          <p>{this.props.name}</p>
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

function mapStateToProps(state) {
  return {
    count: state.countReducer,
    name: state.loginReducer.name
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