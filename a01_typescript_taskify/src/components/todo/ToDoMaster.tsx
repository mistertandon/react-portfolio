import React, { useReducer, useState } from "react";
import {
  ToDoT,
  ToDoMasterProp,
  toDoReducerState_TYPE,
  toDoReducer_TYPE,
  toDoReducerAction_TYPE,
} from "./todo.model";
import { toDoReducer } from "./ToDo.reducer";
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
      <ToDoView
        item={item}
        toDoUpdateStatus={toDoUpdateStatus}
        iscompleted={iscompleted}
        dispatchToDoMasterAction={dispatchToDoMasterAction}
      />
    </div>
  );
};

export default ToDoMaster;
