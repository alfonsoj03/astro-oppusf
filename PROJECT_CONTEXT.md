# Contexto del Proyecto

## Stack Tecnológico
- **Framework**: Astro
- **Estilos**: Tailwind
- **Iconos**: Lucide
- **Animaciones**: Tailwind, observers, css

## Estructura de Carpetas

```
src/
├── components/
│   ├── ui/              # Componentes base reutilizables
├── pages/               # Páginas Astro
├── styles/              # Estilos globales
└── utils/               # Funciones utilitarias
```

## Componentes Existentes Importantes

### Secciones (Molecules/Organisms)
Se encuentran en la raíz de components:
- `Hero.astro` - Hero principal, tiene funcionalidad adicional en `HeroInteractive.tsx`
- `Features.astro` - Sección de características del servicio 
- `Projects.astro` - Casos de éxito de la empresa
- `Solutions.astro` - Categorías de los productos vendidos por la empresa
- `ScalableFeatures.astro` - Sección de texto con íconos sobre el enfoque del servicio
- `TailoredSolutions.astro` - Seccción de texto con párrafos sobre la forma de trabajar de la empresa y experiencia
- `Categories.astro` - Sección con botones para las principales secciones de la página