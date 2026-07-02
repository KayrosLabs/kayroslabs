export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-white text-black flex items-center justify-center font-bold">
            K
          </div>

          <span className="text-2xl font-semibold">
            Kayros Labs
          </span>
        </div>

        <nav className="hidden md:flex gap-12 text-sm text-white/70">
          <a href="#">Servizi</a>
          <a href="#">Progetti</a>
          <a href="#">Workspace</a>
          <a href="#">Chi siamo</a>
        </nav>

        <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition">
          Contattaci
        </button>

      </div>
    </header>
  );
}