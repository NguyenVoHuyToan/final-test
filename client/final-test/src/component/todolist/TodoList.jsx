import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaCircle } from "react-icons/fa";

const TodoList = (props) => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );
    
  useEffect(()=>{
    setTodoList(JSON.parse(localStorage.getItem("taskList")))
  },[props.changeValue])

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "taskList") {
        setTodoList(JSON.parse(event.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(todoList));
  }, [todoList]);

  const handleTaskStatusChange = (index) => {
    const updateTodoList = [...todoList];
    updateTodoList[index] = {
      ...updateTodoList[index],
      status: !updateTodoList[index].status,
    };
    setTodoList(updateTodoList);
  };

  const TodoItem = ({ task, index, handleTaskStatusChange }) => {
    return (
      <div
        className={`todo-item-container ${task.status ? "done" : ""}`}
        key={index}
      >
        {task.status ? (
          <FaCheckCircle
            className="item-done-button"
            color="#9a9a9a"
            onClick={() => handleTaskStatusChange(index)}
          />
        ) : (
          <FaCircle
            className="item-done-button"
            color="#9a9a9a"
            onClick={() => handleTaskStatusChange(index)}
          />
        )}
        <div className="item-title">{task.title}</div>
      </div>
    );
  };
  

  return (
    <div className="todo-list-container">
      {todoList.length > 0 &&
        todoList.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            index={index}
            handleTaskStatusChange={handleTaskStatusChange}
          />
        ))}
       
    </div>
  );
};

export default TodoList;
