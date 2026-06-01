import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-pink-500/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 md:px-14 py-6 border-b border-white/10 backdrop-blur-xl bg-white/5">
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight flex items-center gap-3"
        >
          <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            TaskFlow
          </span>

          <span
            className="
              text-sm font-semibold px-3 py-1 rounded-full
              bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500
              text-black shadow-lg shadow-purple-500/30 animate-pulse
            "
          >
            -@$N
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-slate-300 hover:text-white transition duration-300"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="
              px-5 py-2.5 rounded-xl
              bg-gradient-to-r from-purple-500 to-cyan-500
              text-white font-semibold
              hover:scale-105 transition duration-300
              shadow-lg shadow-cyan-500/20
            "
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-28 pb-20">
        {/* Badge */}
        <div className="mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-slate-300 text-sm shadow-lg">
          🚀 Smart Productivity Platform
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-8xl font-black leading-tight max-w-6xl">
          Organize Work <br />

          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Like Never Before
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed">
          TaskFlow helps teams and individuals manage projects,
          boost productivity, and stay focused with a modern
          AI-powered workflow experience.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-12">
          <Link
            href="/register"
            className="
              px-8 py-4 rounded-2xl
              bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500
              font-bold text-lg
              hover:scale-105 transition duration-300
              shadow-2xl shadow-purple-500/30
            "
          >
            Start For Free
          </Link>

          <Link
            href="/login"
            className="
              px-8 py-4 rounded-2xl
              border border-white/10
              bg-white/5 backdrop-blur-xl
              hover:bg-white/10
              transition duration-300
              font-semibold text-lg
            "
          >
            Login Account
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-24 w-full max-w-6xl">
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition duration-300 shadow-xl">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-3">
              Fast Workflow
            </h3>
            <p className="text-slate-400">
              Organize tasks instantly with smooth and modern UX.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition duration-300 shadow-xl">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold mb-3">
              Team Collaboration
            </h3>
            <p className="text-slate-400">
              Work together in real-time and manage projects easily.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition duration-300 shadow-xl">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="text-2xl font-bold mb-3">
              Productivity Boost
            </h3>
            <p className="text-slate-400">
              Stay focused and complete more work every single day.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}