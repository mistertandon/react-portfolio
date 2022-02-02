import React, { useState, useEffect, useCallback } from "react";
import "./ToDoParent.scss";
import { ToDo_TYPE } from "./todo.model";
import AddToDo from "./ToDoAdd";
import ToDoList from "./ToDoList";

const ToDoParent: React.FC = () => {
  const [toDoList, setToDoList] = useState<ToDo_TYPE[]>([
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

  const [pendingToDoList, setPendingToDoList] = useState<ToDo_TYPE[]>([]);

  const [completedToDoList, setCompletedToDoList] = useState<ToDo_TYPE[]>([]);

  const [toDoListJSONStringifyVersion, setToDoListJSONStringifyVersion] =
    useState<string>(JSON.stringify(toDoList));

  useEffect(() => {
    setPendingToDoList(toDoList.filter((item) => !item.isCompleted));

    setCompletedToDoList(toDoList.filter((item) => item.isCompleted));
  }, [toDoListJSONStringifyVersion, toDoList]);

  const toDoUpdateStatus: (todoStatus: boolean, actionItem: ToDo_TYPE) => void =
    useCallback((todoStatus, actionItem) => {
      const indexId: number = toDoList.findIndex((toDoItem) => {
        return toDoItem.id === actionItem.id;
      });

      toDoList[indexId] = {
        ...actionItem,
        isCompleted: todoStatus,
      };

      setToDoList(toDoList);
      setToDoListJSONStringifyVersion(JSON.stringify(toDoList));
    }, []);

  const addToDoItem: (item: ToDo_TYPE) => void = (item: ToDo_TYPE) => {
    console.log(item);
    setToDoList([...toDoList, item]);
    // toDoList.push(item);
  };

  return (
    <div className="todo-parent--container">
      <AddToDo addToDoItem={addToDoItem} />
      <ToDoList
        pendingToDoList={pendingToDoList}
        completedToDoList={completedToDoList}
        toDoUpdateStatus={toDoUpdateStatus}
      />
    </div>
  );
};

export default ToDoParent;
