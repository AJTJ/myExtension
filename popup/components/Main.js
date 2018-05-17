import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../actions/loginAction';

import CountriesDropdown from './CountriesDropdown';


class Main extends Component {

  logOut = () => {
    const { actions } = this.props;
    actions.logOut();
  }
  
  render() {
    const { currentCountry, countries } = this.props;
    return (
      <div>
        <div className="title">
          <h1>Main</h1>
        </div>
        <div className='wrapper component mainWrapper'>
          <div>
            <span>Current country: </span>
            <span>{countries[currentCountry].name}</span>
          </div>
          <CountriesDropdown
            countries={countries} 
            currentCountry={currentCountry}
          />
          <Link className='linkButton optionsLink' to={'/options'}>Options</Link>
          <button className='logOutButton navButton' onClick={this.logOut}>Log out</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		count: state.countReducer,
    loggedIn: state.loginReducer.isLoggedIn,
    countries: state.loginReducer.countries,
    currentCountry: state.loginReducer.selectedCountryIndex
	};
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);