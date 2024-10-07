import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { addTodo, toggleTodo } from "../features/todos/todosSlice";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoApp: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (title: string) => {
    const newTodo = { id: Date.now(), title, completed: false };
    dispatch(addTodo(newTodo));
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodo addTodo={handleAddTodo} />
      <TodoList todos={todos} toggleTodo={handleToggleTodo} />
    </div>
  );
};

export default TodoApp;
