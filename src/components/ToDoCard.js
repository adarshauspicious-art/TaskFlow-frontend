"use client";

import { formatDistanceToNow } from "date-fns";

export default function TodoCard({
  todo,
  onDelete,
  onToggle,
}) {
  return (
    <div
      className={`p-5 rounded-3xl border transition-all duration-300 ${
        todo.completed
          ? "bg-green-950 border-green-800 opacity-80"
          : "bg-zinc-900 border-zinc-800"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3
            className={`text-xl font-semibold ${
              todo.completed
                ? "line-through text-zinc-500"
                : "text-white"
            }`}
          >
            {todo.title}
          </h3>

          <p className="text-xs text-zinc-500 mt-2">
            Created{" "}
            {formatDistanceToNow(
              new Date(todo.createdAt),
              {
                addSuffix: true,
              }
            )}
          </p>

          <div className="mt-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                todo.completed
                  ? "bg-green-500/20 text-green-400"
                  : "bg-yellow-500/20 text-yellow-400"
              }`}
            >
              {todo.completed
                ? "Completed"
                : "Pending"}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() =>
              onToggle(todo._id)
            }
            className={`px-4 py-2 rounded-xl font-medium ${
              todo.completed
                ? "bg-yellow-500 text-black"
                : "bg-green-500 text-black"
            }`}
          >
            {todo.completed
              ? "Undo"
              : "Complete"}
          </button>

          <button
            onClick={() =>
              onDelete(todo._id)
            }
            className="bg-red-500 px-4 py-2 rounded-xl text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}