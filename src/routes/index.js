import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import ToDoAppContainer from '../modules/ToDoApp/containers/ToDoAppContainer';
// import ToTestContainer from '../modules/ToTest/containers/ToTestContainer';
import Login from '../modules/Login/container/LoginContainer';
const routes = (
  <Router>
    <div>
      <Route exact path="/login" component={Login}/>
    </div>
  </Router>
);

export default routes;
