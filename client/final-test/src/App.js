import { useState } from "react";
import "./App.css";
import Form from "./component/form/Form";
import TodoList from "./component/todolist/TodoList";
import TodoListHeader from "./component/todolistheader/TodoListHeader";

function App() {
  const [updatedTodo,setUpdatedTodo]=useState(false)
  return (
    <div className="App">
      <div className="container">
        <TodoListHeader/>
        <TodoList changeValue={updatedTodo}/>
        <Form changeValue={updatedTodo} method={setUpdatedTodo}/>
      </div>
   
    </div>
  );
}

export default App;
