import { motion } from "motion/react";
import { Sparkles, Mail, MapPin, Phone } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Connect With Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight text-white">GET IN TOUCH.</h2>
          <p className="text-zinc-400 max-w-lg mx-auto">Have questions? Our specialists are ready to help you transition to clean energy.</p>
        </div>

        {/* Contact Info Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-[40px] p-10 md:p-14 border border-white/10 shadow-2xl backdrop-blur-md relative overflow-hidden"
        >
          {/* Accent glows */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand/10 blur-[80px] -z-10 pointer-events-none rounded-full" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand/5 blur-[60px] -z-10 pointer-events-none rounded-full" />

          <div className="grid md:grid-cols-3 gap-10">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-brand" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">Our Address</p>
                <p className="text-zinc-200 text-sm leading-relaxed">
                  88/2, Seegahalli Village,<br />
                  Kadugodi Post, Ashram Road,<br />
                  Bengaluru – 560067,<br />
                  Karnataka, India
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col items-center md:items-start text-center md:text-left gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-brand" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">Email Us</p>
                <a
                  href="mailto:praveen.gali@voltxev.com"
                  className="text-zinc-200 text-sm hover:text-brand transition-colors break-all"
                >
                  praveen.gali@voltxev.com
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col items-center md:items-start text-center md:text-left gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-brand" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">Call Us</p>
                <a
                  href="tel:+919110816846"
                  className="text-zinc-200 text-sm hover:text-brand transition-colors"
                >
                  +91 91108 16846
                </a>
                <p className="text-zinc-600 text-xs mt-1">Mon – Sat · 9 AM – 6 PM IST</p>
              </div>
            </motion.div>
          </div>

          {/* Divider & GST */}
          <div className="mt-10 pt-8 border-t border-white/5 text-center">
            <p className="text-xs text-zinc-600">
              GST: <span className="text-zinc-500">29AAICV1554B1ZE</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
