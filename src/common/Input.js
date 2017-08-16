import React, { Component } from 'react';

class Input extends React.Component{
    constructor(props){
      super(props);
    }
    componentDidMount(){
      
    }
    render(){
      return (
        <form>
          <div
            className="form-group">
            <label htmlFor="listInput">Email address:</label>
            <input ref="myInput" type="text" className="form-control" id="listItemInput" value={this.props.newToDo} placeholder="Add new todo" onChange = {this.props.onChange}/>
            <button className="btn btn-primary" onClick={this.props.doAdd}>Add Item</button>
          </div>
        </form>
      )
    }

}

export default Input