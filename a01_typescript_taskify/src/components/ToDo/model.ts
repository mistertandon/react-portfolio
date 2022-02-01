export type ToDoT = {
  id: number;
  name: string;
  isCompleted: boolean;
};

export type ToDoMasterProp = {
  item: ToDoT;
};

export type ToDoListProp = { items: ToDoT[] };

export type ToDoViewProp = { item: ToDoT };
