export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodosState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}
