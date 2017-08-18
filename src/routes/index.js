import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ToDoAppContainer from '../modules/ToDoApp/containers/ToDoAppContainer';
import ToTestContainer from '../modules/ToTest/containers/ToTestContainer';

const routes = (
  <Router>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/about">关于</Link></li>
        <li><Link to="/topics">主题列表</Link></li>
      </ul>
      <Route exact path="/" component={ToDoAppContainer}/>
      <Route path="/about" component={ToTestContainer}/>
    </div>
  </Router>
);

export default routes;
