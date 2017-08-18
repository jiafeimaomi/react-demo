import React, { Component } from 'react';
import Form from '../../components/Form';

// import Form from 'src/modules/components/Form';


class Login extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
  }

  login(param){
    console.log('this.props', this.props, param);
  }
  render() {
    return (
      <div>
        <Form login = {this.login.bind(this, { compId: '1'})}/>
      </div>
    );
  }
}
export default Login