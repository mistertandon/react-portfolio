import React, { useState } from "react";
import "./ToDoParent.scss";
import { ToDoT } from "./todo.model";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

const ToDoParent: React.FC = () => {
  const [toDoList, setToDoList] = useState<ToDoT[]>([
    {
      id: new Date().valueOf() * (Math.random() * (100 - 1) + 1),
      name: "Parvesh",
      isCompleted: false,
    },
    {
      id: new Date().valueOf() * (Math.random() * (100 - 1) + 1),
      name: "Prabhash",
      isCompleted: false,
    },
    {
      id: new Date().valueOf() * (Math.random() * (100 - 1) + 1),
      name: "Praveen",
      isCompleted: true,
    },
    {
      id: new Date().valueOf() * (Math.random() * (100 - 1) + 1),
      name: "Tarun",
      isCompleted: true,
    },
  ]);

  return (
    <div className="todo-parent--container">
      <AddToDo />
      <ToDoList items={toDoList} />
    </div>
  );
};

export default ToDoParent;
