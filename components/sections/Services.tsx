import { Code2, Bot, Globe } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Minecraft Development",
    description:
      "Plugin premium, sistemi custom e infrastrutture scalabili per server Minecraft.",
  },
  {
    icon: Bot,
    title: "Discord Automation",
    description:
      "Bot professionali, dashboard e integrazioni per community e aziende.",
  },
  {
    icon: Globe,
    title: "Web Platforms",
    description:
      "Siti web moderni, dashboard e software su misura sviluppati con tecnologie moderne.",
  },
];

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-40">

      <div className="text-center mb-20">

        <p className="text-zinc-500 uppercase tracking-[0.25em] text-sm">
          Services
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Everything you need.
        </h2>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {services.map((service) => (
          <div
            key={service.title}
            className="border border-zinc-800 rounded-3xl p-10 hover:border-white transition duration-300"
          >
            <service.icon className="w-10 h-10 mb-8" />

            <h3 className="text-2xl font-semibold mb-4">
              {service.title}
            </h3>

            <p className="text-zinc-400 leading-8">
              {service.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}