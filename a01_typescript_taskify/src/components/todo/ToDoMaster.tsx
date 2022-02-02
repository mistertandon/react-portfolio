import React, { useReducer, useState } from "react";
import {
  ToDoMasterProp,
  toDoReducerState_TYPE,
  toDoReducer_TYPE,
  toDoReducerAction_TYPE,
} from "./todo.model";
import { toDoReducer } from "./ToDo.reducer";
import ToDoEdit from "./ToDoEdit";
import ToDoView from "./ToDoView";

const actionStateInit = {
  view: true,
  edit: false,
  delete: false,
  create: false,
};

const ToDoMaster: React.FC<ToDoMasterProp> = ({
  item,
  iscompleted,
  toDoUpdateStatus,
}: ToDoMasterProp) => {
  const [todoMasterState, dispatchToDoMasterAction] = useReducer<
    toDoReducer_TYPE<toDoReducerState_TYPE, toDoReducerAction_TYPE>
  >(toDoReducer, actionStateInit);

  return (
    <div className="todo--container">
      {todoMasterState.view && (
        <ToDoView
          item={item}
          toDoUpdateStatus={toDoUpdateStatus}
          iscompleted={iscompleted}
          dispatchToDoMasterAction={dispatchToDoMasterAction}
        />
      )}
      {todoMasterState.edit && <ToDoEdit />}
    </div>
  );
};

export default ToDoMaster;
