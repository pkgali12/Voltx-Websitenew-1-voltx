import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronRight, Truck, Package, Activity, ShieldCheck, Factory } from "lucide-react";

export default function MaterialHandlingPage() {
  const navigate = useNavigate();

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
          Industrial Excellence
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-10"
        >
          MATERIAL HANDLING <span className="text-brand shadow-brand drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">EQUIPMENT</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-2xl text-zinc-400 max-w-4xl mx-auto leading-relaxed"
        >
          Robust, custom-engineered electric solutions to automate and streamline your industrial and material handling operations.
        </motion.p>
      </section>

      {/* Indoor Material Movement Section */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold mb-8 italic"
            >
              Indoor <span className="text-brand">Material Movement</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-400 mb-12 leading-relaxed"
            >
              Optimize your factory and warehouse operations with our precision-engineered, battery-operated trolleys. Designed for zero-emission indoor use, these platforms provide silent, efficient, and safe material transport across industrial floors.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="p-8 rounded-[32px] bg-zinc-900/50 border border-white/5 backdrop-blur-sm">
                <h4 className="text-brand font-bold mb-3 text-lg">Zero Emissions</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">Clean, electric-powered operation ideal for indoor environments.</p>
              </div>
              <div className="p-8 rounded-[32px] bg-zinc-900/50 border border-white/5 backdrop-blur-sm">
                <h4 className="text-brand font-bold mb-3 text-lg">High Efficiency</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">Optimized for high-utilization cycles and continuous operation.</p>
              </div>
            </div>
          </div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="order-1 lg:order-2 bg-zinc-100 rounded-[40px] p-2 text-zinc-900 overflow-hidden shadow-2xl relative flex items-center justify-center"
          >
            <img 
              src="/images/Battery%20Operated%20Trolleys.png" 
              alt="Battery Operated Trolleys" 
              className="w-full h-auto object-contain rounded-[32px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Outdoor Facility Logistics Section */}
      <section className="px-6 mb-32 bg-zinc-900/30 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-200 rounded-[48px] p-2 text-zinc-950 shadow-2xl relative overflow-hidden flex items-center justify-center"
          >
            <img 
              src="/images/eloaders.png" 
              alt="e-Loaders 1000 KGS Series" 
              className="w-full h-auto object-contain rounded-[40px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div>
             <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold mb-8 italic"
            >
              Outdoor <span className="text-brand">Facility Logistics</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-400 mb-12 leading-relaxed"
            >
              Expand your logistics reach beyond the warehouse walls. Our ruggedized transfer platforms are engineered for transit between buildings within a facility, featuring durable drivetrains that handle uneven terrain and environmental conditions.
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-[32px] bg-zinc-950/50 border border-white/5 backdrop-blur-sm">
                <h4 className="text-brand font-bold mb-3 text-lg">Ruggedized Chassis</h4>
                <p className="text-sm text-zinc-500">Heavy-duty construction for inter-building transit and rougher surfaces.</p>
              </div>
              <div className="p-8 rounded-[32px] bg-zinc-950/50 border border-white/5 backdrop-blur-sm">
                <h4 className="text-brand font-bold mb-3 text-lg">All-Weather</h4>
                <p className="text-sm text-zinc-500">Reliable performance across varying environmental facility conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
            Custom Engineering for <span className="text-brand italic">Your Facility</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 mb-12 leading-relaxed">
            From payload capacity to specialized controls, we engineer material handling solutions tailored to your specific operational requirements.
          </p>
          <button 
            onClick={() => navigate("/", { state: { scrollToContact: true } })}
            className="bg-brand hover:brightness-110 text-zinc-950 px-12 py-5 rounded-full font-bold flex items-center gap-2 mx-auto transition-all text-xl shadow-[0_0_30px_rgba(56,189,248,0.3)]"
          >
            Request a Custom Quotation
            <ArrowRight className="w-6 h-6" />
          </button>
        </motion.div>
      </section>
    </div>
  );
}
