import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  Zap,
  ArrowRight,
  Info,
  ShoppingBag,
  ChevronDown,
  Gauge,
  Cpu,
  Sparkles
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: "motors" | "bicycles" | "vehicles-indoor" | "vehicles-outdoor";
  categoryLabel: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  features: string[];
}

interface MotorDetails {
  id: string;
  name: string;
  class: string;
  tier: "entry" | "professional" | "industrial";
  driveType: string;
  voltages: string[];
  application: string;
  image: string;
  powerRange: string;
  torqueNm: number;
  torqueMax: number;
  efficiencyPct: number;
  extendedSpecs: { label: string; value: string }[];
  highlights: string[];
}

const motorsData: MotorDetails[] = [
  {
    id: "motor-250-350",
    name: "250W / 350W Hub Motor",
    class: "Light Commute & E-Bike Series",
    tier: "entry",
    driveType: "Geared Drive",
    voltages: ["24V", "36V", "48V"],
    application: "Electric Bicycles & Cargo E-Bikes",
    image: "/images/BLDC motors 250W.png",
    powerRange: "250 – 350W",
    torqueNm: 35,
    torqueMax: 38,
    efficiencyPct: 82,
    extendedSpecs: [
      { label: "Max Torque", value: "38 Nm" },
      { label: "No-Load RPM", value: "280 – 320 RPM" },
      { label: "Weight", value: "2.8 kg" },
      { label: "Peak Efficiency", value: "> 82%" },
      { label: "IP Rating", value: "IP65 Rated" },
      { label: "Brake Compatibility", value: "Disc & V-Brake" }
    ],
    highlights: [
      "Integrated speed sensor for precise controller feedback",
      "Reinforced Nylon planetary gears for long-term durability",
      "Extremely compact and lightweight profile for city e-bikes"
    ]
  },
  {
    id: "motor-750-1000",
    name: "750W / 1000W Utility Hub Motor",
    class: "Heavy Duty & Fleet Series",
    tier: "professional",
    driveType: "Direct Drive / High-Torque Geared",
    voltages: ["48V", "60V"],
    application: "Commercial Delivery E-Bikes & Logistics Trikes",
    image: "/images/motor750-rearscooter-chromefinish.png",
    powerRange: "750 – 1000W",
    torqueNm: 42,
    torqueMax: 60,
    efficiencyPct: 84,
    extendedSpecs: [
      { label: "Max Torque", value: "62 Nm" },
      { label: "No-Load RPM", value: "450 – 550 RPM" },
      { label: "Weight", value: "5.4 kg" },
      { label: "Peak Efficiency", value: "> 84%" },
      { label: "IP Rating", value: "IP67 Hermetically Sealed" },
      { label: "Brake Compatibility", value: "Standard disc rotor mount" }
    ],
    highlights: [
      "High thermal dissipation chassis for non-stop fleet usage",
      "Direct drive option enables robust regenerative braking",
      "IP67 hermetic seal engineered for monsoon road conditions"
    ]
  },
  {
    id: "motor-1500-2000",
    name: "1500W / 2000W BLDC Motor",
    class: "Industrial Propulsion Series",
    tier: "industrial",
    driveType: "Mid-Drive / High-Torque Hub",
    voltages: ["48V", "60V", "72V"],
    application: "Electric Motorcycles, Warehouse Tuggers & Agri-Rovers",
    image: "/images/Motor1500W-middrive.jpg",
    powerRange: "1500 – 2000W",
    torqueNm: 60,
    torqueMax: 60,
    efficiencyPct: 83,
    extendedSpecs: [
      { label: "Max Torque", value: "110 Nm (at coupling)" },
      { label: "No-Load RPM", value: "3,200 – 4,500 RPM" },
      { label: "Weight", value: "7.5 kg" },
      { label: "Peak Efficiency", value: "> 89%" },
      { label: "IP Rating", value: "IP67 Dust & Jet Waterproof" },
      { label: "Drive Link", value: "Transaxle / Chain sprocket" }
    ],
    highlights: [
      "Brushless architecture with high-density rare-earth magnets",
      "Perfect mid-drive balancing for industrial vehicles & rovers",
      "Active regenerative braking system support built-in"
    ]
  }
];

const TIER_CONFIG = {
  entry: {
    label: "Entry",
    gradient: "from-emerald-500/20 via-emerald-400/5 to-transparent",
    badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    accent: "#10b981",
    glow: "rgba(16,185,129,0.15)",
    barColor: "#10b981",
    dot: "bg-emerald-400"
  },
  professional: {
    label: "Professional",
    gradient: "from-brand/20 via-brand/5 to-transparent",
    badge: "bg-brand/15 text-brand border-brand/30",
    accent: "#38bdf8",
    glow: "rgba(56,189,248,0.15)",
    barColor: "#38bdf8",
    dot: "bg-brand"
  },
  industrial: {
    label: "Industrial",
    gradient: "from-orange-500/20 via-orange-400/5 to-transparent",
    badge: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    accent: "#f97316",
    glow: "rgba(249,115,22,0.15)",
    barColor: "#f97316",
    dot: "bg-orange-400"
  }
};

const productsData: Product[] = [
  {
    id: "hub-motor",
    name: "High Performance BLDC Hub Motors",
    category: "motors",
    categoryLabel: "BLDC Motors",
    description: "Engineered for high-efficiency electric mobility. Our brushless DC hub motors deliver peak torque, silent operations, and sustained performance, featuring advanced thermal management and rugged hermetic sealing for industrial and consumer EV platforms.",
    image: "/images/BLDC Motors All.png",
    specs: [
      { label: "Power Range", value: "250W - 2000W" },
      { label: "IP Rating", value: "IP67 Waterproof" },
      { label: "Peak Efficiency", value: "> 88%" },
      { label: "Max Torque", value: "Up to 45 Nm" }
    ],
    features: [
      "Rare-earth magnets for high power-to-weight ratio",
      "Robust housing with high dissipation cooling fins",
      "Optimized wire winding for thermal efficiency"
    ]
  },
  {
    id: "part-nylon-gears",
    name: "Nylon Planetary Gears",
    category: "motor-parts",
    categoryLabel: "Motor Parts",
    description: "High-grade nylon planetary gears for 250W/350W geared hub motors, ensuring quiet operation and smooth power delivery under continuous load.",
    image: "/images/Nylon-gears.jpg",
    specs: [
      { label: "Compatibility", value: "250W / 350W Hub Motors" },
      { label: "Material", value: "High-grade Engineering Nylon" },
      { label: "Function", value: "Planetary gear reduction" },
      { label: "Noise Level", value: "Ultra-quiet operation" }
    ],
    features: [
      "Self-lubricating nylon for reduced friction",
      "Wear-resistant under continuous torque cycles",
      "Drop-in replacement for OEM geared motors"
    ]
  },
  {
    id: "part-metal-gears",
    name: "Metal Planetary Gears",
    category: "motor-parts",
    categoryLabel: "Motor Parts",
    description: "Heavy-duty metal planetary gears designed for high-torque applications and increased longevity under extreme loads and demanding duty cycles.",
    image: "/images/Metal gears.jpg",
    specs: [
      { label: "Compatibility", value: "500W – 2000W Hub Motors" },
      { label: "Material", value: "Hardened alloy steel" },
      { label: "Function", value: "High-torque gear reduction" },
      { label: "Durability", value: "Extended service life" }
    ],
    features: [
      "Heat-treated steel for extreme torque resilience",
      "Precision-machined for minimal gear backlash",
      "Suitable for fleet, cargo, and industrial applications"
    ]
  },
  {
    id: "part-9pin-cable",
    name: "9-Pin BLDC Motor Cable",
    category: "motor-parts",
    categoryLabel: "Motor Parts",
    description: "Durable 9-pin waterproof motor extension cable featuring precision molded connectors for reliable phase and hall sensor signal transmission.",
    image: "/images/9pinMotorCable.jpg",
    specs: [
      { label: "Pins", value: "9-pin (3 phase + 6 hall)" },
      { label: "Rating", value: "IP65 Waterproof connector" },
      { label: "Cable Length", value: "Available in 1m / 2m" },
      { label: "Compatibility", value: "Universal BLDC hub motors" }
    ],
    features: [
      "Precision molded waterproof connector bodies",
      "Shielded cable for low signal interference",
      "Plug-and-play with standard controller ports"
    ]
  },
  {
    id: "part-sensor-plate",
    name: "Sensor Plate – 120°",
    category: "motor-parts",
    categoryLabel: "Motor Parts",
    description: "Precision hall sensor PCB plate for BLDC hub motors, providing accurate 120° rotor position feedback to the controller for smooth commutation.",
    image: "/images/sensor-plate ebike.jpg",
    specs: [
      { label: "Sensor Angle", value: "120° Hall spacing" },
      { label: "Output", value: "Digital hall signal" },
      { label: "Supply Voltage", value: "5V DC" },
      { label: "Compatibility", value: "250W – 1000W hub motors" }
    ],
    features: [
      "High-precision rotor position detection",
      "Compatible with sine-wave and square-wave controllers",
      "Direct OEM replacement for standard hub motors"
    ]
  },
  {
    id: "frontier-bike",
    name: "Frontier E-Bike (Consumer Mobility)",
    category: "bicycles",
    categoryLabel: "Electric Bicycles",
    description: "The ultimate city companion. Crafted with a premium lightweight aluminum alloy frame, high-capacity lockable battery, and responsive multi-level pedal assist systems for effortless urban exploration and smart commuting.",
    image: "/images/Frontier.png",
    specs: [
      { label: "Frame", value: "Grade 6061 Aluminum Alloy" },
      { label: "Battery", value: "10.4 Ah Hailong Li-ion" },
      { label: "Range", value: "Up to 70 km (Pedal Assist)" },
      { label: "Modes", value: "3-Level Pedal Assist + Throttle" }
    ],
    features: [
      "Integrated smart battery management system (BMS)",
      "Hydraulic front fork suspension for maximum comfort",
      "Dual mechanical disc brakes for high stopping power"
    ]
  },
  {
    id: "qube-bike",
    name: "Qube 26 E-Bike (Heavy-Duty)",
    category: "bicycles",
    categoryLabel: "Electric Bicycles",
    description: "Reinforced mild steel frame architecture, heavy-duty suspension, and multi-terrain puncture-resistant tires engineered specifically to conquer off-road trails and meet the rigorous demands of last-mile delivery fleets.",
    image: "/images/Qube26.png",
    specs: [
      { label: "Frame", value: "Reinforced High-Tensile Steel" },
      { label: "Suspension", value: "Front Dual-Damper Fork" },
      { label: "Tires", value: "26\" x 2.10\" All-Terrain" },
      { label: "Load Capacity", value: "Up to 130 kg payload" }
    ],
    features: [
      "Rugged structural layout designed for high utility",
      "Excellent shock absorption and durable wheelsets",
      "Enhanced rear rack compatibility for cargo delivery"
    ]
  },
  {
    id: "retrofit-kit",
    name: "BLDC Bicycle Retrofit Conversion Kits",
    category: "conversion-kits",
    categoryLabel: "EV Conversion Kits",
    description: "Everything you need to convert your standard multi-gear or single-speed bicycle into a high-performance electric commuter. Includes pre-laced hub motor wheel, battery, controller, throttle, and sensor system.",
    image: "/images/ebicycle-kit.jpg",
    specs: [
      { label: "Motor Type", value: "36V 250W Rear Hub Motor" },
      { label: "Installation", value: "Under 2 hours setup" },
      { label: "Wheel Sizes", value: "26\" / 27.5\" / 29\" options" },
      { label: "Kit Inclusions", value: "Motor, Battery, LCD, Throttle, PAS" }
    ],
    features: [
      "Waterproof connectors and wiring loom",
      "Intelligent torque/cadence sensor compatibility",
      "Universal fit for standard rear dropouts"
    ]
  },
  {
    id: "warehouse-trolley",
    name: "Heavy-Duty Warehouse Trolleys",
    category: "ev-loaders",
    categoryLabel: "EV Loaders & Motorised Trolleys",
    description: "Zero-emission, silent-operation material movement platforms engineered for heavy payload transfer across indoor industrial, warehouse, and factory floors. Features continuous run-time capacity and variable speed controls.",
    image: "/images/Battery Operated Trolleys.png",
    specs: [
      { label: "Payload Capacity", value: "500 kg - 2000 kg" },
      { label: "Battery Type", value: "Lithium Iron Phosphate (LFP)" },
      { label: "Run-time", value: "8 - 10 hours continuous" },
      { label: "Controls", value: "Ergonomic tiller / dual speed modes" }
    ],
    features: [
      "Zero indoor emission, ideal for closed warehouses",
      "Electromagnetic safety braking system",
      "Extremely small turning radius for tight aisleways"
    ]
  },
  {
    id: "transfer-platform",
    name: "Indoor Industrial Transfer Platforms",
    category: "ev-loaders",
    categoryLabel: "EV Loaders & Motorised Trolleys",
    description: "Robust battery-operated material transfer platforms designed to transport massive mechanical parts, components, and assembly units smoothly across indoor manufacturing bays and production halls.",
    image: "/images/transfer-trolley.jpg",
    specs: [
      { label: "Payload Capacity", value: "1 Ton - 5 Tons" },
      { label: "Deck Type", value: "Anti-skid structural steel plate" },
      { label: "Drive System", value: "Heavy-duty electric drive axle" },
      { label: "Operation", value: "Pendant / Wireless Remote control" }
    ],
    features: [
      "Ultra-low deck profile for easy fork/crane loading",
      "Integrated audible alarm and LED warning lights",
      "Highly durable PU wheels that protect concrete floors"
    ]
  },
  {
    id: "eloader",
    name: "Voltx e-Loaders (1000 KGS Series)",
    category: "ev-loaders",
    categoryLabel: "EV Loaders & Motorised Trolleys",
    description: "Expand your logistics capability beyond factory walls. Our premium, high-utilization transfer platforms are custom-engineered for Building-to-Building cargo transit within expansive campuses, handling rough and uneven surfaces.",
    image: "/images/eloaders.png",
    specs: [
      { label: "Payload Rating", value: "1000 kg / 1 Ton" },
      { label: "Drive Axle", value: "Heavy-duty rear transaxle" },
      { label: "Chassis", value: "Sealed ruggedized structural steel" },
      { label: "Suspension", value: "Multi-leaf heavy springs" }
    ],
    features: [
      "All-weather sealed electrical and structural systems",
      "High ground clearance for outdoor inter-facility gravel/slopes",
      "High-torque gear reduction for ascending ramps under load"
    ]
  },
  {
    id: "agribot",
    name: "Remote Controlled Agribot Sprayer",
    category: "bots",
    categoryLabel: "BOTs",
    description: "Advanced semi-autonomous agricultural rover featuring specialized Physical AI drivetrain navigation, four-wheel drive, liquid tank system, and telescopic boom spraying nozzles. Built for durability in harsh environments.",
    image: "/images/Remote Controlled BOT.jpg",
    specs: [
      { label: "Drive System", value: "High-torque independent 4WD" },
      { label: "Guidance", value: "Semi-autonomous / Remote control" },
      { label: "Task Module", value: "Pesticide & Fertilizer spraying boom" },
      { label: "Obstacle Tech", value: "Physical AI sensor fusion suite" }
    ],
    features: [
      "Telescopic spraying boom with anti-clogging nozzles",
      "Heavy-duty deep-tread tires for mud and uneven fields",
      "Robust dustproof and splashproof battery container"
    ]
  }
];

type FilterType = "all" | "motors" | "motor-parts" | "bicycles" | "conversion-kits" | "ev-accessories" | "ev-loaders" | "bots";

function MotorTile({ motor, onInquire }: { motor: MotorDetails; onInquire: (name: string) => void }) {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"specs" | "highlights">("specs");
  const cfg = TIER_CONFIG[motor.tier];

  const torquePct = Math.round((motor.torqueNm / motor.torqueMax) * 100);
  const effPct = motor.efficiencyPct;

  return (
    <motion.div
      layout
      className="relative flex flex-col rounded-[28px] overflow-hidden border border-white/8 bg-zinc-950 shadow-2xl group"
      style={{ boxShadow: expanded ? `0 0 40px ${cfg.glow}` : "none" }}
      transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
    >
      <div className={`h-1 w-full bg-gradient-to-r ${cfg.gradient} opacity-80`} />

      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${cfg.badge}`}>
            {cfg.label} Series
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-white/5 text-zinc-400 text-[10px] font-semibold uppercase tracking-wide border border-white/5">
            {motor.driveType}
          </span>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-white flex items-center justify-center aspect-[4/3]">
          <img
            src={motor.image}
            alt={motor.name}
            className="w-full h-full object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          />
          <div
            className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl text-[11px] font-bold flex items-center gap-1.5"
            style={{ background: cfg.accent + "22", color: cfg.accent, border: `1px solid ${cfg.accent}44` }}
          >
            <Zap className="w-3 h-3" />
            {motor.powerRange}
          </div>
        </div>

        <div>
          <p className="text-[10px] uppercase font-bold tracking-widest mb-1" style={{ color: cfg.accent }}>
            {motor.class}
          </p>
          <h4 className="text-lg font-display font-bold text-white uppercase leading-tight">
            {motor.name}
          </h4>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-zinc-900/60 rounded-xl p-3 border border-white/5">
            <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold mb-2">Voltage</p>
            <div className="flex flex-wrap gap-1">
              {motor.voltages.map(v => (
                <span key={v} className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/5 text-zinc-300 border border-white/8">
                  {v}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-zinc-900/60 rounded-xl p-3 border border-white/5">
            <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Application</p>
            <p className="text-[11px] text-zinc-300 font-semibold leading-snug">{motor.application}</p>
          </div>
        </div>

        <div className="space-y-2.5">
          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-zinc-500 font-semibold flex items-center gap-1"><Gauge className="w-3 h-3" /> Torque</span>
              <span className="text-zinc-300 font-bold">{motor.torqueNm} Nm</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: cfg.barColor }}
                initial={{ width: 0 }}
                animate={{ width: `${torquePct}%` }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-zinc-500 font-semibold flex items-center gap-1"><Sparkles className="w-3 h-3" /> Efficiency</span>
              <span className="text-zinc-300 font-bold">{effPct}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: cfg.barColor }}
                initial={{ width: 0 }}
                animate={{ width: `${effPct}%` }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>

        <button
          id={`motor-details-toggle-${motor.id}`}
          onClick={() => setExpanded(prev => !prev)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-300 text-xs font-bold uppercase tracking-wider"
          style={
            expanded
              ? { background: cfg.accent + "18", borderColor: cfg.accent + "55", color: cfg.accent }
              : { background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)", color: "#a1a1aa" }
          }
        >
          <span className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" />
            {expanded ? "Hide Technical Details" : "View Technical Details"}
          </span>
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="border-t mx-6 mb-1"
              style={{ borderColor: cfg.accent + "22" }}
            />

            <div className="px-6 pt-4 pb-2 flex gap-2">
              {(["specs", "highlights"] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="flex-1 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all duration-200"
                  style={
                    activeTab === tab
                      ? { background: cfg.accent + "25", color: cfg.accent, border: `1px solid ${cfg.accent}44` }
                      : { background: "rgba(255,255,255,0.03)", color: "#71717a", border: "1px solid rgba(255,255,255,0.06)" }
                  }
                >
                  {tab === "specs" ? "Specifications" : "Highlights"}
                </button>
              ))}
            </div>

            <div className="px-6 pb-6 pt-2">
              <AnimatePresence mode="wait">
                {activeTab === "specs" ? (
                  <motion.div
                    key="specs"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-2 gap-2"
                  >
                    {motor.extendedSpecs.map((spec, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl border border-white/5 bg-zinc-900/40"
                      >
                        <p className="text-[9px] text-zinc-500 uppercase tracking-wider font-bold mb-1">{spec.label}</p>
                        <p className="text-[12px] text-zinc-200 font-bold leading-snug">{spec.value}</p>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="highlights"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    {motor.highlights.map((h, i) => (
                      <div key={i} className="flex gap-3 p-3 rounded-xl bg-zinc-900/40 border border-white/5">
                        <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black" style={{ background: cfg.accent + "22", color: cfg.accent }}>
                          {i + 1}
                        </span>
                        <p className="text-[12px] text-zinc-300 leading-snug">{h}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="px-6 pb-6 mt-auto">
        <button
          onClick={() => onInquire(motor.name)}
          className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 border"
          style={{
            background: "transparent",
            borderColor: cfg.accent + "44",
            color: cfg.accent
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = cfg.accent;
            (e.currentTarget as HTMLButtonElement).style.color = "#09090b";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            (e.currentTarget as HTMLButtonElement).style.color = cfg.accent;
          }}
        >
          Inquire This Model
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const navigate = useNavigate();

  const filteredProducts = activeFilter === "all"
    ? productsData
    : productsData.filter(p => p.category === activeFilter);

  const handleInquiry = (productName: string) => {
    navigate("/", { state: { scrollToContact: true, prefillProduct: productName } });
  };

  const categories: { value: FilterType; label: string }[] = [
    { value: "all", label: "All Products" },
    { value: "motors", label: "BLDC Motors" },
    { value: "motor-parts", label: "Motor Parts" },
    { value: "bicycles", label: "Electric Bicycles" },
    { value: "conversion-kits", label: "EV Conversion Kits" },
    { value: "ev-accessories", label: "EV Accessories" },
    { value: "ev-loaders", label: "EV Loaders & Motorised Trolleys" },
    { value: "bots", label: "BOTs" }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-36 pb-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-brand/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand text-xs font-bold tracking-widest uppercase mb-6"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Product Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight uppercase"
          >
            Voltx EV <span className="text-brand shadow-brand drop-shadow-[0_0_15px_rgba(56,189,248,0.3)] italic">Products</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg md:text-xl leading-relaxed"
          >
            Explore our state-of-the-art electric drivetrains, high-performance clean-energy e-bikes, and zero-emission industrial logistics equipment.
          </motion.p>
        </div>

        <div className="sticky top-24 z-40 mb-16 py-4 flex justify-center bg-zinc-950/70 backdrop-blur-md border border-white/5 rounded-3xl max-w-fit mx-auto px-4 shadow-xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeFilter === cat.value
                  ? "bg-brand text-zinc-950 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid lg:grid-cols-1 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => {
              if (product.id === "hub-motor") {
                return (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="col-span-12"
                  >
                    <div className="border border-white/10 rounded-[40px] p-8 md:p-12 bg-zinc-900/10 backdrop-blur-md relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] -z-10 pointer-events-none rounded-full" />

                      <div className="mb-10 text-center md:text-left">
                        <span className="px-4 py-1.5 rounded-full bg-zinc-900 text-white text-[10px] uppercase font-bold tracking-widest border border-white/10">
                          {product.categoryLabel}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-6 mb-4 uppercase">
                          Our Custom BLDC Motors Range
                        </h2>
                        <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
                          {product.description}
                        </p>

                        <div className="flex flex-wrap gap-3 mt-6">
                          {(Object.entries(TIER_CONFIG) as [keyof typeof TIER_CONFIG, typeof TIER_CONFIG[keyof typeof TIER_CONFIG]][]).map(([key, val]) => (
                            <span key={key} className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${val.badge}`}>
                              <span className={`w-2 h-2 rounded-full ${val.dot}`} />
                              {val.label}
                            </span>
                          ))}
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                          {motorsData.map((motor) => (
                            <MotorTile key={motor.id} motor={motor} onInquire={handleInquiry} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="glass border border-white/10 rounded-[40px] overflow-hidden hover:border-brand/30 transition-all duration-500 shadow-2xl relative group grid md:grid-cols-12 gap-0"
                >
                  {/* Product Image Area */}
                  <div className="md:col-span-5 bg-white relative flex items-center justify-center p-8 overflow-hidden min-h-[300px] md:min-h-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain max-h-[350px] group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-zinc-900 text-white text-[10px] uppercase font-bold tracking-widest border border-white/10">
                      {product.categoryLabel}
                    </span>
                  </div>

                  {/* Product Text Area */}
                  <div className="md:col-span-7 p-10 md:p-14 flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 uppercase tracking-tight group-hover:text-brand transition-colors leading-tight">
                        {product.name}
                      </h2>

                      {/* Description */}
                      <p className="text-zinc-400 text-base leading-relaxed mb-8">
                        {product.description}
                      </p>

                      {/* Specs Grid */}
                      <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        {product.specs.map((spec, i) => (
                          <div key={i} className="flex flex-col p-4 rounded-2xl bg-zinc-900/40 border border-white/5">
                            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">
                              {spec.label}
                            </span>
                            <span className="text-zinc-200 font-semibold text-sm">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Features List */}
                      <div className="mb-8">
                        <h4 className="text-xs uppercase font-bold tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
                          <Info className="w-4 h-4 text-brand" />
                          Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {product.features.map((feat, i) => (
                            <li key={i} className="flex items-center gap-3 text-zinc-400 text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex flex-wrap gap-4 items-center">
                      <button
                        onClick={() => handleInquiry(product.name)}
                        className="bg-brand hover:brightness-110 text-zinc-950 px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all text-sm shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                      >
                        Request Technical Quotation
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
