export type ToDoT = {
  id: string;
  name: string;
  isCompleted: boolean;
};

export type ToDoMasterProp = {
  item: ToDoT;
  key: string;
};

export type ToDoListProp = { items: ToDoT[] };

export type ToDoViewProp = { item: ToDoT };
