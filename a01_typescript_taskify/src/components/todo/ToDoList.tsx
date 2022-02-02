import React, { useCallback, useEffect, useState } from "react";
import "./ToDoList.scss";
import { ToDoList_Prop, ToDo_TYPE } from "./todo.model";
import ToDoMaster from "./ToDoMaster";

const ToDoList: React.FC<ToDoList_Prop> = (props: ToDoList_Prop) => {
  const { pendingToDoList, completedToDoList, toDoUpdateStatus } = props;

  return (
    <div className="todo-list--container">
      <div className="child-a--tlc">
        {Array.isArray(pendingToDoList) &&
          pendingToDoList.map((toDoItem: ToDo_TYPE) => (
            <ToDoMaster
              toDoUpdateStatus={toDoUpdateStatus}
              iscompleted={false}
              item={toDoItem}
              key={toDoItem.id}
            />
          ))}
      </div>
      <div className="child-b--tlc">
        {Array.isArray(completedToDoList) &&
          completedToDoList.map((toDoItem: ToDo_TYPE) => (
            <ToDoMaster
              toDoUpdateStatus={toDoUpdateStatus}
              iscompleted={true}
              item={toDoItem}
              key={toDoItem.id}
            />
          ))}
      </div>
    </div>
  );
};

export default ToDoList;
