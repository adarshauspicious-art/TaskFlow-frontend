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
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />

      <Navbar logout={logout} user={user} />

      <div className="max-w-7xl mx-auto px-6 py-10 relative z-10">
        {/* Hero Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-slate-300 mb-5">
              ✨ Productivity Dashboard
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              Welcome Back 👋
            </h1>

            <p className="text-slate-400 text-lg mt-4 max-w-2xl">
              Manage your tasks, track your productivity,
              and stay focused every day with TaskFlow.
            </p>
          </div>

        </div>
        
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-7 shadow-xl hover:-translate-y-2 transition duration-300">
          <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/10 blur-3xl rounded-full" />

          <p className="text-slate-400 mb-3">Total Tasks</p>

          <h2 className="text-5xl font-black">
            {todos.length}
          </h2>

          <p className="text-slate-500 mt-4">
            All created tasks
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-7 shadow-xl hover:-translate-y-2 transition duration-300">
          <div className="absolute top-0 right-0 w-28 h-28 bg-green-500/10 blur-3xl rounded-full" />

          <p className="text-slate-400 mb-3">Completed</p>

          <h2 className="text-5xl font-black text-green-400">
            {completedTodos}
          </h2>

          <p className="text-slate-500 mt-4">
            Successfully finished
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-7 shadow-xl hover:-translate-y-2 transition duration-300">
          <div className="absolute top-0 right-0 w-28 h-28 bg-yellow-500/10 blur-3xl rounded-full" />

          <p className="text-slate-400 mb-3">Pending</p>

          <h2 className="text-5xl font-black text-yellow-400">
            {pendingTodos}
          </h2>

          <p className="text-slate-500 mt-4">
            Tasks remaining
          </p>
        </div>
      </div>

      {/* Add Todo */}
      <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl p-5 shadow-2xl mb-14">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5" />

        <div className="relative flex flex-col md:flex-row gap-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What needs to be done today?"
            className="
                flex-1 bg-black/20 border border-white/10
                rounded-2xl px-6 py-4 outline-none
                text-white placeholder:text-slate-500
                focus:border-cyan-400 transition
              "
          />

          <button
            onClick={addTodo}
            className="
                px-8 py-4 rounded-2xl
                bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500
                font-bold text-lg
                hover:scale-105 transition duration-300
                shadow-xl shadow-purple-500/20
              "
          >
            + Add Task
          </button>
        </div>
      </div>

      {/* Todo List */}
      {todos.length === 0 ? (
        <div className="text-center py-28 border border-dashed border-white/10 rounded-[40px] bg-white/5 backdrop-blur-xl">
          <div className="text-7xl mb-6">📋</div>

          <h2 className="text-4xl font-black mb-4">
            No Tasks Yet
          </h2>

          <p className="text-slate-500 text-lg">
            Create your first task and start building momentum.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
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
    
  );
}