import React, { Component } from 'react';
// import { Link } from 'react-router';
import { connect } from 'react-redux';
import Login from './Login';
import Main from './Main';

class App extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		document.addEventListener('click', () => {
			this.props.dispatch({
				type: 'ADD_COUNT'
			});
		});
	}

	render() {
		return (
			!this.props.isLoggedIn ?
			<div className='App'>
				<Login />
			</div> :
			<div>
				<Main />
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		count: state.countReducer,
		isLoggedIn: state.loginReducer.isLoggedIn
	};
};

export default connect(mapStateToProps)(App);
