const steps = [
  {
    number: "01",
    title: "Analisi",
    description:
      "Studiamo il progetto, gli obiettivi e definiamo insieme la soluzione migliore."
  },
  {
    number: "02",
    title: "Sviluppo",
    description:
      "Realizziamo il software con tecnologie moderne mantenendo il codice pulito e scalabile."
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "Pubblichiamo il progetto e forniamo assistenza continua e aggiornamenti."
  }
];

export default function Workflow() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-40">

      <div className="mb-20">

        <span className="text-zinc-500 uppercase tracking-[0.3em]">
          Workflow
        </span>

        <h2 className="text-5xl font-bold mt-4">
          Come lavoriamo
        </h2>

      </div>

      <div className="space-y-10">

        {steps.map((step) => (
          <div
            key={step.number}
            className="flex gap-10 border-b border-zinc-800 pb-10"
          >

            <span className="text-6xl font-bold text-zinc-700">
              {step.number}
            </span>

            <div>

              <h3 className="text-3xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-zinc-400 max-w-2xl leading-8">
                {step.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}