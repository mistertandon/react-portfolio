import React from "react";
import { ToDoViewProp } from "./model";

const ToDoView: React.FC<ToDoViewProp> = ({
  item: { name, isCompleted },
}: ToDoViewProp) => {
  return (
    <div>
      <div>{name}</div>
      <div>{isCompleted ? "Yup" : "Nope"}</div>
    </div>
  );
};

export default ToDoView;
