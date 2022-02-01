import React, { useState } from "react";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

const ToDoParent: React.FC = () => {
  const [toDoList, setToDoList] = useState([]);

  return (
    <div>
      <AddToDo />
      <ToDoList items={toDoList} />
    </div>
  );
};

export default ToDoParent;
