export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">

      <div>

        <h1 className="text-7xl font-black leading-tight">

          Build.
          <br />
          Create.
          <br />
          Scale.

        </h1>

        <p className="mt-8 text-xl max-w-2xl mx-auto text-gray-400">

          Realizziamo plugin Minecraft, bot Discord
          e piattaforme web con la qualità di uno
          studio software moderno.

        </p>

        <div className="flex justify-center gap-5 mt-12">

          <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold">

            Inizia un progetto

          </button>

          <button className="border border-white/20 px-8 py-4 rounded-xl">

            I nostri lavori

          </button>

        </div>

      </div>

    </section>
  );
}