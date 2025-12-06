import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, type MouseEvent } from "react";

export function HeroInteractive() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Physics configuration
    const springConfig = {
        stiffness: 600,
        damping: 40,
        mass: 0.5,
    };

    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Initialize in the center
        if (typeof window !== "undefined") {
            mouseX.set(window.innerWidth / 2);
            mouseY.set(window.innerHeight / 2);

            const handleMouseMove = (e: globalThis.MouseEvent) => {
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;

                // Constrain movement to 60% of the screen, centered
                // Map [0, width] -> [0.2*width, 0.8*width]
                const constrainedX = innerWidth * 0.2 + (clientX / innerWidth) * (innerWidth * 0.6);
                const constrainedY = innerHeight * 0.2 + (clientY / innerHeight) * (innerHeight * 0.6);

                mouseX.set(constrainedX);
                mouseY.set(constrainedY);
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Interactive Brand Colors Glow Effect */}
            <motion.div
                className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#FF8351] to-[#922CDC] rounded-full blur-[150px] opacity-15"
                style={{
                    left: 0,
                    top: 0,
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </div>
    );
}
