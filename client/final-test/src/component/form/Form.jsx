import React, { useState } from "react";

const Form = (props) => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      title: todo,
      status: false,
    };
    const updatedTaskList = [...todoList, newTask];
    setTodoList(updatedTaskList);
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    setTodo("");
    props.method(!props.changeValue)
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Enter task ..."
        value={todo}
        onChange={handleInputChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;