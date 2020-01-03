import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.css";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  };

  handleChange = e => {
    this.setState({
      //get value from event.target, this way what is typed in the form is seen and ready for submit
      item: e.target.value,
    })
  };
  handleSubmit = e => {
    //Here collect values from the state
    e.preventDefault();
    const newItem = { //newItem take id -> uuid from state below on line 38
      id: this.state.id,
      title: this.state.item,
    }
    //add current item to array of previosly collected items
   const upatedItems = [...this.state.items, newItem];
//update state with new items and set unique ID, also clear item input
    this.setState({
      items: upatedItems,
      item:'',
      id: uuid(),
      editItem: false
    }, ()=> console.log(this.state)) // setState accepts callback function console.log here is for current state

  };
  clearList = () => {
   //reset items array
    this.setState({
      items:[]
    })
  };
  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !==id);
    const selectedItems = this.state.items.find(item => item.id === id);
    //pass selected title to input via state
    this.setState({
      items: filteredItems,
      item: selectedItems.title,
      id:id,
      editItem: true,
    })
  };
  handleDelete = id => {
      const filteredItems = this.state.items.filter(item => item.id !==id);
     this.setState({
       items: filteredItems,
     })
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto mt-5 col-md-8">

            <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleEdit={this.handleEdit}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
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
