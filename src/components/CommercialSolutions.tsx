import { motion } from "motion/react";
import { BarChart3, Building2, Truck, HardHat } from "lucide-react";

const solutions = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Last-Mile Delivery",
    desc: "Optimized payload algorithms and route integration for urban logistics.",
    metric: "40% Lower OpEx"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Fleet Analytics",
    desc: "Real-time telemetry and predictive maintenance for every vehicle in your cohort.",
    metric: "Zero Downtime"
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Corporate Charging",
    desc: "Turn-key charging infrastructure for offices, warehouses, and transit hubs.",
    metric: "V2G Ready"
  }
];

export default function CommercialSolutions() {
  return (
    <section id="solutions" className="py-24 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.3em] text-brand uppercase mb-4">Enterprise</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Solutions for <span className="text-zinc-500">Industry Leaders.</span></h3>
          </div>
          <button className="text-brand font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
            Download Enterprise Whitepaper <motion.span>→</motion.span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-brand/50 transition-colors group"
            >
              <div className="mb-6 text-brand group-hover:scale-110 transition-transform origin-left">
                {s.icon}
              </div>
              <h4 className="text-2xl font-display font-bold mb-3">{s.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {s.desc}
              </p>
              <div className="inline-block px-4 py-2 rounded-lg bg-zinc-800 text-brand text-xs font-bold">
                {s.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
