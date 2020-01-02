import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
//import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.css';
import TodoInput from './components/todo-input';
import TodoList from './components/todo-list';

function App() {
  return (

     <div className="container">
         <div className="row">
          <TodoInput />
          <TodoList />
          <div>Message</div>
         </div>
     </div>


  );
}

export default App;
