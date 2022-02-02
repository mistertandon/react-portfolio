import { CRUD } from "./../../helpers/constants";

import {
  toDoReducer_TYPE,
  toDoReducerState_TYPE,
  toDoReducerAction_TYPE,
} from "./todo.model";

export const toDoReducer: toDoReducer_TYPE<
  toDoReducerState_TYPE,
  toDoReducerAction_TYPE
> = (
  state: toDoReducerState_TYPE,
  action: toDoReducerAction_TYPE
): toDoReducerState_TYPE => {
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
