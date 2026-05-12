import { motion } from "motion/react";
import { Shield, Smartphone, Zap, MapPin } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap />,
      title: "Hyper-Charge",
      desc: "Add up to 200 miles of range in just 15 minutes at any Voltx Super Station."
    },
    {
      icon: <Shield />,
      title: "Biohazard Defense",
      desc: "HEPA filtration system removes 99.97% of particulate matter and gaseous pollutants."
    },
    {
      icon: <Smartphone />,
      title: "Full Autopilot",
      desc: "Hardware ready for fully self-driving capabilities through continuous over-the-air updates."
    },
    {
      icon: <MapPin />,
      title: "Global Network",
      desc: "Over 50,000 charging points worldwide, integrated seamlessly into your navigation."
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              BUILT FOR THE <br />
              <span className="text-brand">LONG HAUL.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-10">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-4">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden glass"
          >
            <img 
              src="https://images.unsplash.com/photo-1549411281-99bd850e0370?auto=format&fit=crop&q=80&w=2070" 
              alt="Interior Tech" 
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-zinc-950 via-transparent to-transparent">
              <h4 className="text-2xl font-display font-bold mb-4 italic text-brand">The Interior Experience.</h4>
              <p className="text-zinc-400 max-w-sm">
                A minimalist cabin designed around the driver. Featuring a 17-inch cinematic display and premium sustainable materials.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
