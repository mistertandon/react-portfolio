import React, { useState, useEffect, useCallback } from "react";
import "./TaskParent.scss";
import { Task_TYPE } from "./task.model";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const TaskParent: React.FC = () => {
  const [toDoList, setToDoList] = useState<Task_TYPE[]>([
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

  const [pendingTaskList, setPendingTaskList] = useState<Task_TYPE[]>([]);

  const [completedTaskList, setCompletedTaskList] = useState<Task_TYPE[]>([]);

  const [toDoListJSONStringifyVersion, setToDoListJSONStringifyVersion] =
    useState<string>(JSON.stringify(toDoList));

  useEffect(() => {
    setPendingTaskList(toDoList.filter((item) => !item.isCompleted));

    setCompletedTaskList(toDoList.filter((item) => item.isCompleted));
  }, [toDoListJSONStringifyVersion, toDoList]);

  const updateTaskStatus: (todoStatus: boolean, actionItem: Task_TYPE) => void =
    useCallback((todoStatus, actionItem) => {
      const indexId: number = toDoList.findIndex((toDoItem) => {
        return toDoItem.id === actionItem.id;
      });

      toDoList[indexId] = {
        ...actionItem,
        isCompleted: todoStatus,
      };

      setToDoList(toDoList);
      console.log(toDoList);
      setToDoListJSONStringifyVersion(JSON.stringify(toDoList));
    }, []);

  const updateTask = (actionItem: Task_TYPE) => {
    const indexId: number = toDoList.findIndex((toDoItem) => {
      return toDoItem.id === actionItem.id;
    });

    if (indexId !== -1) {
      toDoList.splice(indexId, 1, actionItem);
      setToDoListJSONStringifyVersion(JSON.stringify(toDoList));
    }
  };

  const addTaskHandler: (item: Task_TYPE) => void = (item: Task_TYPE) => {
    setToDoList([...toDoList, item]);
  };

  return (
    <div className="todo-parent--container">
      <AddTask addTaskHandler={addTaskHandler} />
      <TaskList
        pendingTaskList={pendingTaskList}
        completedTaskList={completedTaskList}
        updateTaskStatus={updateTaskStatus}
        updateTask={updateTask}
      />
    </div>
  );
};

export default TaskParent;
