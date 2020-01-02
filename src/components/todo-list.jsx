import React, { Component } from 'react';
import TodoItem from './todo-item';

class TodoList extends Component {
    render() {
        return (
            <div>
           <h1>Hello from toDo list</h1>
            <TodoItem />
            </div>
        );
    }
}

export default TodoList;