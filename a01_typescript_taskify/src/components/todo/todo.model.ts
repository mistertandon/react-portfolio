import { CRUD_T } from "../../helpers/constants.model";

export type ToDoT = {
  id: number;
  name: string;
  isCompleted: boolean;
};

export type ToDoMasterProp = {
  item: ToDoT;
  iscompleted: boolean;
  toDoUpdateStatus: (todoStatus: boolean, item: ToDoT) => void;
};

export type ToDoListProp = { items: ToDoT[] };

export type ToDoViewProp = {
  item: ToDoT;
  iscompleted: boolean;
  toDoUpdateStatus: (todoStatus: boolean, item: ToDoT) => void;
  dispatchToDoMasterAction: any;
};

export type toDoReducerState_TYPE =
  | {
      view: boolean;
      edit: boolean;
      delete: boolean;
      create: boolean;
    }
  | undefined;

export type toDoReducerAction_TYPE = {
  type: keyof CRUD_T;
};

export type toDoReducer_TYPE<toDoReducerState_TYPE, toDoReducerAction_TYPE> = (
  state: toDoReducerState_TYPE,
  action: toDoReducerAction_TYPE
) => toDoReducerState_TYPE;
