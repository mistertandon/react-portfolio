import React, { useState } from "react";
import "./ToDoList.scss";
import { ToDoListProp, ToDoT } from "./model";
import ToDoMaster from "./ToDoMaster";

const ToDoList: React.FC<ToDoListProp> = ({ items }: ToDoListProp) => {
  // const [toDoList, setToDoList] = useState<ToDoT[]>(items);

  const [pendingToDoList] = useState<ToDoT[]>(
    items.filter((item) => item.isCompleted)
  );
  const [completedToDoList] = useState<ToDoT[]>(
    items.filter((item) => !item.isCompleted)
  );

  return (
    <div className="todo-list--container">
      <div className="child-a--tlc">
        {Array.isArray(pendingToDoList) &&
          pendingToDoList.map((toDoItem: ToDoT) => (
            <ToDoMaster item={toDoItem} key={toDoItem.id} />
          ))}
      </div>
      <div className="child-b--tlc">
        {Array.isArray(completedToDoList) &&
          completedToDoList.map((toDoItem: ToDoT) => (
            <ToDoMaster item={toDoItem} key={toDoItem.id} />
          ))}
      </div>
    </div>
  );
};

export default ToDoList;
