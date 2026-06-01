import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Battery, Shield, Zap, ChevronRight, Settings } from "lucide-react";

export default function MobilityPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-6 mb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold tracking-tight text-white mb-8"
          >
            MOBILITY <span className="text-brand shadow-brand drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">REDEFINED</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          >
            From the core of motion to the last mile of delivery. Discover our integrated ecosystem of motors, consumer products, and commercial platforms.
          </motion.p>
        </div>
      </section>

      {/* BLDC Motors Section */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto bg-zinc-900/40 border border-white/5 rounded-[40px] p-8 md:p-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight italic"
              >
                High Performance <span className="text-brand italic">BLDC EV Motors</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-zinc-400 leading-relaxed mb-12"
              >
                Engineered for high-efficiency electric mobility. Our brushless DC motors deliver peak torque and sustained performance, featuring advanced thermal management and rugged construction for industrial and consumer EV applications.
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-zinc-950 border border-white/5">
                  <h4 className="text-brand font-bold mb-2">High Energy Density</h4>
                  <p className="text-sm text-zinc-400">Rare-earth magnets provide maximum power-to-weight ratio.</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-950 border border-white/5">
                  <h4 className="text-brand font-bold mb-2">IP67 Rated</h4>
                  <p className="text-sm text-zinc-400">Fully sealed architecture for all-weather reliability.</p>
                </div>
              </div>
            </div>

            {/* Infographic Area */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 text-zinc-900"
            >
              <h3 className="text-lg font-bold uppercase tracking-wider mb-8 text-center border-b border-zinc-200 pb-4">
                HUB MOTOR POWER CLASSES & APPLICATIONS
              </h3>
              
              <div className="flex justify-center items-center">
                <img 
                  src="/images/BLDC Motors All.png" 
                  alt="Hub Motor Power Classes & Applications" 
                  className="w-full h-auto object-contain rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Motor Spares, Accessories and Kits Section */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 bg-white rounded-3xl p-8 text-zinc-900 border border-zinc-200 shadow-xl"
          >
            <div className="flex justify-center items-center">
              <img 
                src="/images/Motor%20Parts%20and%20Accessories.png" 
                alt="Motor Parts and Accessories" 
                className="w-full h-auto object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight"
            >
              Motor Spares <span className="text-brand italic">Accessories and Kits</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-400 mb-12 leading-relaxed"
            >
              A complete ecosystem of high-quality components to support your EV powertrain. From intelligent controllers to ergonomic throttles and heavy-duty wiring harnesses, we provide the essential parts for peak system integration.
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-brand/30 transition-colors">
                <h4 className="text-brand font-bold mb-3 flex items-center gap-2 text-xl">
                  Controllers & Displays
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">Sine-wave controllers and intuitive LCD dashboard units.</p>
              </div>
              <div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-brand/30 transition-colors">
                <h4 className="text-brand font-bold mb-3 flex items-center gap-2 text-xl">
                  Throttles & Wiring
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">Ergonomic controls and plug-and-play wiring harnesses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The eBike Series Section */}
      <section className="px-6 mb-24 py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: -0 }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
            >
              The eBike Series: <span className="text-brand italic">Consumer Mobility</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "Frontier",
                desc: "The ultimate city companion. Lightweight aluminum frame, 10.4ah Hailong battery, and 3 level pedal assist for effortless urban exploration.",
                image: "/images/Frontier.png"
              },
              {
                name: "Qube 26",
                desc: "Reinforced mild steel architecture with heavy-duty suspension and all-terrain tires to conquer any trail.",
                image: "/images/Qube26.png"
              }
            ].map((bike, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-[32px] overflow-hidden mb-8 aspect-[4/3] flex items-center justify-center p-12">
                  <img 
                    src={bike.image} 
                    alt={bike.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 mix-blend-multiply" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-8">
                   <h3 className="text-3xl font-display font-bold text-white mb-4 italic">{bike.name}</h3>
                   <p className="text-zinc-400 leading-relaxed mb-8">{bike.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial B2B Solutions Section */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Commercial <span className="text-brand italic text-gradient">B2B BLDC Motor drives</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 mb-16 max-w-4xl mx-auto"
          >
            Heavy-duty mobility platforms designed specifically for continuous commercial operations and fleet deployments.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
             {[
              {
                title: "Ruggedized Drivetrains",
                items: [
                  "Commercial-Grade Motors with superior heat dissipation.",
                  "Wear-resistant nylon planetary gears for torque spikes."
                ]
              },
              {
                title: "Custom Campus E-Bikes",
                items: [
                  "Speed controllers tuned for safety regulations.",
                  "Puncture-resistant tires and reinforced kickstands."
                ]
              },
              {
                title: "Conversion Kits",
                items: [
                  "36V 250W BLDC Motors with intelligent controllers.",
                  "Plug-and-play installation in few hours."
                ]
              }
             ].map((kit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900 shadow-2xl p-10 rounded-[40px] border border-white/5 text-left"
              >
                <h3 className="text-2xl font-display font-bold text-white mb-6">{kit.title}</h3>
                <ul className="space-y-6">
                   {kit.items.map((item, index) => (
                    <li key={index} className="flex gap-4 text-zinc-400 text-sm leading-relaxed">
                      <ChevronRight className="w-5 h-5 text-brand shrink-0" />
                      <span>{item}</span>
                    </li>
                   ))}
                </ul>
              </motion.div>
             ))}
          </div>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate("/", { state: { scrollToContact: true } })}
            className="bg-brand hover:brightness-110 text-zinc-950 px-12 py-5 rounded-full font-bold flex items-center gap-2 mx-auto transition-all text-lg shadow-[0_0_30px_rgba(56,189,248,0.3)] mb-12"
          >
            Discuss a Pilot Program
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
