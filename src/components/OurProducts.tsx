import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import streetLightImg from "../assets/street-light.png";
import ufoLightImg from "../assets/ufo-light.png";

// Types
type Product = {
  id: number;
  brand: string;
  name: string;
  category: "solares" | "viales";
  inStock: boolean;
  price?: string; // Optional as we might not show it
  image: string;
  description: string;
};

const products: Product[] = [
  // Solares
  {
    id: 1,
    brand: "Forlighting",
    name: "Luminaria Solar All in one Eco Forled 100W",
    category: "solares",
    inStock: true,
    image: streetLightImg.src,
    description: "Eficiencia energética superior para espacios exteriores.",
  },
  {
    id: 2,
    brand: "Tecnolite",
    name: "Mini Poste Solar Sonne II 15W Sensor",
    category: "solares",
    inStock: true,
    image: streetLightImg.src, // Using same image as placeholder
    description: "Sensor de movimiento integrado y luz blanca ajustable.",
  },
  {
    id: 3,
    brand: "Forlighting",
    name: "Luminaria Solar LED Forlighting 150W",
    category: "solares",
    inStock: true,
    image: streetLightImg.src,
    description: "Alto flujo luminoso para grandes áreas abiertas.",
  },
  {
    id: 4,
    brand: "APM Alumbrado",
    name: "Luminaria Solar All in one LED ASL-008",
    category: "solares",
    inStock: true,
    image: streetLightImg.src,
    description: "Diseño compacto con batería de larga duración.",
  },
  // Viales (using UFO light as placeholder for different type)
  {
    id: 5,
    brand: "Forlighting",
    name: "Luminaria Vial LED Cobra 100W",
    category: "viales",
    inStock: true,
    image: ufoLightImg.src,
    description: "Iluminación vial de alto rendimiento.",
  },
  {
    id: 6,
    brand: "Tecnolite",
    name: "Luminaria Suburbana LED 65W",
    category: "viales",
    inStock: true,
    image: ufoLightImg.src,
    description: "Ideal para fraccionamientos y parques.",
  },
  {
    id: 7,
    brand: "Philips",
    name: "RoadFocus LED Cobra Head",
    category: "viales",
    inStock: true,
    image: ufoLightImg.src,
    description: "Tecnología confiable para carreteras principales.",
  },
  {
    id: 8,
    brand: "Forlighting",
    name: "Luminaria Vial Pro 150W",
    category: "viales",
    inStock: true,
    image: ufoLightImg.src,
    description: "Máxima visibilidad y seguridad en vías rápidas.",
  },
];

export function OurProducts() {
  const [activeCategory, setActiveCategory] = useState<"solares" | "viales">("solares");

  const filteredProducts = products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <h2 className="text-4xl font-black tracking-tight text-black leading-none">
            Nuestros Productos
          </h2>

          {/* Toggle Controls */}
          <div className="flex items-center bg-zinc-100 p-1 rounded-none">
            <button
              onClick={() => setActiveCategory("solares")}
              className={`px-6 py-2 text-sm font-bold transition-all rounded-none ${activeCategory === "solares"
                ? "bg-[#FF8351] text-white shadow-sm"
                : "bg-transparent text-zinc-500 hover:text-zinc-900"
                }`}
            >
              Solares
            </button>
            <button
              onClick={() => setActiveCategory("viales")}
              className={`px-6 py-2 text-sm font-bold transition-all rounded-none ${activeCategory === "viales"
                ? "bg-[#FF8351] text-white shadow-sm"
                : "bg-transparent text-zinc-500 hover:text-zinc-900"
                }`}
            >
              Viales
            </button>
          </div>
        </div>

        {/* Products Grid - Row of 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col bg-white"
            >
              {/* Image Container - White background, sharp corners */}
              <div className="relative aspect-[4/5] bg-white border border-zinc-100 flex items-end justify-center overflow-hidden mb-4 transition-colors group-hover:border-zinc-200">

                {/* "En Existencia" Badge */}
                {product.inStock && (
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-zinc-100 px-2 py-1">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-wide">
                      En existencia
                    </span>
                  </div>
                )}

                {/* Product Image - Large, anchored bottom, cut off */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[140%] h-[auto] max-h-[90%] object-contain object-bottom transition-transform duration-700 group-hover:scale-105 mb-0"
                />

                {/* Hover Overlay - Minimal "View" action */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-3 font-bold text-xs uppercase tracking-widest shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Ver Producto
                  </button>
                </div>
              </div>

              {/* Product Info - Minimal, Corner text style from ProductShowcase */}
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                  {product.brand}
                </p>
                <h3 className="text-xs font-medium text-zinc-900 leading-snug min-h-[2.5em]">
                  {product.name}
                </h3>

                {/* Price would go here but omitted as per strict instructions */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
