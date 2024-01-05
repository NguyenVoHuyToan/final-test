import "./App.css";
import Form from "./component/form/Form";
import TodoList from "./component/todolist/TodoList";
import TodoListHeader from "./component/todolistheader/TodoListHeader";

function App() {
  return (
    <div className="App">
      <div className="container">
        <TodoListHeader/>
        <TodoList />
        <Form/>
      </div>
   
    </div>
  );
}

export default App;
