"use client";

import { useEffect, useState } from "react";
import {
  getTodos,
  createTodo,
  toggleTodo,
  deleteTodo,
} from "@/services/todoService";

import { logoutUser, getCurrentUser } from "@/services/authService";

import TodoCard from "@/components/ToDoCard.js";
import Navbar from "@/components/navbar.js";
import toast from "react-hot-toast";

export default function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [user, setUser] = useState(null);

  const loadUser = async () => {
    try {
      const res = await getCurrentUser();
      setUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };

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
    loadUser();
  }, []);

  const addTodo = async () => {
    if (!title.trim()) {
      return toast.error("Please enter a task");
    }

    try {
      await createTodo({ title });

      setTitle("");
      toast.success("Task Created");

      loadTodos();
    } catch (err) {
      toast.error("Failed to create task");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);

      toast.success("Task Deleted");

      loadTodos();
    } catch (err) {
      toast.error("Delete Failed");
    }
  };

  const handleToggle = async (id) => {
    try {
      await toggleTodo(id);

      loadTodos();
    } catch (err) {
      toast.error("Update Failed");
    }
  };

  const logout = async () => {
    await logoutUser();
    location.href = "/login";
  };

  const completedTodos = todos.filter((todo) => todo.completed).length;

  const pendingTodos = todos.length - completedTodos;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar logout={logout} user={user} />

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold mb-3">Welcome Back 👋</h1>

          <p className="text-zinc-400 text-lg">
            Stay focused. Stay productive.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-500 mb-2">Total Tasks</p>
            <h2 className="text-4xl font-bold">{todos.length}</h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-500 mb-2">Completed</p>
            <h2 className="text-4xl font-bold text-green-400">
              {completedTodos}
            </h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-500 mb-2">Pending</p>
            <h2 className="text-4xl font-bold text-yellow-400">
              {pendingTodos}
            </h2>
          </div>
        </div>

        {/* Add Task */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-4 flex gap-4 mb-10">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What needs to be done today?"
            className="flex-1 bg-transparent outline-none text-white px-2 text-lg"
          />

          <button
            onClick={addTodo}
            className="bg-white text-black px-8 py-3 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Add Task
          </button>
        </div>

        {/* Todo List */}
        {todos.length === 0 ? (
          <div className="text-center py-24">
            <h2 className="text-3xl font-bold mb-3">No Tasks Yet</h2>

            <p className="text-zinc-500">
              Create your first task and start organizing your day.
            </p>
          </div>
        ) : (
          <div className="grid gap-5">
            {todos.map((todo) => (
              <TodoCard
                key={todo._id}
                todo={todo}
                onDelete={handleDelete}
                onToggle={handleToggle}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
