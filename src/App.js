import React, { Component } from 'react';
import './static/style/App.scss';
import Button from 'antd-mobile/lib/button/index.web'; //antd-mobile引入方式

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">头部</header>
        <section className="App-content">main部分</section>
        <footer className="App-footer">尾部</footer>
      </div>
    );
  }
}

export default App;
