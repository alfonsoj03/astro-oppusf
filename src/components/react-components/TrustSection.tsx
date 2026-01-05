import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            {/* Small Label */}
            <p className="text-[#FF8351] tracking-[0.2em] uppercase text-sm mb-6">
              NUESTRO COMPROMISO
            </p>

            {/* Main Title */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[0.9]">
              Diseñado según
              <br />
              las{" "}
              <span className="text-[#FF8351]">
                necesidades
              </span>
              <br />
              del cliente
            </h2>

            {/* Description */}
            <p className="text-zinc-600 text-lg leading-relaxed mb-8">
              Opplux entiende que cada proyecto tiene sus
              propios desafíos y necesidades, por eso nuestras
              soluciones están diseñadas de manera independiente
              para adaptarse a diferentes características y
              objetivos. Este enfoque está acompañado de soporte
              24/7, directamente con nuestros expertos.
            </p>

            {/* CTA Button - Hero Style */}
            <button className="relative group flex items-center gap-4 bg-white/10 backdrop-blur-md border border-zinc-200 text-black px-8 py-4 rounded-full overflow-hidden transition-all duration-500 hover:border-[#FF8351]">
              {/* Gradient Layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF8351] to-[#922CDC] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

              <div className="relative z-10 flex items-center gap-4">
                <span className="font-bold tracking-wider uppercase text-sm group-hover:text-white transition-colors">
                  Empezar Ahora
                </span>
                <div className="bg-black text-white rounded-full p-1 group-hover:bg-white/20 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </button>

            {/* Additional Trust Elements */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl mb-2">✓</div>
                <p className="text-sm text-zinc-700">
                  Certificaciones internacionales
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">✓</div>
                <p className="text-sm text-zinc-700">
                  Garantía extendida en todos los productos
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1759922378222-47ad736a174d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZW5naW5lZXJzJTIwaW5zcGVjdGlvbiUyMHNhZmV0eXxlbnwxfHx8fDE3NjQ3MDEyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ingenieros industriales en inspección"
                className="w-full h-full object-cover"
              />
              {/* Orange accent overlay on corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF8351]/20 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}