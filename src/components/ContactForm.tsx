import { motion, AnimatePresence } from "motion/react";
import { Send, Loader2, CheckCircle2, AlertCircle, Info, Sparkles, Mail } from "lucide-react";
import { useState, FormEvent, ChangeEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    fleetSize: "1-10",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const isKeyConfigured = accessKey && accessKey !== "YOUR_WEB3FORMS_ACCESS_KEY_HERE" && accessKey.trim() !== "";

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: isKeyConfigured ? accessKey : "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: `Voltx EV Contact Request - ${formData.companyName}`,
          from_name: "Voltx EV",
          message: `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.companyName}
Fleet Size: ${formData.fleetSize}

Message:
${formData.message}`
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          companyName: "",
          fleetSize: "1-10",
          email: "",
          message: ""
        });
      } else {
        // If developer is using placeholder, mock successful submission but warn them in the UI
        if (!isKeyConfigured) {
          setTimeout(() => {
            setStatus("success");
            setFormData({
              firstName: "",
              lastName: "",
              companyName: "",
              fleetSize: "1-10",
              email: "",
              message: ""
            });
          }, 1200);
        } else {
          setStatus("error");
          setErrorMessage(data.message || "Failed to submit form. Please check your credentials.");
        }
      }
    } catch (err) {
      if (!isKeyConfigured) {
        setTimeout(() => {
          setStatus("success");
          setFormData({
            firstName: "",
            lastName: "",
            companyName: "",
            fleetSize: "1-10",
            email: "",
            message: ""
          });
        }, 1200);
      } else {
        setStatus("error");
        setStatus("error");
        setErrorMessage("Network error. Please try again later.");
      }
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-4xl mx-auto glass rounded-[40px] overflow-hidden p-8 md:p-16 relative z-10 border border-white/10 shadow-2xl backdrop-blur-md">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] -z-10 pointer-events-none" />
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Connect With Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight text-white">GET IN TOUCH.</h2>
          <p className="text-zinc-400 max-w-lg mx-auto">Have questions? Our specialists are ready to help you transition to clean energy.</p>
        </div>

        {/* Developer configuration helper banner if key is not configured */}
        {!isKeyConfigured && (
          <div className="mb-10 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex gap-3 items-start">
              <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-amber-300 block mb-0.5">⚡ Developer Mode (Simulated Send)</span>
                No Web3Forms access key detected in your <code className="bg-black/30 px-1.5 py-0.5 rounded text-amber-400 font-mono text-xs">.env</code> file. Submissions are simulated.
              </div>
            </div>
            <a 
              href="https://web3forms.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 px-4 py-2 rounded-xl transition-all border border-amber-500/30 shrink-0 self-end md:self-auto"
            >
              Get Free Key (5s)
            </a>
          </div>
        )}

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div 
              key="success-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-brand/20 text-brand rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand/10 border border-brand/30 animate-pulse">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-3 tracking-tight text-white">Message Received!</h3>
              <p className="text-zinc-400 max-w-md mx-auto mb-2">We have successfully received your inquiry and our engineering team will get back to you within 24 hours.</p>
              
              {!isKeyConfigured && (
                <p className="text-xs text-amber-400/80 bg-amber-500/5 border border-amber-500/10 rounded-xl py-2 px-4 max-w-sm mx-auto mt-4">
                  ℹ️ Web3Forms is not active yet. Configure `VITE_WEB3FORMS_ACCESS_KEY` to receive this email directly!
                </p>
              )}

              <button 
                onClick={() => setStatus("idle")}
                className="mt-8 text-brand font-bold hover:text-brand-light transition-all flex items-center gap-2 mx-auto border border-brand/20 bg-brand/5 px-6 py-2.5 rounded-full hover:bg-brand/10 hover:border-brand/30 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                Send another message
              </button>
            </motion.div>
          ) : status === "error" ? (
            <motion.div 
              key="error-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/10 border border-red-500/30">
                <AlertCircle className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-display font-bold mb-3 tracking-tight text-white">Failed to Send</h3>
              <p className="text-zinc-400 max-w-md mx-auto mb-6">{errorMessage || "An error occurred while submitting your message."}</p>
              <button 
                onClick={() => setStatus("idle")}
                className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 px-8 py-3.5 rounded-full font-bold transition-all mx-auto cursor-pointer"
              >
                Go Back & Retry
              </button>
            </motion.div>
          ) : (
            <motion.form 
              key="contact-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit} 
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-zinc-500 uppercase">First Name</label>
                <input 
                  required
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand focus:border-brand/30 outline-none transition-all placeholder:text-zinc-600 text-zinc-100"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Last Name</label>
                <input 
                  required
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand focus:border-brand/30 outline-none transition-all placeholder:text-zinc-600 text-zinc-100"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Company Name</label>
                <input 
                  required
                  type="text" 
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enterprise Inc." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand focus:border-brand/30 outline-none transition-all placeholder:text-zinc-600 text-zinc-100"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Fleet Size</label>
                <div className="relative">
                  <select 
                    name="fleetSize"
                    value={formData.fleetSize}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand focus:border-brand/30 outline-none transition-all appearance-none cursor-pointer text-zinc-100"
                  >
                    <option value="1-10" className="bg-zinc-900 text-zinc-100">1-10 Vehicles</option>
                    <option value="11-50" className="bg-zinc-900 text-zinc-100">11-50 Vehicles</option>
                    <option value="51+" className="bg-zinc-900 text-zinc-100">51+ Vehicles</option>
                    <option value="consumer" className="bg-zinc-900 text-zinc-100">Private Inquiry (B2C)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center text-zinc-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Email Address</label>
                <input 
                  required
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@enterprise.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand focus:border-brand/30 outline-none transition-all placeholder:text-zinc-600 text-zinc-100"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Message</label>
                <textarea 
                  required
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand focus:border-brand/30 outline-none transition-all resize-none placeholder:text-zinc-600 text-zinc-100"
                ></textarea>
              </div>
              <div className="md:col-span-2 mt-4 text-center">
                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="bg-brand hover:bg-brand-dark text-white px-12 py-5 rounded-full font-bold flex items-center gap-3 mx-auto transition-all shadow-xl shadow-brand/20 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      Sending Message...
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
