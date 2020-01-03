import React, { Component } from "react";
import TodoItem from "./todo-item";

class TodoList extends Component {

  render() {
    const {  clearList, handleDelete, handleEdit } = this.props; //Destructuring items and events handlers from props

    return (
       <ul className="list-group my-5">
         <h3 className="text-capitalize text-center">todo list</h3>
        {
          this.props.items.map(item => (
          <TodoItem
              key={item.id}
              title={item.title}
              clearList={clearList}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
          />
        ))}
        <button className="btn btn-danger btn-block text-capitalize mt-5" onClick={clearList}>clear list</button>
       </ul>
    );
  }
}

export default TodoList;
