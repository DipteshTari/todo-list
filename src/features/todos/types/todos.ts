export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodosState {
  todos: Todo[];
}
