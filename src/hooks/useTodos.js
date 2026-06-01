"use client";

import { useEffect, useState } from "react";

import {
  getTodos,
  createTodo,
  toggleTodo,
  deleteTodo,
} from "@/services/todoService";

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    try {
      const res = await getTodos();
      setTodos(res.data.todos);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = async (title) => {
    await createTodo({ title });
    loadTodos();
  };

  const removeTodo = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  const completeTodo = async (id) => {
    await toggleTodo(id);
    loadTodos();
  };

  return {
    todos,
    addTodo,
    removeTodo,
    completeTodo,
    loadTodos,
  };
}