import { CRUD_T } from "../../helpers/constants.model";

export type ToDo_TYPE = {
  id: number;
  name: string;
  isCompleted: boolean;
};

export type ToDoMasterProp = {
  item: ToDo_TYPE;
  iscompleted: boolean;
  toDoUpdateStatus: (todoStatus: boolean, item: ToDo_TYPE) => void;
};

export type ToDoList_Prop = {
  toDoUpdateStatus: (todoStatus: boolean, item: ToDo_TYPE) => void;
  pendingToDoList: ToDo_TYPE[];
  completedToDoList: ToDo_TYPE[];
};

export type ToDoViewProp = {
  item: ToDo_TYPE;
  iscompleted: boolean;
  toDoUpdateStatus: (todoStatus: boolean, item: ToDo_TYPE) => void;
  dispatchToDoMasterAction: any;
};

export type ToDoAdd_PROP = {
  addToDoItem: (item: ToDo_TYPE) => void;
};

export type toDoReducerState_TYPE = {
  view: boolean;
  edit: boolean;
  delete: boolean;
  create: boolean;
};

export type toDoReducerAction_TYPE = {
  type: keyof CRUD_T;
};

export type toDoReducer_TYPE<toDoReducerState_TYPE, toDoReducerAction_TYPE> = (
  state: toDoReducerState_TYPE,
  action: toDoReducerAction_TYPE
) => toDoReducerState_TYPE;
