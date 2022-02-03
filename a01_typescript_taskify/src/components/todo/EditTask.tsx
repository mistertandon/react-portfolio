import React, { useState } from "react";
import { EditTask_PROP } from "./task.model";
import { CRUD } from "./../../helpers/constants";

const EditTask: React.FC<EditTask_PROP> = (prop: EditTask_PROP) => {
  const { item, dispatchToDoMasterAction, updateTask } = prop;

  const [formData, setFormData] = useState({
    id: item.id,
    name: item.name,
    isCompleted: item.isCompleted,
  });

  const [formFieldsErrors, setFormFieldsErrors] = useState({});

  const handleErrorCheckRequest = async () => {
    let errors: any = {};

    if (!formData.name) {
      errors["name"] = "Task name is mandatory";
    }

    return {
      error: {
        status: Object.keys(errors).length !== 0,
        errors,
      },
    };
  };

  const handleSubmitRequest = async (e: any) => {
    e.preventDefault();

    const response = await handleErrorCheckRequest();

    if (response.error && response.error.status) {
      setFormFieldsErrors({ ...response.error.errors });
    } else {
      updateTask(formData);
    }
  };

  const handleOnChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTaskStatusUpdateRequest = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <form onSubmit={handleSubmitRequest}>
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
              onChange={(e) => handleTaskStatusUpdateRequest(e)}
              tabIndex={1}
            />
          </label>
        </div>
        <div>
          <button type="submit">Edit</button>
          <button
            onClick={() => {
              dispatchToDoMasterAction({ type: CRUD.VIEW });
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
