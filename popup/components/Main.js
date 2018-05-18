import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/loginAction';

import CountriesDropdown from './CountriesDropdown';

const changeCountry = (value) => {
  const data = {
    type: 'CHANGE_COUNTRY',
    selectedCountryIndex: value
  };
  return data;
}

const logOutAction = () => {
  const data = {
    type: 'LOG_OUT'
	};
	return data;
}

class Main extends Component {

  logOut = () => {
    this.props.dispatch(logOutAction());
  };

  handleChange = (value) => {
    this.props.dispatch(changeCountry(value));
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
            {
              !countries[currentCountry] ? '' : <span>{countries[currentCountry].name}</span>
            }
          </div>
          <CountriesDropdown
            countries={countries} 
            currentCountry={currentCountry}
            handleChange={this.handleChange}
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

export default connect(
  mapStateToProps
)(Main);