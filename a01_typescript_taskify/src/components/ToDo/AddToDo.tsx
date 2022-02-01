import React, { useRef } from "react";
import "./AddToDo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// FiSearch
const AddToDo: React.FC = () => {
  const toDoNameRef = useRef<HTMLInputElement>(null);

  return (
    <div className="add-todo--container">
      <div className="child-a">
        <input ref={toDoNameRef} className="ca-child-a" tabIndex={1} />
        <FontAwesomeIcon icon={faSearch} className="ca-child-b" tabIndex={1} />
      </div>
    </div>
  );
};

export default AddToDo;
