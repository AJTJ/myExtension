import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'

class Options extends Component {
  render() {
    return (
      <div>
        <p>a back button</p>
        <button onClick={browserHistory.goBack}>Back</button>
        <p>list of options</p>
        <p>HELP, ABOUT, SETTINGS, ADVANCED</p>
      </div>
    )
  }
}

export default Options;