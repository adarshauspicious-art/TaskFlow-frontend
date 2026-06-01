"use client";

import { useState } from "react";
import { loginUser } from "@/services/authService";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      await loginUser(form);
      toast.success("Login Successful");
      router.push("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] px-4 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-purple-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-500/20 blur-[120px] rounded-full" />

      {/* Card */}
      <form
        onSubmit={submit}
        className="
          relative z-10
          w-full max-w-md
          bg-white/5 backdrop-blur-2xl
          border border-white/10
          rounded-[28px]
          p-6 sm:p-8
          shadow-2xl
        "
      >

        {/* HEADER ROW (HOME + TITLE) */}
        <div className="flex items-center justify-between mb-8">

          {/* Home Button */}
          <Link
            href="/"
            className="
              px-3 py-2 sm:px-4 sm:py-2
              rounded-xl
              bg-white/5 border border-white/10
              text-slate-300 hover:text-white
              hover:bg-white/10
              transition text-sm font-medium
            "
          >
            ← Home
          </Link>

          {/* Title */}
          <div className="text-right">
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Welcome
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm">
              Login to your account
            </p>
          </div>

        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="text-slate-300 text-sm mb-2 block">
            Email
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="
              w-full px-5 py-4
              rounded-xl
              bg-black/30
              border border-white/10
              text-white
              focus:outline-none
              focus:border-cyan-400
              transition
            "
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-slate-300 text-sm mb-2 block">
            Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            className="
              w-full px-5 py-4
              rounded-xl
              bg-black/30
              border border-white/10
              text-white
              focus:outline-none
              focus:border-cyan-400
              transition
            "
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            w-full py-4 rounded-xl
            bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500
            text-white font-bold
            hover:scale-[1.02]
            transition
            shadow-lg shadow-purple-500/20
          "
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-white/10" />
          <span className="px-3 text-slate-500 text-sm">OR</span>
          <div className="flex-1 border-t border-white/10" />
        </div>

        {/* Register */}
        <p className="text-center text-slate-400 text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-cyan-400 hover:text-cyan-300 font-semibold"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}