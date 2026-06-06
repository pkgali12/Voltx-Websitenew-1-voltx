import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollToContact: true } });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-14 h-14 flex items-center justify-center">
            <img src="/images/voltx-new.png" alt="Voltx EV Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
          <div className="flex items-center text-2xl font-bold tracking-tighter italic">
            <span className="text-white">VOLTX</span>
            <span className="text-brand ml-1">EV</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/products" className="hover:text-white transition-colors">Products</Link>
          <Link to="#contact" onClick={handleContactClick} className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-6 right-6 bg-zinc-900/95 backdrop-blur-xl rounded-2xl p-8 lg:hidden flex flex-col gap-6 border border-white/5">
          <Link to="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="#contact" className="text-lg font-medium" onClick={handleContactClick}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
