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
		console.log('App props', this.props);
		document.addEventListener('click', () => {
			this.props.dispatch({
				type: 'ADD_COUNT'
			});
		});
	}

	render() {
		return (
			!this.props.loggedIn ?
			<div className='App'>
				<input type="button" onClick={ this.dispatchClickedAlias.bind(this) } />
				<Login />
			</div> :
			<div>
				<Main />
			</div>
		);
	}

	dispatchClickedAlias() {
			this.props.dispatch({ type: 'user-clicked-alias' });
	}
}


const mapStateToProps = (state) => {
	return {
		count: state.countReducer,
		loggedIn: state.loginReducer.loggedIn
	};
};

export default connect(mapStateToProps)(App);
