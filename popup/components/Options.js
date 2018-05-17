import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../actions/loginAction';

class Options extends Component {
  render() {
    return (

      <div>
        <div className="title">
          <h1>Options</h1>
        </div>
        <div className='options component'>
          <div className='optionsMenu'>
            {this.props.options.map(option => <li>{option}</li> )}
          </div>
          <div className="backButtonDiv">
            <button className="navButton" onClick={browserHistory.goBack}>Back</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
    count: state.countReducer,
    options: state.loginReducer.options,
	};
};

export default connect(
  mapStateToProps,
)(Options);