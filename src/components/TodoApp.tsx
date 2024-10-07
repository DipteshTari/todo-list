import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import {
  fetchTodosAsync,
  addTodoAsync,
  toggleTodoAsync,
} from "../features/todos/todosSlice";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoApp: React.FC = () => {
  const { todos, loading, error } = useSelector(
    (state: RootState) => state.todos
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  const handleAddTodo = (title: string) => {
    dispatch(addTodoAsync(title));
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodoAsync(id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <AddTodo addTodo={handleAddTodo} />
      <TodoList todos={todos} toggleTodo={handleToggleTodo} />
    </div>
  );
};

export default TodoApp;
