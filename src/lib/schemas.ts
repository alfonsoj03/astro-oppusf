import { z } from "zod";

// Regex for name validation: letters, accents, ñ, spaces, hyphens, apostrophes
export const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s\-\']+$/;

export const quoteSchema = z.object({
    name: z.string()
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(100, "El nombre no puede exceder los 100 caracteres")
        .regex(nameRegex, "El nombre solo puede contener letras, espacios, guiones y apóstrofes"),
    email: z.string()
        .min(5, "El email debe tener al menos 5 caracteres")
        .max(100, "El email no puede exceder los 100 caracteres")
        .email("Formato de email inválido")
        .refine(val => !val.includes(" "), "El email no puede contener espacios")
        .refine(val => {
            const parts = val.split("@");
            if (parts.length !== 2) return false;
            const [user, domain] = parts;
            if (user.length < 1) return false;
            if (domain.startsWith(".") || domain.endsWith(".")) return false;
            const domainParts = domain.split(".");
            if (domainParts.length < 2) return false;
            if (domainParts[0].length < 2) return false;
            if (domainParts[domainParts.length - 1].length < 2) return false;
            return true;
        }, "Formato de email inválido (verifique puntos y dominio)"),
    country: z.string().min(1, "Selecciona un país"),
    phone: z.string()
        .transform(val => val.replace(/\s/g, ""))
        .refine(val => {
            const clean = val.startsWith("+57") ? val.slice(3) : val;
            return /^\d{10}$/.test(clean);
        }, "El teléfono debe tener exactamente 10 dígitos"),
    company: z.string().min(2, "El nombre de la empresa es obligatorio"),
    message: z.string()
        .min(10, "El mensaje debe tener al menos 10 caracteres")
        .max(400, "El mensaje no puede exceder los 400 caracteres"),
    department: z.string().optional() // Honeypot
});
