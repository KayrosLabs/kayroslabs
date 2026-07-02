export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff15,transparent_55%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>
      <div>

        <h1 className="text-7xl md:text-8xl font-bold leading-none tracking-tight">
  Build.
  <br />
  Create.
  <br />
  Scale.
</h1>

        <p className="mt-10 max-w-2xl text-xl text-white/60 leading-9">
  Realizziamo plugin Minecraft, bot Discord,
  piattaforme web e software su misura
  con standard enterprise.
</p>

        <div className="mt-12 flex gap-6">

<button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
  Inizia un progetto
</button>

<button className="border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition">
  I nostri lavori
</button>

</div>

      </div>

    </section>
  );
}