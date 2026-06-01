import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-950 text-white">
      <h1 className="text-5xl font-bold mb-6">
        TaskFlow 🚀
      </h1>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-600 px-6 py-3 rounded-xl"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="bg-emerald-600 px-6 py-3 rounded-xl"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

