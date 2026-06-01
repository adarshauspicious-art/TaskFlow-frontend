"use client";

import Link from "next/link";

export default function Navbar({ logout, user }) {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
     <Link
  href="/dashboard"
  className="flex items-center gap-3 group"
>
  <span className="text-3xl font-black tracking-tight text-white">
    TaskFlow
  </span>

  <span
    className="
      text-xs md:text-sm
      font-bold
      px-3 py-1
      rounded-full
      border border-cyan-400/40
      bg-black
      text-cyan-300
      shadow-[0_0_15px_rgba(34,211,238,0.5)]
      group-hover:scale-110
      transition
      duration-300
    "
  >
    --@$N
  </span>
</Link>

        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
              {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>

            <div>
              <p className="text-white font-medium">{user?.name || "User"}</p>

              <p className="text-zinc-500 text-sm">Welcome back</p>
            </div>
          </div>

          <button
            onClick={logout}
            className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
