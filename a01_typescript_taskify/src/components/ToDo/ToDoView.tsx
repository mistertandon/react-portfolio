import React from "react";
import "./ToDoView.scss";

import { ToDoViewProp } from "./model";

const ToDoView: React.FC<ToDoViewProp> = ({
  item: { name, isCompleted },
}: ToDoViewProp) => {
  return (
    <div className="todo-view--container">
      <div className="child-a--tvc">{name}</div>
      <div className="child-b--tvc">{isCompleted ? "Yup" : "Nope"}</div>
    </div>
  );
};

export default ToDoView;
