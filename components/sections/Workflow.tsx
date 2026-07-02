const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Analizziamo il progetto, definiamo gli obiettivi e progettiamo la soluzione migliore.",
  },
  {
    number: "02",
    title: "Development",
    description:
      "Realizziamo software moderni seguendo standard elevati e attenzione ai dettagli.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Deploy, test, supporto e miglioramenti continui per garantire risultati nel tempo.",
  },
];

export default function Workflow() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-40">

      <div className="mb-20">

        <p className="uppercase tracking-[0.25em] text-zinc-500 text-sm">
          Workflow
        </p>

        <h2 className="text-5xl font-bold mt-4">
          A clear process.
        </h2>

      </div>

      <div className="grid md:grid-cols-3 gap-10">

        {steps.map((step) => (
          <div
            key={step.number}
            className="border-l border-zinc-800 pl-8"
          >
            <p className="text-zinc-600 text-5xl font-bold mb-6">
              {step.number}
            </p>

            <h3 className="text-2xl font-semibold mb-4">
              {step.title}
            </h3>

            <p className="text-zinc-400 leading-8">
              {step.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}