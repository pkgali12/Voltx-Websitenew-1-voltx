import { motion } from "motion/react";
import { Send } from "lucide-react";
import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto glass rounded-[40px] overflow-hidden p-8 md:p-16 relative">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] -z-10" />
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">GET IN TOUCH.</h2>
          <p className="text-zinc-400">Have questions? Our specialists are ready to help you transition to clean energy.</p>
        </div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 bg-brand/20 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-2">Message Sent!</h3>
            <p className="text-zinc-400">We'll get back to you within 24 hours.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-6 text-brand font-bold hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold tracking-widest text-zinc-500 uppercase">First Name</label>
              <input 
                required
                type="text" 
                placeholder="John" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold tracking-widest text-zinc-500 uppercase">Last Name</label>
              <input 
                required
                type="text" 
                placeholder="Doe" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold tracking-widest text-zinc-500 uppercase">Company Name</label>
              <input 
                required
                type="text" 
                placeholder="Enterprise Inc." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold tracking-widest text-zinc-500 uppercase">Fleet Size</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand outline-none transition-all appearance-none cursor-pointer">
                <option value="1-10">1-10 Vehicles</option>
                <option value="11-50">11-50 Vehicles</option>
                <option value="51+">51+ Vehicles</option>
                <option value="consumer">Private Inquiry (B2C)</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold tracking-widest text-zinc-500 uppercase">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="john@enterprise.com" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand outline-none transition-all"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold tracking-widest text-zinc-500 uppercase">Message</label>
              <textarea 
                required
                rows={4} 
                placeholder="How can we help you?"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand outline-none transition-all resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 mt-4 text-center">
              <button 
                type="submit" 
                className="bg-brand hover:bg-brand-dark text-white px-12 py-5 rounded-full font-bold flex items-center gap-3 mx-auto transition-all shadow-xl shadow-brand/20"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
