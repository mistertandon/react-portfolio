import React from "react";
import "./ToDoView.scss";
import { CRUD } from "./../../helpers/constants";
import { ToDoViewProp } from "./todo.model";

const ToDoView: React.FC<ToDoViewProp> = ({
  item,
  iscompleted,
  toDoUpdateStatus,
  dispatchToDoMasterAction,
}: ToDoViewProp) => {
  const { name, isCompleted } = item;

  return (
    <div className="todo-view--container">
      <div className="child-a--tvc">{name}</div>
      <div className="child-b--tvc">
        <div className="cb-child-a--tvc">
          <button
            className="cbca-child-a--tvc"
            onClick={() => {
              dispatchToDoMasterAction({ type: CRUD.EDIT });
            }}
          >
            Edit
          </button>
        </div>
        <div className="cb-child-b--tvc">
          <button
            className="cbcb-child-a--tvc"
            onClick={() => {
              toDoUpdateStatus(!iscompleted, item);
            }}
          >
            {iscompleted ? "Mark in-progress" : "Mark Complete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoView;
