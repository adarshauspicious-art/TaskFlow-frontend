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
      const res = await registerUser(form);

      console.log("SUCCESS", res.data);

      toast.success("Account Created Successfully");

      router.push("/login");
    } catch (err) {
      console.log("ERROR", err);

      toast.error(
        err.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-md bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl"
      >
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            Create Account 🚀
          </h1>

          <p className="text-slate-400 mt-2">
            Join and start managing your tasks
          </p>
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-slate-300 mb-2">
            Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            value={form.name}
            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-slate-300 mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={form.email}
            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-slate-300 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={form.password}
            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            required
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all duration-200 text-white py-4 rounded-xl font-semibold"
        >
          Register
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-slate-700"></div>
          <span className="px-3 text-slate-500 text-sm">OR</span>
          <div className="flex-1 border-t border-slate-700"></div>
        </div>

        {/* Login Link */}
        <p className="text-center text-slate-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-emerald-500 hover:text-emerald-400 font-medium"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}