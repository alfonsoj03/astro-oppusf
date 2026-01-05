import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
  {
    id: 1,
    category: "Forlighting",
    name: "Luminaria Solar All in one Eco Forled 100W Forlighting",
    price: "8,338.95",
    inStock: true,
    image: "https://images.unsplash.com/photo-1723899550888-f2be8e4ea094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWQlMjBzdHJlZXQlMjBsaWdodHxlbnwxfHx8fDE3NjQ3Nzk3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    type: "solar"
  },
  {
    id: 2,
    category: "Tecnolite",
    name: "Mini Poste Solar Sonne II 15S01LED50CCN 15W Sensor de movimiento Luz blanca ajustable IP65 IK06",
    price: "2,369.00",
    inStock: true,
    image: "https://images.unsplash.com/photo-1558693836-83d8cf52c2ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwbGlnaHR8ZW58MXx8fHwxNzY0Nzc5NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    type: "solar"
  },
  {
    id: 3,
    category: "Forlighting",
    name: "Luminaria Solar Led Forlighting Forled 150W / All in one / Negro / 24,000 lm",
    price: "17,064.00",
    inStock: true,
    image: "https://images.unsplash.com/photo-1584259432824-3d124136ea4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbGVkJTIwbGlnaHR8ZW58MXx8fHwxNzY0Nzc5NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    type: "solar"
  },
  {
    id: 4,
    category: "Forlighting",
    name: "Luminaria Solar All in one Forled 100W Forlighting",
    price: "13,637.00",
    inStock: true,
    image: "https://images.unsplash.com/photo-1754245357826-8ed374024df5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbGlnaHRpbmclMjBmaXh0dXJlfGVufDF8fHx8MTc2NDc3OTc0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    type: "solar"
  },
  {
    id: 5,
    category: "APM",
    name: "Luminaria Solar All in one LED ASL-00B Airlite",
    price: "4,242.20",
    inStock: true,
    image: "https://images.unsplash.com/photo-1763098844800-641758570d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHJlZXQlMjBsYW1wfGVufDF8fHx8MTc2NDc3OTc0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    type: "vial"
  },
];

export function ProductCatalog() {
  const [activeFilter, setActiveFilter] = useState<"solar" | "vial">("solar");

  const filteredProducts = products.filter(product => product.type === activeFilter);

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        {/* Header with Title and Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white mb-6 md:mb-0"
          >
            Luminarias Solares y Viales
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-3"
          >
            <button
              onClick={() => setActiveFilter("solar")}
              className={`px-6 py-2.5 rounded-full transition-all ${
                activeFilter === "solar"
                  ? "bg-[#FF8351] text-white"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              Solares
            </button>
            <button
              onClick={() => setActiveFilter("vial")}
              className={`px-6 py-2.5 rounded-full transition-all ${
                activeFilter === "vial"
                  ? "bg-[#FF8351] text-white"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              Viales
            </button>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg overflow-hidden hover:border-[#FF8351]/50 transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="aspect-[4/3] bg-zinc-900/50 p-6 flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-3">
                {/* Category */}
                <p className="text-zinc-500 text-xs">
                  {product.category}
                </p>

                {/* Product Name */}
                <h3 className="text-white text-sm leading-tight line-clamp-3 min-h-[3.75rem]">
                  {product.name}
                </h3>

                {/* Stock Status */}
                {product.inStock && (
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span className="text-emerald-500 text-xs uppercase tracking-wide">
                      En existencia
                    </span>
                  </div>
                )}

                {/* Price */}
                <p className="text-white pt-1">
                  $ {product.price} MXN
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
