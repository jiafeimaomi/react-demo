const TEST_CHANGE = 'my-app/totest/TEST_CHANGE';
const ADD_ITEM = 'my-app/totest/ADD_ITEM';
const DELETE_ITEM = 'my-app/totest/DELETE_ITEM';

export function inputChange(data){
  return {
    type: TEST_CHANGE,
    data
  }
}

export function addItem(data){
  return {
    type: ADD_ITEM,
    data
  }
}

export function deleteItem(data){
  return {
    type: DELETE_ITEM,
    data
  }
}

const initialState = {
  testList: [{item: 'test1', done: false}, {item: 'test2', done: true}],// just added this to test that state is being passed down propperly,
  test: ''
}; //The initial state of this reducer (will be combined with the states of other reducers as your app grows)



export default function reducer(state = initialState, action){ // a function that has two parameters, state (which is initialized as our initialState obj), and action, which we'll cover soon.
  switch (action.type){
    case TEST_CHANGE:
      return Object.assign(
        {},
        state,
        {newToDo: action.data}
      )
    case ADD_ITEM:
      return (
        {},
        state,
        {list: [...state.list, action.data]}
      )
    case DELETE_ITEM:
      var list = state.list
      list = list.filter((val, k)=> val.item !=action.data)
      return (
        {},
        { list}
      )
    default:
      return state;
  }
}