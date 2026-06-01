"use client";

import { useState } from "react";
import { registerUser } from "@/services/authService";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);

      toast.success("Account Created Successfully");
      router.push("/login");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] px-4 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-emerald-500/20 blur-[120px] rounded-full" />
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

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">

          {/* Home */}
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
              Create Account
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm">
              Join TaskFlow 🚀
            </p>
          </div>

        </div>

        {/* Name */}
        <div className="mb-5">
          <label className="text-slate-300 text-sm mb-2 block">
            Name
          </label>

          <input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="
              w-full px-5 py-4
              rounded-xl
              bg-black/30
              border border-white/10
              text-white
              focus:outline-none
              focus:border-emerald-400
              transition
            "
            required
          />
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
              focus:border-emerald-400
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
              focus:border-emerald-400
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
            bg-gradient-to-r from-emerald-500 via-green-500 to-cyan-500
            text-white font-bold
            hover:scale-[1.02]
            transition
            shadow-lg shadow-emerald-500/20
          "
        >
          Register
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-white/10" />
          <span className="px-3 text-slate-500 text-sm">OR</span>
          <div className="flex-1 border-t border-white/10" />
        </div>

        {/* Login Link */}
        <p className="text-center text-slate-400 text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-emerald-400 hover:text-emerald-300 font-semibold"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}