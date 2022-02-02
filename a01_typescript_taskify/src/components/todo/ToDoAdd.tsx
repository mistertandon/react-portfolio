import React, { useRef } from "react";
import "./AddToDo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ToDoAdd_PROP } from "./todo.model";
import { getUniqueId } from "../../helpers/resource";

const AddToDo: React.FC<ToDoAdd_PROP> = (prop: ToDoAdd_PROP) => {
  const { addToDoItem } = prop;

  const toDoNameRef = useRef<any>(null);

  /**
   *
    handleAddToDoRequest prototye could be of

    const handleAddToDoRequest: React.EventHandler<
      React.KeyboardEvent<HTMLInputElement>
    > => {}

    For more information
    D:\git_repos\typescript-react-demos-a\a01_typescript_taskify\node_modules\@types\react\index.d.ts: Line no 1317
   * 
   */

  const handleAddToDoRequest: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    const taskName: string = toDoNameRef.current.value;

    if (e.key === "Enter" && taskName) {
      addToDoItem({
        id: getUniqueId(),
        name: taskName,
        isCompleted: false,
      });

      toDoNameRef.current.value = "";
    }
  };

  return (
    <div className="add-todo--container">
      <div className="child-a">
        <input
          ref={toDoNameRef}
          className="ca-child-a"
          tabIndex={1}
          onKeyUp={(e) => handleAddToDoRequest(e)}
        />
        <FontAwesomeIcon icon={faSearch} className="ca-child-b" tabIndex={1} />
      </div>
    </div>
  );
};

export default AddToDo;
