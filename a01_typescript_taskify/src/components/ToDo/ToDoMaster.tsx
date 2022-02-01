import React, { useState } from "react";
import { ToDoT, ToDoMasterProp } from "./model";

const ToDoMaster: React.FC<ToDoMasterProp> = (prop: ToDoMasterProp) => {
  const [action, setAction] = useState("");

  return <div className="todo--container">{}</div>;
};

export default ToDoMaster;
