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

      <div className="w-full px-4 sm:px-6 md:px-14 py-4 md:py-5 flex items-center justify-between relative z-10">
        
        {/* Logo */}
        <Link
          href="/dashboard"
          className="text-2xl md:text-3xl font-extrabold tracking-tight flex items-center gap-2 md:gap-3 group"
        >
          <span
            className="
              bg-gradient-to-r from-white via-slate-200 to-slate-400
              bg-clip-text text-transparent
              group-hover:scale-105 transition
            "
          >
            TaskFlow
          </span>

          <span
            className="
              text-xs md:text-sm font-bold px-2 md:px-3 py-1 rounded-full
              bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500
              text-black shadow-lg shadow-purple-500/30
              animate-pulse
            "
          >
            -@$N
          </span>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* User Card */}
          <div
            className="
              flex items-center gap-2 md:gap-4
              px-3 md:px-4 py-2 rounded-2xl
              border border-white/10
              bg-white/5 backdrop-blur-xl
              max-w-[170px] sm:max-w-[220px] md:max-w-none
            "
          >
            {/* Avatar */}
            <div
              className="
                relative w-9 h-9 md:w-11 md:h-11 rounded-full
                bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500
                p-[2px] shrink-0
              "
            >
              <div
                className="
                  w-full h-full rounded-full
                  bg-[#020617]
                  flex items-center justify-center
                  text-white font-bold text-sm md:text-lg
                "
              >
                {user?.name
                  ? user.name.charAt(0).toUpperCase()
                  : "U"}
              </div>

              {/* Online Dot */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#020617] rounded-full animate-pulse" />
            </div>

            {/* User Info */}
            <div className="overflow-hidden">
              <p className="text-white font-semibold leading-none text-sm md:text-base truncate">
                {user?.name || "User"}
              </p>

              <p className="text-slate-400 text-xs md:text-sm mt-1 hidden sm:block">
                Welcome back ✨
              </p>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={logout}
            className="
              px-3 md:px-5 py-2 md:py-2.5 rounded-2xl
              bg-gradient-to-r from-red-500 to-pink-500
              text-white text-sm md:text-base font-semibold
              hover:scale-105 transition duration-300
              shadow-lg shadow-red-500/20
            "
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}