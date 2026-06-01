"use client";

import Link from "next/link";

export default function Navbar({ logout, user }) {
  return (
    <nav
      className="
        sticky top-0 z-50
        border-b border-white/10
        bg-[#020617]/80
        backdrop-blur-2xl
      "
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5 pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between px-3 sm:px-6 md:px-14 py-4">
        
        {/* Logo */}
        <Link
          href="/dashboard"
          className="flex items-center gap-2 shrink-0"
        >
          <h1
            className="
              text-lg sm:text-2xl md:text-3xl
              font-extrabold
              bg-gradient-to-r from-white via-slate-200 to-slate-400
              bg-clip-text text-transparent
            "
          >
            TaskFlow
          </h1>

          <span
            className="
              text-[10px] sm:text-xs font-bold
              px-2 py-1 rounded-full
              bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500
              text-black
            "
          >
            -@$N
          </span>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* User Info */}
          <div
            className="
              flex items-center gap-2
              px-2 sm:px-3 py-2
              rounded-xl
              border border-white/10
              bg-white/5
              min-w-0
            "
          >
            {/* Avatar */}
            <div
              className="
                w-8 h-8 sm:w-10 sm:h-10
                rounded-full
                bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500
                flex items-center justify-center
                text-white font-bold
                shrink-0
              "
            >
              {user?.name
                ? user.name.charAt(0).toUpperCase()
                : "U"}
            </div>

            {/* Username */}
            <p
              className="
                text-white
                text-sm sm:text-base
                font-semibold
                whitespace-nowrap
              "
            >
              {user?.name || "User"}
            </p>
          </div>

          {/* Logout */}
          <button
            onClick={logout}
            className="
              px-3 sm:px-5 py-2
              rounded-xl
              bg-gradient-to-r from-red-500 to-pink-500
              text-white
              text-sm sm:text-base
              font-semibold
              shrink-0
            "
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}