import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Download, Globe } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const location = useLocation();
  const navigate = useNavigate();

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिंदी" },
    { code: "bn", label: "বাংলা" },
    { code: "te", label: "తెలుగు" },
    { code: "mr", label: "मराठी" },
    { code: "ta", label: "தமிழ்" },
    { code: "gu", label: "ગુજરાતી" },
    { code: "kn", label: "ಕನ್ನಡ" },
    { code: "ml", label: "മലയാളം" }
  ];

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    }
  };

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
          
          {/* Language Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              <Globe className="w-4 h-4 mr-1" />
              {languages.find(l => l.code === currentLang)?.label} <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 bg-zinc-900 border border-white/10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50 overflow-hidden">
              <div className="flex flex-col py-2">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`text-left px-4 py-2 text-sm transition-colors ${currentLang === lang.code ? 'bg-brand/20 text-brand font-bold' : 'text-zinc-300 hover:bg-white/5 hover:text-white'}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Download Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              Download <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-zinc-900 border border-white/10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
              <div className="p-2">
                <a 
                  href="/Voltx_Product_Catalog.pdf" 
                  download 
                  className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4 text-brand" />
                  Product Catalog
                </a>
              </div>
            </div>
          </div>

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
        <div className="absolute top-20 left-6 right-6 bg-zinc-900/95 backdrop-blur-xl rounded-2xl p-8 lg:hidden flex flex-col gap-6 border border-white/5 shadow-2xl overflow-y-auto max-h-[80vh]">
          <Link to="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Products</Link>
          
          {/* Mobile Language Selector */}
          <div className="flex flex-col gap-4 py-2 border-y border-white/10">
            <span className="text-sm font-bold text-white/50 uppercase tracking-wider flex items-center gap-2">
              <Globe className="w-4 h-4" /> Select Language
            </span>
            <div className="grid grid-cols-2 gap-2">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => {
                    handleLanguageChange(lang.code);
                    setIsOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${currentLang === lang.code ? 'bg-brand/20 text-brand font-bold' : 'bg-white/5 text-zinc-300 hover:bg-white/10'}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 py-2 border-b border-white/10">
            <span className="text-sm font-bold text-white/50 uppercase tracking-wider">Downloads</span>
            <a 
              href="/Voltx_Product_Catalog.pdf" 
              download 
              className="text-lg font-medium text-zinc-300 flex items-center gap-3"
              onClick={() => setIsOpen(false)}
            >
              <Download className="w-5 h-5 text-brand" />
              Product Catalog
            </a>
          </div>

          <Link to="#contact" className="text-lg font-medium" onClick={handleContactClick}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
