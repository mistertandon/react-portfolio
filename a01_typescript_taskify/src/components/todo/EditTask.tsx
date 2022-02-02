import React, { useState } from "react";
import { EditTask_PROP } from "./task.model";

const EditTask: React.FC<EditTask_PROP> = (prop: EditTask_PROP) => {
  const { item, updateTask } = prop;

  const [formData, setFormData] = useState({
    name: item.name,
    isCompleted: item.isCompleted,
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleOnChange = (e: any) => {
    console.log(e);
  };

  return (
    <div>
      <form>
        <div>
          <label>
            <input
              name="name"
              value={formData.name}
              onChange={(e) => handleOnChange(e)}
              className="ca-child-a"
              tabIndex={1}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              name="isCompleted"
              type="checkbox"
              checked={formData.isCompleted}
              className="ca-child-a"
              onChange={(e) => handleOnChange(e)}
              tabIndex={1}
            />
          </label>
        </div>
        <div>
          <button type="submit">Edit</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
