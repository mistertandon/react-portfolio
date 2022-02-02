import React from "react";
import "./ViewTask.scss";
import { CRUD } from "../../helpers/constants";
import { ViewTask_PROP } from "./task.model";

const ViewTask: React.FC<ViewTask_PROP> = ({
  item,
  iscompleted,
  updateTaskStatus,
  dispatchToDoMasterAction,
}: ViewTask_PROP) => {
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
              updateTaskStatus(!iscompleted, item);
            }}
          >
            {iscompleted ? "Mark in-progress" : "Mark Complete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewTask;
