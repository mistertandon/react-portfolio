import { CRUD } from "./../../helpers/constants";

const toDoAction = (state: any, action: any) => {
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
