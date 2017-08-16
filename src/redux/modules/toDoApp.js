const INPUT_CHANGED = 'my-app/todo/INPUT_CHANGED';
const ADD_ITEM = 'my-app/todo/ADD_ITEM';
const DELETE_ITEM = 'my-app/todo/DELETE_ITEM';

export function inputChange(data){
  return {
    type: INPUT_CHANGED,
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
  list: [{item: 'test1', done: false}, {item: 'test2', done: true}],// just added this to test that state is being passed down propperly,
  newToDo: ''
}; //The initial state of this reducer (will be combined with the states of other reducers as your app grows)



export default function reducer(state = initialState, action){ // a function that has two parameters, state (which is initialized as our initialState obj), and action, which we'll cover soon.
  switch (action.type){
    case INPUT_CHANGED:
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