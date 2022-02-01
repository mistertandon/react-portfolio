export type ToDoT = {
  id: string;
  name: string;
  isCompleted: boolean;
};

export type ToDoMasterProp = {
  item: ToDoT;
};

export type ToDoListProp = { items: ToDoT[] };
