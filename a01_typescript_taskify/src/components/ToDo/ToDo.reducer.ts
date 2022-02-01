import { CRUD } from "./../../helpers/constants";

export const toDoAction = (state: any, action: any) => {
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
  }
};
