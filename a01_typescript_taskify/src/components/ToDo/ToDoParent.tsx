import React, { useState } from "react";
import { ToDoT } from "./model";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

const ToDoParent: React.FC = () => {
  const [toDoList, setToDoList] = useState<ToDoT[]>([
    {
      id: "123",
      name: "parvesh",
      isCompleted: false,
    },
  ]);

  return (
    <div>
      <AddToDo />
      <ToDoList items={toDoList} />
    </div>
  );
};

export default ToDoParent;
