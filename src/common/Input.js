import React, { Component } from 'react';

class Input extends React.Component{
    constructor(props){
      super(props);
    }
    componentDidMount(){
      
    }

    onInputChange(event){
      const { inputChange} = this.props
      inputChange(event.target.value);
    }
    addTodo(event){
      event.preventDefault();
      const { addItem} = this.props
      // console.log('this.props.value', this.props.value);
      addItem({
        item:this.props.value,
        done: false
      })
    }
    
    render(){
      return (
        <form>
          <div
            className="form-group">
            <label htmlFor="listInput">Email address:</label>
            <input ref="myInput" type="text" className="form-control" id="listItemInput" value={this.props.value} placeholder="Add new todo" onChange = {this.onInputChange.bind(this)} />
            <button className="btn btn-primary" onClick={this.addTodo.bind(this)} >Add Item</button>
          </div>
        </form>
      )
    }

}

export default Input