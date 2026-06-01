"use client";

import Link from "next/link";

export default function Navbar({ logout, user }) {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/dashboard"
          className="text-3xl font-extrabold tracking-tight"
        >
          TaskFlow
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
