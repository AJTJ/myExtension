import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../actions/loginAction';


class CountriesDropdown extends Component {

  _onSelect = e => {
    console.log('selected drop', e);
  }

  render() {
    let options = this.props.countries.map((country) => `${country.name}`);
    return (
      <div>
        <Dropdown 
          options={options}
          onChange={this._onSelect}
          placeholder="Switch country"
        />
      </div>
    )
  }
}

export default CountriesDropdown;