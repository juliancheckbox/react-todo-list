import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.css";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "make breakfast" }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    console.log("handle change");
  };
  handleSubmit = e => {
    console.log("handle submit");
  };
  clearList = () => {
    console.log("clear list");
  };
  handleEdit = id => {
    console.log(`handle edit ${id}`);
  };
  handleDelete = id => {
    console.log(`handle delete ${id}`);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto mt-5 col-md-8">
              <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleEdit={this.handleEdit}
                handleSubmit={this.handleSubmit}
            />
            <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
            />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
