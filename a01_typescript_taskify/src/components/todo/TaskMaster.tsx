import React, { useReducer, useState } from "react";
import {
  TaskMaster_PROP,
  TaskReducerState_TYPE,
  TaskReducer_TYPE,
  TaskReducerAction_TYPE,
} from "./task.model";

import { taskReducer } from "./task.reducer";
import EditTask from "./EditTask";
import ViewTask from "./ViewTask";

const actionStateInit = {
  view: true,
  edit: false,
  delete: false,
  create: false,
};

const TaskMaster: React.FC<TaskMaster_PROP> = ({
  item,
  iscompleted,
  updateTaskStatus,
}: TaskMaster_PROP) => {
  const [todoMasterState, dispatchToDoMasterAction] = useReducer<
    TaskReducer_TYPE<TaskReducerState_TYPE, TaskReducerAction_TYPE>
  >(taskReducer, actionStateInit);

  return (
    <div className="todo--container">
      {todoMasterState.view && (
        <ViewTask
          item={item}
          updateTaskStatus={updateTaskStatus}
          iscompleted={iscompleted}
          dispatchToDoMasterAction={dispatchToDoMasterAction}
        />
      )}
      {todoMasterState.edit && <EditTask />}
    </div>
  );
};

export default TaskMaster;
