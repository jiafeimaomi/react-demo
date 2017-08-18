import { connect } from 'react-redux';
import ToTest from '../components/ToTestComponent.js'



function mapStateToProps(state) {
  return {
    
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // inputChange: (value) => dispatch(inputChange(value)),
    // addItem: (value) => dispatch(addItem(value)),
    // deleteItem: (value) => dispatch(deleteItem(value))
  }; // here we'll soon be mapping actions to props
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToTest);