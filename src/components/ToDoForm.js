"use client";

export default function TodoForm({
  title,
  setTitle,
  addTodo,
}) {
  return (
    <div className="flex gap-4 mb-8">
      <input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        placeholder="Add a task..."
        className="flex-1 p-4 rounded-xl bg-slate-900 text-white"
      />

      <button
        onClick={addTodo}
        className="bg-blue-600 px-6 rounded-xl text-white"
      >
        Add
      </button>
    </div>
  );
}