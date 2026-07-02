const projects = [
  {
    title: "Enterprise Minecraft Network",
    category: "Minecraft",
    description:
      "Sistema completo con plugin custom, sincronizzazione e dashboard.",
  },
  {
    title: "Discord Management Suite",
    category: "Discord",
    description:
      "Bot professionale con pannello web e automazioni avanzate.",
  },
  {
    title: "Kayros Platform",
    category: "Web",
    description:
      "Dashboard moderna sviluppata con Next.js e tecnologie moderne.",
  },
];

export default function Portfolio() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-40">

      <div className="mb-20">
        <p className="uppercase tracking-[0.25em] text-zinc-500 text-sm">
          Selected Work
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Projects we're proud of.
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-3xl border border-zinc-800 overflow-hidden hover:border-white transition-all duration-300"
          >

            <div className="h-56 bg-gradient-to-br from-zinc-900 to-zinc-800" />

            <div className="p-8">

              <p className="text-sm text-zinc-500 uppercase mb-3">
                {project.category}
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-zinc-400 leading-8">
                {project.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}