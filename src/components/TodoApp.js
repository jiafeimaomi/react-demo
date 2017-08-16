import React, { Component } from 'react';
import Lists from '../common/Lists';
import Input from '../common/Input';
import Button from 'antd-mobile/lib/button'; //antd-mobile引入方式

class TodoLists extends React.Component{
    constructor(props){
      super(props);

    }

    componentDidMount(){
    }
    onInputChange(event){
      const that = this
      console.log('event', event.target.value);
      if( event.target.value == undefined || event.target.value == null) return;
      that.setState({
        newToDo: event.target.value
      })
    }
    doAddItem(event){
      event.preventDefault();
      this.setState((previousState)=>({
        lists: [...previousState.lists, previousState.newToDo]
      }))
      
    }
    render(){
      return (
        <div>
          <Lists listItem={this.props.toDoApp.list}/>
          <Input  onChange = {this.onInputChange.bind(this)} doAdd = {this.doAddItem.bind(this)}/>
          <Button >删除</Button>
        </div>
      )

    }

}

export default TodoLists