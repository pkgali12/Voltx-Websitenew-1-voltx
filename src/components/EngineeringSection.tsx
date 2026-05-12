import { motion } from "motion/react";

export default function EngineeringSection() {
  return (
    <section className="py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-10 leading-tight">
              Engineering the Core of <span className="text-cyan-400 italic">MOTION</span>
            </h2>
            
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed max-w-xl">
              <p>
                Established in 2021 in Bengaluru, <span className="text-white font-medium">Voltx EV Private Limited</span> is a 
                deep-tech engineering and manufacturing firm dedicated to advancing electric propulsion.
              </p>
              <p>
                We have evolved from producing premium electric mobility solutions to engineering the very core of modern movement: 
                <span className="text-white border-b border-cyan-400/50"> high-performance BLDC motors and ruggedized drivetrains</span>.
              </p>
              <p>
                Our engineering philosophy is built on durability and precision. Whether it's a custom motor for a material handling system 
                or the drivetrain for an agri-rover, we design for the harshest environments.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 p-8 rounded-3xl bg-zinc-900/50 border border-white/10 backdrop-blur-sm overflow-hidden group">
              <img 
                src="/images/Engineering%20Excellence.jpg" 
                alt="Engineering Excellence - BLDC Motor"
                className="w-full h-auto rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                id="engineering-img"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none" />
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
