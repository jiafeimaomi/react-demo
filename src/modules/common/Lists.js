import React, { Component } from 'react';
import Button from 'antd-mobile/lib/button'; //antd-mobile引入方式

class TodoLists extends React.Component{
    constructor(props){
      super(props);
    }
    componentDidMount(){
      
    }
    deleteTodu( item){
      const { deleteItem} = this.props
      deleteItem(item)
    }

  

    render(){
      const {listItem} = this.props
      return (
        <ul>
        {
          listItem && listItem.length && listItem.map((val, key)=>{
            return (
              <li key={key} style={{ color: "red", height: "50px", lineHeight: "50px"}}>
                  {val.item}
                  <Button style={{ marginLeft: "20px"}} onClick={this.deleteTodu.bind(this,val.item)}>删除</Button>
               </li>
            )
          })
        }
        </ul>
      )
    }

}

export default TodoLists