import React from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

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
      {todo.text}
    </li>
  );
};

export default TodoItem;
