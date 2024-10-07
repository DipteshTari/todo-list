import React from "react";
import { Todo } from "../types/todos";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li
      onClick={() => toggleTodo(todo.id)}
      className={`cursor-pointer p-2 ${todo.completed ? "line-through" : ""}`}
    >
      {todo.title}
    </li>
  );
};

export default TodoItem;
