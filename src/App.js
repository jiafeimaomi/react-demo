import React, { Component } from 'react';
import logo from './static/images/logo.svg';
import './static/style/App.css';
import Button from 'antd-mobile/lib/button/index.web';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        <Button>按钮</Button>
      </p>
      </div>
    );
  }
}

export default App;
