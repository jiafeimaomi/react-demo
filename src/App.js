import React, { Component } from 'react';
// import './static/style/base.scss';
import './static/style/App.css';
import { Provider } from 'react-redux';
import ToDoAppContainer from './containers/ToDoAppContainer';
import configureStore from './redux/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          头部
        </header>
        <section className="App-content">
          <Provider store={store}> 
            <ToDoAppContainer />
          </Provider>
        </section>
        <footer className="App-footer">尾部</footer>
      </div>
    );
  }
}

export default App;
