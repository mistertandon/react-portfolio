import React, { useCallback, useEffect, useState } from "react";
import "./ToDoList.scss";
import { getUniqueId } from "./../../helpers/resource";
import { ToDoListProp, ToDoT } from "./model";
import ToDoMaster from "./ToDoMaster";

const ToDoList: React.FC<ToDoListProp> = ({ items }: ToDoListProp) => {
  const [toDoList, setToDoList] = useState<ToDoT[]>(items);

  const [toDoListJSONStringifyVersion, setToDoListJSONStringifyVersion] =
    useState<string>(JSON.stringify(toDoList));

  const [pendingToDoList, setPendingToDoList] = useState<ToDoT[]>([]);
  const [completedToDoList, setCompletedToDoList] = useState<ToDoT[]>([]);

  useEffect(() => {
    setPendingToDoList(items.filter((item) => !item.isCompleted));
    setCompletedToDoList(items.filter((item) => item.isCompleted));
  }, [toDoListJSONStringifyVersion]);

  const toDoUpdateStatus: (todoStatus: boolean, actionItem: ToDoT) => void =
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

  return (
    <div className="todo-list--container">
      <div className="child-a--tlc">
        {Array.isArray(pendingToDoList) &&
          pendingToDoList.map((toDoItem: ToDoT) => (
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
          completedToDoList.map((toDoItem: ToDoT) => (
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
