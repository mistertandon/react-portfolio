import React, { useCallback, useEffect, useState } from "react";
import "./TaskList.scss";
import { TaskList_PROP, Task_TYPE } from "./task.model";
import TaskMaster from "./TaskMaster";

const TaskList: React.FC<TaskList_PROP> = (props: TaskList_PROP) => {
  const { pendingTaskList, completedTaskList, updateTaskStatus } = props;

  return (
    <div className="todo-list--container">
      <div className="child-a--tlc">
        {Array.isArray(pendingTaskList) &&
          pendingTaskList.map((toDoItem: Task_TYPE) => (
            <TaskMaster
              updateTaskStatus={updateTaskStatus}
              iscompleted={false}
              item={toDoItem}
              key={toDoItem.id}
            />
          ))}
      </div>
      <div className="child-b--tlc">
        {Array.isArray(completedTaskList) &&
          completedTaskList.map((toDoItem: Task_TYPE) => (
            <TaskMaster
              updateTaskStatus={updateTaskStatus}
              iscompleted={true}
              item={toDoItem}
              key={toDoItem.id}
            />
          ))}
      </div>
    </div>
  );
};

export default TaskList;
