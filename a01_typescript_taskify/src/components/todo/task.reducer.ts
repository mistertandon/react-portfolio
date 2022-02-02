import { CRUD } from "../../helpers/constants";

import {
  TaskReducer_TYPE,
  TaskReducerState_TYPE,
  TaskReducerAction_TYPE,
} from "./task.model";

export const taskReducer: TaskReducer_TYPE<
  TaskReducerState_TYPE,
  TaskReducerAction_TYPE
> = (
  state: TaskReducerState_TYPE,
  action: TaskReducerAction_TYPE
): TaskReducerState_TYPE => {
  switch (action.type) {
    case CRUD.VIEW: {
      return {
        ...state,
        view: true,
        edit: false,
        delete: false,
        create: false,
      };
      break;
    }
    case CRUD.EDIT: {
      return {
        ...state,
        view: false,
        edit: true,
        delete: false,
        create: false,
      };
      break;
    }
    default:
      return state;
  }
};
