import { Code2, Globe, Bot } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Plugin Minecraft",
    description:
      "Plugin enterprise per Paper, Velocity e BungeeCord sviluppati su misura."
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Discord Bots",
    description:
      "Bot avanzati con dashboard web, ticket, economy, moderazione e automazioni."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Platforms",
    description:
      "Dashboard, SaaS e piattaforme moderne sviluppate con Next.js."
  }
];

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-40">

      <h2 className="text-5xl font-bold mb-4">
        Cosa realizziamo
      </h2>

      <p className="text-zinc-400 mb-16 max-w-xl">
        Software costruito per durare, scalare e crescere insieme al tuo progetto.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {services.map((service) => (

          <div
            key={service.title}
            className="border border-zinc-800 rounded-3xl p-8 hover:border-white transition-all duration-300 hover:-translate-y-2"
          >

            <div className="mb-6">
              {service.icon}
            </div>

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