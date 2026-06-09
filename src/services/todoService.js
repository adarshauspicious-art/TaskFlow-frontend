import API from "./api";

export const getTodos = () =>
  API.get("/todos");

export const createTodo = (data) =>
  API.post("/todos", data);

export const toggleTodo = (id) =>
  API.patch(`/todos/${id}`);

export const deleteTodo = (id) =>
  API.delete(`/todos/${id}`);    
