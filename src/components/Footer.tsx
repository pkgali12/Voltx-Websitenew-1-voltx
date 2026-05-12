import { Zap, Twitter, Instagram, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-zinc-500">Legal</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><Link to="/privacy-policy" className="hover:text-brand transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-brand transition-colors text-sm">Terms & Conditions</Link></li>
              <li><Link to="/cancellation-and-refund" className="hover:text-brand transition-colors text-sm">Cancellation & Refund</Link></li>
              <li><Link to="/shipping-and-delivery" className="hover:text-brand transition-colors text-sm">Shipping & Delivery</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 space-y-6">
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-600">
                © 2026 Voltx EV Private Limited. All Rights Reserved.
              </p>
              <p className="text-zinc-500 text-sm">
                GST: 29AAICV1554B1ZE
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-zinc-500 text-sm max-w-md md:ml-auto leading-relaxed">
                88/2 Seegahalli Village, Kadugodi Post, Ashram Road, Bengaluru 560067
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
