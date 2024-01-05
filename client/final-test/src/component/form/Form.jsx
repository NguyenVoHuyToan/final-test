import React, { useState } from "react";

const Form = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      title: task,
      status: false,
    };
    const updatedTaskList = [...taskList, newTask];
    setTaskList(updatedTaskList);
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
    setTask("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Enter task ..."
        value={task}
        onChange={handleInputChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;