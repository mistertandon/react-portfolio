export type ToDoT = {
  id: number;
  name: string;
  isCompleted: boolean;
};

export type ToDoMasterProp = {
  item: ToDoT;
  iscompleted: boolean;
  toDoUpdateStatus: (todoStatus: boolean, item: ToDoT) => void;
  // toDoMarkComplete: (item: ToDoT) => void;
  // toDoMarkProgress: (item: ToDoT) => void;
};

export type ToDoListProp = { items: ToDoT[] };

export type ToDoViewProp = {
  item: ToDoT;
  toDoUpdateStatus: (todoStatus: boolean, item: ToDoT) => void;
  iscompleted: boolean;
  // toDoMarkComplete: (item: ToDoT) => void;
  // toDoMarkProgress: (item: ToDoT) => void;
};
