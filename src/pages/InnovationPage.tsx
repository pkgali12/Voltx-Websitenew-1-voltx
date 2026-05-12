import { motion } from "motion/react";
import { ArrowRight, Globe, Navigation, Box, Zap, Settings, Cpu, Microscope } from "lucide-react";

export default function InnovationPage() {
  const competencies = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Electromagnetic Design",
      desc: "Advanced motor profiling and simulation for maximum torque output and thermal efficiency in compact form factors."
    },
    {
      icon: <Navigation className="w-6 h-6" />,
      title: "Autonomous Motion",
      desc: "Integrated Physical AI controllers with sensor fusion capabilities for path planning and obstacle avoidance in unstructured environments."
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "Structural Integrity",
      desc: "FEA-validated mechanical designs for ruggedized chassis and drivetrains that withstand shock, vibration, and extreme loads."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-32 pb-20 mesh-gradient">
      {/* Hero Section */}
      <section className="px-6 mb-32 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-zinc-900/50 border border-white/5 text-brand text-sm font-medium mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-brand shadow-[0_0_10px_#38bdf8]" />
          Custom BLDC Motor drives
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-10 uppercase"
        >
          PRECISION <span className="text-brand shadow-brand drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">MOTORS</span> FOR THE FUTURE <br className="hidden md:block" /> OF MOTION
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-2xl text-zinc-400 max-w-4xl mx-auto leading-relaxed"
        >
          We translate complex customer requirements into high-performance, ruggedized electrical and mechanical systems. Engineering solutions for the harshest environments.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4 }}
           className="mt-12"
        >
           <button className="bg-brand hover:brightness-110 text-zinc-950 px-12 py-5 rounded-full font-bold flex items-center gap-2 mx-auto transition-all text-xl shadow-[0_0_30px_rgba(56,189,248,0.3)] uppercase tracking-wide">
            Partner With Us
            <ArrowRight className="w-6 h-6" />
          </button>
        </motion.div>
      </section>

      {/* Technical Competencies Section */}
      <section className="px-6 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">Technical <span className="text-brand italic">Competencies</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {competencies.map((c, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900/40 border border-white/5 p-10 rounded-[32px] hover:border-brand/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-800 text-brand flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{c.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Drivetrain Development Section */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-100 rounded-[48px] p-8 md:p-12 text-zinc-900 shadow-2xl relative overflow-hidden"
          >
             <div className="flex flex-col h-full">
                <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-8">Customer funded <br /> R&D Projects</h3>
                <div className="flex-1 flex items-center justify-center">
                  <img 
                    src="/images/Voltx-RnD-projects.png" 
                    alt="Customer Funded R&D Projects" 
                    className="w-full h-auto object-contain rounded-2xl shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
             </div>
          </motion.div>

          <div>
             <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold mb-8 italic"
            >
              Custom <span className="text-brand">DRIVETRAIN</span> Development
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-400 mb-8 leading-relaxed"
            >
              Our core strength lies in engineering precision-matched drivetrains for diverse and demanding applications. We specialize in translating complex customer requirements into high-performance systems.
            </motion.p>
             <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 mb-12 leading-relaxed"
            >
              From specialized agricultural robotics to heavy-duty industrial material handling, we collaborate closely with our partners to design, prototype, and manufacture drivetrain solutions that deliver maximum uptime.
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                <h4 className="text-brand font-bold mb-1 text-base">Application-Specific Tuning</h4>
                <p className="text-xs text-zinc-500">BLDC motor profiling for target efficiency.</p>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                <h4 className="text-brand font-bold mb-1 text-base">Custom Transmission</h4>
                <p className="text-xs text-zinc-500">Precision-matched gearbox and drive design.</p>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                <h4 className="text-brand font-bold mb-1 text-base">Integrated Controls</h4>
                <p className="text-xs text-zinc-500">Proprietary Physical AI control systems.</p>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
                <h4 className="text-brand font-bold mb-1 text-base">Rapid Prototyping</h4>
                <p className="text-xs text-zinc-500">Fast-track R&D from CAD to field-testing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
