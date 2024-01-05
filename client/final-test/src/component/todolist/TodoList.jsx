import React, { useEffect, useState } from "react";
import { FaCircle, FaCheckCircle } from "react-icons/fa";

const TodoList = () => {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "taskList") {
        setTaskList(JSON.parse(event.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const handleTaskStatusChange = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index] = {
      ...updatedTaskList[index],
      status: !updatedTaskList[index].status,
    };
    setTaskList(updatedTaskList);
  };

  return (
    <div className="todo-list-container">
      {taskList.length > 0 &&
        taskList.map((task, index) => (
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

export default TodoList;