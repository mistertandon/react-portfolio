import React, { useState } from "react";
import ToDo from "./ToDoMaster";
import { ToDoListProp, ToDoT } from "./model";

const ToDoList: React.FC<ToDoListProp> = ({ items }: ToDoListProp) => {
  const [toDoList, setToDoList] = useState<ToDoT[]>(items);

  return (
    <div>
      Hello from ToDoList
      {Array.isArray(toDoList) &&
        toDoList.map((toDoItem: ToDoT) => {
          <ToDo item={toDoItem} />;
        })}
    </div>
  );
};

export default ToDoList;
