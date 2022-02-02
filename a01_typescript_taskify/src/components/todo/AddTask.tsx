import React, { useRef } from "react";
import "./AddToDo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AddTask_PROP } from "./task.model";
import { getUniqueId } from "../../helpers/resource";

const AddTask: React.FC<AddTask_PROP> = (prop: AddTask_PROP) => {
  const { addTaskHandler } = prop;

  const taskNameRef = useRef<any>(null);

  /**
   *
    taskAddRequestKeyUpEvent prototye could be of

    const taskAddRequestKeyUpEvent: React.EventHandler<
      React.KeyboardEvent<HTMLInputElement>
    > => {}

    For more information
    D:\git_repos\typescript-react-demos-a\a01_typescript_taskify\node_modules\@types\react\index.d.ts: Line no 1317
   * 
   */

  const taskAddRequestKeyUpEvent: React.KeyboardEventHandler<
    HTMLInputElement
  > = (e) => {
    const taskName: string = taskNameRef.current.value;

    if (e.key === "Enter" && taskName) {
      addTaskHandler({
        id: getUniqueId(),
        name: taskName,
        isCompleted: false,
      });

      taskNameRef.current.value = "";
    }
  };

  const taskAddRequestClickEvent: () => void = () => {
    const taskName: string = taskNameRef.current.value;

    if (taskName) {
      addTaskHandler({
        id: getUniqueId(),
        name: taskName,
        isCompleted: false,
      });

      taskNameRef.current.value = "";
    }
  };

  return (
    <div className="add-todo--container">
      <div className="child-a">
        <input
          ref={taskNameRef}
          className="ca-child-a"
          tabIndex={1}
          onKeyUp={(e) => taskAddRequestKeyUpEvent(e)}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="ca-child-b"
          tabIndex={1}
          onClick={taskAddRequestClickEvent}
        />
      </div>
    </div>
  );
};

export default AddTask;
