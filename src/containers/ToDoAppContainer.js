import { connect } from 'react-redux';
import ToDoApp from '../components/TodoApp.js'
import {
  inputChange,
  addItem,
  deleteItem
} from '../redux/modules/toDoApp'; 


function mapStateToProps(state) {
  return {
    toDoApp: state.toDoApp // gives our component access to state through props.toDoApp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    inputChange: (value) => dispatch(inputChange(value)),
    addItem: (value) => dispatch(addItem(value)),
    deleteItem: (value) => dispatch(deleteItem(value))
  }; // here we'll soon be mapping actions to props
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoApp);