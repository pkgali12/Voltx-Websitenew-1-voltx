import { motion } from "motion/react";
import { Battery, Zap, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const models = [
  {
    id: "ebikes",
    name: "Rugged Electric Bicycles",
    type: "Personal Mobility",
    desc: "Qube-inspired industrial strength for the urban explorer.",
    image: "https://images.unsplash.com/photo-1571068316344-75ad7671289c?auto=format&fit=crop&q=80&w=2070",
    link: "/mobility",
    range: "120 mi",
    speed: "28 mph"
  },
  {
    id: "trolleys",
    name: "Battery Operated Trolleys",
    type: "Intra-logistics",
    desc: "Heavy-duty electric transport for demanding work environments.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8669e46a75?auto=format&fit=crop&q=80&w=2070",
    link: "#",
    range: "12 hrs",
    speed: "5 mph"
  },
  {
    id: "rovers",
    name: "Autonomous AI Rovers",
    type: "Innovation & R&D",
    desc: "Remote controlled and self-navigating robotics for special ops.",
    image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=2070",
    link: "/innovation-and-rd",
    range: "Full AI",
    speed: "L5 Autonomy"
  }
];

export default function ProductGrid() {
  return (
    <section id="models" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] text-zinc-500 uppercase mb-4">Precision Machines</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">The Lineup.</h3>
          </div>
          <p className="text-zinc-400 max-w-sm">
            High-performance hardware designed for specific industrial and individual needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              <Link to={model.link} className="block flex-1 group">
                <div className="relative h-[450px] rounded-[32px] overflow-hidden border border-white/5 bg-zinc-900 mb-8">
                  <img 
                    src={model.image} 
                    alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.5] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60" />
                  
                  <div className="absolute top-6 left-6 inline-block px-4 py-1.5 rounded-full glass text-[10px] font-bold tracking-widest uppercase">
                    {model.type}
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-brand transition-colors">{model.name}</h3>
                    <p className="text-zinc-400 text-sm mb-6 line-clamp-2">{model.desc}</p>
                    
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-zinc-300">
                        <Battery className="w-4 h-4 text-brand" />
                        <span className="text-xs font-bold uppercase">{model.range}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-300">
                        <Zap className="w-4 h-4 text-brand" />
                        <span className="text-xs font-bold uppercase">{model.speed}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link 
                to={model.link}
                className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-brand transition-colors px-4"
              >
                Learn More <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
