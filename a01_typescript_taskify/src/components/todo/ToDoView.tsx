import React from "react";
import "./ToDoView.scss";

import { ToDoViewProp } from "./model";

const ToDoView: React.FC<ToDoViewProp> = ({
  item,
  iscompleted,
  toDoUpdateStatus,
}: ToDoViewProp) => {
  const { name, isCompleted } = item;

  return (
    <div className="todo-view--container">
      <div className="child-a--tvc">{name}</div>
      <div className="child-b--tvc">
        <div className="cb-child-a--tvc"> Edit </div>
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
