import React, { useState } from "react";
import ToDo from "./ToDoMaster";
import { ToDoListProp, ToDoT } from "./model";
import ToDoMaster from "./ToDoMaster";

const ToDoList: React.FC<ToDoListProp> = ({ items }: ToDoListProp) => {
  const [toDoList, setToDoList] = useState<ToDoT[]>(items);

  return (
    <div>
      {Array.isArray(toDoList) &&
        toDoList.map((toDoItem: ToDoT) => (
          <ToDoMaster item={toDoItem} key={toDoItem.id} />
        ))}
    </div>
  );
};

export default ToDoList;
