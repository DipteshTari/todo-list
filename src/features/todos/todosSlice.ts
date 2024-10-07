import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchTodos, addTodoApi, toggleTodoApi } from "../../api/todosApi";
import { Todo, TodosState } from "../../types/todos";

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
};

export const fetchTodosAsync = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const todos = await fetchTodos();
    return todos;
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodo",
  async (title: string) => {
    const newTodo = await addTodoApi({ title, completed: false });
    return newTodo;
  }
);

export const toggleTodoAsync = createAsyncThunk(
  "todos/toggleTodo",
  async (id: number, { getState }) => {
    const state = getState() as { todos: TodosState };
    const todo = state.todos.todos.find((todo) => todo.id === id);
    if (todo) {
      const updatedTodo = await toggleTodoApi(id, !todo.completed);
      return updatedTodo;
    }
    return null;
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodosAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTodosAsync.fulfilled,
        (state, action: PayloadAction<Todo[]>) => {
          state.loading = false;
          state.todos = action.payload;
        }
      )
      .addCase(fetchTodosAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch todos";
      })
      .addCase(addTodoAsync.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload);
      })
      .addCase(
        toggleTodoAsync.fulfilled,
        (state, action: PayloadAction<Todo | null>) => {
          if (action.payload) {
            const index = state.todos.findIndex(
              (todo) => todo.id === action.payload!.id
            );
            if (index !== -1) {
              state.todos[index] = action.payload!;
            }
          }
        }
      );
  },
});

export default todosSlice.reducer;
