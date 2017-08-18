import { connect } from 'react-redux';
import Login from '../component/LoginComponent.jsx'
import {
  login
} from '../../../redux/modules/login'; 


function mapStateToProps(state) {
  return {
    // toDoApp: state.toDoApp // gives our component access to state through props.toDoApp
  }
}

function mapDispatchToProps(dispatch) {
  // console.log('dispatch', dispatch);
  return {
    login: (value) => dispatch(login(value)),
    // addItem: (value) => dispatch(addItem(value)),
    // deleteItem: (value) => dispatch(deleteItem(value))
  }; // here we'll soon be mapping actions to props
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);