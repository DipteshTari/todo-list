import axios from 'axios';

const API_URL = 'http://localhost:4000/todos';

export const fetchTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTodoApi = async (todo: { title: string; completed: boolean }) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
};

export const toggleTodoApi = async (id: number, completed: boolean) => {
  const response = await axios.patch(`${API_URL}/${id}`, { completed });
  return response.data;
};