import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './redux/configureStore';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes/index';

import './static/style/App.css';


const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
          <Provider store={store}> 
              {routes}
          </Provider>

      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
