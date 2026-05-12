import { motion } from "motion/react";

export default function AboutUs() {
  return (
    <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-white" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-[0.4em] text-brand uppercase mb-6">Our DNA</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
            ENGINEERING <br />
            <span className="text-zinc-500 font-light italic text-3xl">WITHOUT COMPROMISE.</span>
          </h3>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-xl mb-10">
            At the heart of every Voltx machine lies our proprietary high-performance BLDC motor technology. We bridge the gap between heavy industry reliability and high-speed efficiency, pushing the boundaries of what electric propulsion can achieve.
          </p>
          
          <div className="grid grid-cols-2 gap-8 py-8 border-t border-white/10">
            <div>
              <p className="text-3xl font-display font-bold text-white mb-1">15+</p>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Patents Held</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-white mb-1">100%</p>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Carbon Neutral Manufacturing</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-brand/10 blur-[60px] group-hover:bg-brand/20 transition-all rounded-full" />
          <div className="relative bg-zinc-900 border border-white/10 rounded-[40px] p-8 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" 
              alt="High-performance BLDC motor - Voltx Engineering Excellence" 
              className="w-full h-auto rounded-3xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-white uppercase tracking-widest">EngineeringExcellence.png</p>
                <p className="text-xs text-zinc-500">Voltx Core Propulsion System V3.4</p>
              </div>
              <div className="px-4 py-1 rounded-full border border-brand/30 text-brand text-[10px] font-bold uppercase">
                X-Series Tech
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
