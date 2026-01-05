import { ArrowUpRight, Zap, Sun } from "lucide-react";
import { motion } from "motion/react";
import streetLightImg from "../assets/street-light.png";

const mainProduct = {
  id: "OPP-MAX-200",
  name: "Vial Solar Max 200W",
  tagline: "Autonomía 3 días",
  price: "Cotizar",
  image: streetLightImg.src,
  features: ["200W", "IP67", "LiFePO4"],
};

const gridProducts = [
  {
    id: "01",
    name: "Urban Eco 100W",
    category: "Vial",
    image: streetLightImg.src,
    specs: "12000lm"
  },
  {
    id: "02",
    name: "Garden Pro 50W",
    category: "Jardín",
    image: streetLightImg.src,
    specs: "6000lm"
  },
  {
    id: "03",
    name: "Reflector 300W",
    category: "Industrial",
    image: streetLightImg.src,
    specs: "35000lm"
  },
  {
    id: "04",
    name: "Wall Pack 40W",
    category: "Muro",
    image: streetLightImg.src,
    specs: "4800lm"
  }
];

export function StarProducts() {
  return (
    <section className="py-36 bg-white text-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Compact Header */}
        <div className="flex flex-row justify-between items-end mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#FF8351] mb-1 font-bold tracking-widest uppercase text-xs">
              <Zap size={14} />
              <span>Top Performance</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Productos <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900">Estrella</span>
            </h2>
          </div>

          <button className="hidden md:flex px-4 py-2 rounded-full border border-zinc-200 hover:border-[#FF8351] hover:text-[#FF8351] hover:bg-orange-50 transition-all font-bold text-xs uppercase tracking-wider items-center gap-2">
            Ver Catálogo
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Grid Layout - Optimized Height for Single Screen View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[500px]">

          {/* Main Feature Card (Left - Spans 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative rounded-[2rem] bg-zinc-100 overflow-hidden group h-[400px] lg:h-full"
          >
            {/* Background Decor */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

            {/* Product Image - Maximized Size */}
            <div className="absolute inset-0 flex items-center justify-center p-0">
              <motion.img
                src={mainProduct.image}
                alt={mainProduct.name}
                className="w-[110%] h-[110%] object-contain drop-shadow-2xl z-10 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Top Tag */}
            <div className="absolute top-4 left-4 z-20">
              <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FF8351] rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Más Vendido</span>
              </div>
            </div>

            {/* Bottom Info Overlay - Compact */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 z-20 flex justify-between items-center group-hover:translate-y-0 transition-all">
              <div>
                <h3 className="text-xl font-black uppercase leading-none mb-1">{mainProduct.name}</h3>
                <div className="flex gap-2">
                  {mainProduct.features.map((feat, i) => (
                    <span key={i} className="text-[10px] font-bold text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
              <button className="bg-[#FF8351] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/20 hover:scale-110 transition-transform">
                <ArrowUpRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Grid Products (Right - Spans 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-full">
            {gridProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-[1.5rem] bg-zinc-100 overflow-hidden h-[200px] lg:h-auto flex flex-col"
              >
                {/* Image Area - Maximized */}
                <div className="absolute inset-0 p-0 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[100%] h-[100%] object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2"
                  />
                </div>

                {/* Compact Dark Bar Overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#111] text-white py-2 px-3 rounded-xl flex items-center justify-between shadow-xl group-hover:bg-[#FF8351] transition-colors duration-300 z-20">
                  <div className="truncate pr-2">
                    <h4 className="font-bold uppercase text-xs leading-tight truncate">{product.name}</h4>
                    <div className="flex items-center gap-1 text-[10px] text-white/60 uppercase tracking-wider group-hover:text-white/90">
                      <span>{product.category}</span>
                      <span>•</span>
                      <span>{product.specs}</span>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center group-hover:bg-white/20">
                    <Sun size={12} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
