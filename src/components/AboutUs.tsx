import { motion } from "motion/react";

const coreValues = [
    {
        number: 1,
        title: "Innovación constante",
        description: "Nos mantenemos a la vanguardia de la tecnología LED, investigando y desarrollando soluciones que superen las expectativas del mercado."
    },
    {
        number: 2,
        title: "Calidad sin compromisos",
        description: "Cada luminaria pasa por rigurosos controles de calidad. No aceptamos menos que la excelencia en cada producto que entregamos."
    },
    {
        number: 3,
        title: "Sostenibilidad activa",
        description: "Diseñamos pensando en el futuro del planeta. Eficiencia energética y materiales sostenibles son el corazón de nuestro desarrollo."
    },
    {
        number: 4,
        title: "Cercanía con el cliente",
        description: "Tu proyecto es nuestro proyecto. Trabajamos codo a codo contigo para entender tus necesidades y superarlas."
    },
    {
        number: 5,
        title: "Transparencia total",
        description: "Comunicación clara, precios justos y procesos transparentes. Lo que ves es lo que obtienes, sin sorpresas."
    },
    {
        number: 6,
        title: "Soluciones personalizadas",
        description: "No hay dos proyectos iguales. Adaptamos nuestra tecnología a tus necesidades específicas con flexibilidad total."
    },
    {
        number: 7,
        title: "Compromiso a largo plazo",
        description: "No terminamos con la instalación. Estamos contigo con soporte, garantías extensas y un compromiso que perdura en el tiempo."
    }
];

export function AboutUs() {
    return (
        <section className="py-32 bg-white text-zinc-950">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
                            Lo que nos hace <span className="italic">diferentes</span>
                        </h2>
                        <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-zinc-700 leading-relaxed">
                            <p>
                                En Opplux, combinamos innovación tecnológica con un profundo
                                compromiso por la sostenibilidad. Desde nuestros inicios, hemos
                                trabajado para transformar la manera en que las empresas e
                                instituciones entienden la iluminación profesional.
                            </p>
                            <p>
                                No solo ofrecemos productos de alta calidad, sino soluciones
                                integrales que se adaptan a las necesidades específicas de cada
                                proyecto. Nuestro equipo de ingenieros y especialistas trabaja
                                día a día para garantizar que cada luminaria cumpla con los más
                                altos estándares de eficiencia energética y durabilidad.
                            </p>
                            <p>
                                Creemos que la iluminación va más allá de proporcionar luz:
                                crea ambientes, mejora la productividad y contribuye al
                                bienestar de las personas. Por eso, cada diseño que desarrollamos
                                está pensado para marcar la diferencia en el mundo real,
                                acompañándote en cada paso del camino con soporte técnico
                                personalizado y un compromiso que perdura en el tiempo.
                            </p>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1758873268851-feebbfb1d037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjUzODU2OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                            alt="Equipo Opplux"
                            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                        />
                        {/* Optional overlay for better contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                    </motion.div>
                </div>
            </div>
            {/* Animated background gradient */}
            <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                    background: [
                        "radial-gradient(circle at 20% 50%, rgba(255, 131, 81, 0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 50%, rgba(255, 131, 81, 0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 50% 80%, rgba(255, 131, 81, 0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 50% 20%, rgba(255, 131, 81, 0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 50%, rgba(255, 131, 81, 0.1) 0%, transparent 50%)",
                    ]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Subtle floating orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF8351]/5 rounded-full blur-3xl"
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF8351]/5 rounded-full blur-3xl"
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-20"
                    >
                        <p className="text-[#FF8351] tracking-[0.2em] uppercase text-sm mb-6">
                            NUESTROS VALORES
                        </p>
                        <h2 className="text-4xl md:text-6xl leading-tight">
                            Lo que <span className="text-[#FF8351]">más importa</span> para nosotros.
                        </h2>
                    </motion.div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={value.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-6"
                            >
                                {/* Number Circle */}
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full border-2 border-[#FF8351]/30 flex items-center justify-center text-[#FF8351]">
                                        {value.number}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl mb-3 text-white">
                                        {value.title}
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
}