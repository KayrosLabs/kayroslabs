"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-bold">
            K
          </div>

          <span className="text-xl font-semibold text-white">
            Kayros Labs
          </span>

        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm">

          <Link href="#">Servizi</Link>

          <Link href="#">Progetti</Link>

          <Link href="#">Workspace</Link>

          <Link href="#">Chi siamo</Link>

        </nav>

        <button className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:scale-105 transition">
          Contattaci
        </button>

      </div>
    </header>
  );
}