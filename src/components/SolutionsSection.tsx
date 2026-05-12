import { motion } from "motion/react";

const solutions = [
  {
    title: "BLDC Motors, Drivetrains & Kits - Bicycles, 2Wheelers",
    description: "Conquer any terrain with our durable e-bikes. Purpose-built for the demands of Indian roads and last-mile delivery fleets.",
    image: "/images/BLDC Motor Kits ebikes.jpg",
    id: "ebike-solution"
  },
  {
    title: "Motors & Drivetrains - Material Handling Equipment",
    description: "Battery Operated trolleys and custom solutions for moving massive loads with ease. Battery-powered and designed for reliability.",
    image: "/images/Warehouse-factory facility.jpg",
    id: "logistics-solution"
  },
  {
    title: "Drivetrains - Remote Controlled/Autonomous Vehicles",
    description: "Semi-Autonomous and Fully-Autonomous Physical AI Solutions.",
    image: "/images/Remote%20Controlled%20BOT.jpg",
    id: "autonomous-solution"
  }
];

export default function SolutionsSection() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight"
          >
            Featured <span className="text-cyan-400 italic">CUSTOM BLDC MOTOR DRIVES</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col h-full bg-zinc-900/30 border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
              id={item.id}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow text-center">
                <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
