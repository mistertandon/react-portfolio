import { CRUD_TYPE } from "../../helpers/constants.model";

export type Task_TYPE = {
  id: number;
  name: string;
  isCompleted: boolean;
};

export type TaskList_PROP = {
  updateTaskStatus: (todoStatus: boolean, item: Task_TYPE) => void;
  updateTask: (item: Task_TYPE) => void;
  pendingTaskList: Task_TYPE[];
  completedTaskList: Task_TYPE[];
};

export type TaskMaster_PROP = {
  item: Task_TYPE;
  iscompleted: boolean;
  updateTaskStatus: (todoStatus: boolean, item: Task_TYPE) => void;
  updateTask: (item: Task_TYPE) => void;
};

export type ViewTask_PROP = {
  item: Task_TYPE;
  iscompleted: boolean;
  updateTaskStatus: (todoStatus: boolean, item: Task_TYPE) => void;
  dispatchToDoMasterAction: any;
};

export type AddTask_PROP = {
  addTaskHandler: (item: Task_TYPE) => void;
};

export type EditTask_PROP = {
  item: Task_TYPE;
  updateTask: (item: Task_TYPE) => void;
};

export type TaskReducerState_TYPE = {
  view: boolean;
  edit: boolean;
  delete: boolean;
  create: boolean;
};

export type TaskReducerAction_TYPE = {
  type: keyof CRUD_TYPE;
};

export type TaskReducer_TYPE<TaskReducerState_TYPE, TaskReducerAction_TYPE> = (
  state: TaskReducerState_TYPE,
  action: TaskReducerAction_TYPE
) => TaskReducerState_TYPE;
