import React, { Component } from 'react';

class TodoLists extends React.Component{
    constructor(props){
      super(props);
      console.log('prop3222', props);
      
    }
    componentDidMount(){
      
    }
    render(){
      const {listItem} = this.props
      return (
        <ul>
        {
          listItem && listItem.length && listItem.map((val, key)=>{
            return (
              <li key={key} style={{ color: "red", height: "50px", lineHeight: "50px"}}>{val.item}</li>
            )
          })
        }
        </ul>
      )
    }

}

export default TodoLists