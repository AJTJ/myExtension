import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


class Main extends Component {

  dispatchClickedAlias() {
      this.props.dispatch({ type: 'loginAttempt' });
  }
  
  render() {
    console.log('Main props', this.props);
    return (
      <div>
        <h1>Main</h1>
        <input type="button" onClick={ this.dispatchClickedAlias.bind(this) } />
        <p>Current country</p>
        <p>drop down of country options</p>
        <Link to={'/options'}>Options</Link>
        <p>Logout button</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		count: state.countReducer,
		loggedIn: state.loginReducer.loggedIn
	};
};

export default connect(mapStateToProps)(Main);
