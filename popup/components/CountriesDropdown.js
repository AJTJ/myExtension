import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 200,
  },
  title: 'Select Country'
};

class CountriesDropdown extends Component {

  handleChange = (event, index, value) => {
    const newIndex = value
    this.props.handleChange(newIndex);
  }

  render() {
    const { currentCountry, countries } = this.props;
    console.log('current country', typeof currentCountry)
    return (
      <div>
        <SelectField 
          maxHeight={100} 
          style={styles.customWidth}
          onChange={this.handleChange}
          hintText="Select new country"
        >
          {this.props.countries.map((country, index) => <MenuItem key={country.name} value={index} primaryText={country.name}/>)}
        </SelectField>
      </div>
    )
  }
}

export default CountriesDropdown;