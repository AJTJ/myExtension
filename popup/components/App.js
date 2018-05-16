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
			!this.props.isLoggedIn ?
			<div className='App'>
				<Login />
			</div> :
			<div>
				<Main />
			</div>
		);
	}
	// <input type="button" onClick={ this.dispatchClickedAlias.bind(this) } />
	// dispatchClickedAlias() {
	// 		this.props.dispatch({ type: 'user-clicked-alias' });
	// }
}


const mapStateToProps = (state) => {
	console.log('mapState app', state)
	return {
		count: state.countReducer,
		isLoggedIn: state.loginReducer.isLoggedIn
	};
};

export default connect(mapStateToProps)(App);
