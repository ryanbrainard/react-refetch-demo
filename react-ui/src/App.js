import React, { Component } from 'react';
import logo from './logo.svg';
import 'whatwg-fetch';
import { connect } from 'react-refetch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {'This is '}
          <a href="https://github.com/mars/heroku-cra-node">
            {'create-react-app with a custom Node/Express server'}
          </a><br/>
        </p>
        <p className="App-intro">
          { this.renderMessage() }
        </p>
      </div>
    );
  }

  renderMessage() {
    const { apiFetch } = this.props

    if (apiFetch.pending) {
      return 'Fetching message from API'
    } else if (apiFetch.rejected) {
      return `API call failed: ${apiFetch.reason.message}`
    } else if (apiFetch.fulfilled) {
      return apiFetch.value.message
    }
  }
}

export default connect((props, context) => ({
  apiFetch: '/api'
}))(App);
