import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden mesh-gradient">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-zinc-900/50 border border-white/5 text-zinc-400 text-sm font-medium mb-12"
        >
          <span className="w-2 h-2 rounded-full bg-brand shadow-[0_0_10px_#38bdf8]" />
          Engineering the Future of Motion
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-display font-bold leading-none mb-10 tracking-tight text-white"
        >
          ELECTRIFYING <span className="text-brand">MOBILITY</span>,<br />
          INDUSTRY, AND AGRICULTURE.
        </motion.h1>

        {/* Subheader */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-zinc-400 max-w-3xl mb-16 leading-relaxed font-normal"
        >
          Designing and manufacturing high-performance BLDC motors,<br className="hidden md:block" />
          ruggedized drivetrains, and autonomous Physical AI solutions.<br />
          Proudly engineered in Bengaluru.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <button 
            onClick={() => scrollToSection("solutions")}
            className="bg-brand hover:brightness-110 text-zinc-950 px-10 py-5 rounded-full font-bold flex items-center gap-2 transition-all text-lg shadow-[0_0_30px_rgba(56,189,248,0.3)]"
          >
            Explore Our Products
            <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="bg-zinc-900/40 hover:bg-zinc-900/60 border border-white/10 text-white px-10 py-5 rounded-full font-bold transition-all text-lg backdrop-blur-sm"
          >
            Work with Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
