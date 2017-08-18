import React, { Component } from 'react';
import Lists from '../../common/Lists';
import Input from '../../common/Input';

class TodoLists extends React.Component{
    constructor(props){
      super(props);

    }

    componentDidMount(){
    }
    render(){
      return (
        <div>
          <Lists listItem={this.props.toDoApp.list} deleteItem={this.props.deleteItem}/>
          <Input value = {this.props.toDoApp.newToDo} inputChange = {this.props.inputChange}  addItem ={this.props.addItem} />
        </div>
      )

    }

}

export default TodoLists