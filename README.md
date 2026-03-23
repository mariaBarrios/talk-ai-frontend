# PRESS START — Frontend en la Era de la IA

Web de soporte visual para una charla universitaria sobre desarrollo frontend en la era de la IA. Estética retro-arcade / gamer con scroll storytelling.

## Stack

- React 18 + TypeScript (strict)
- Vite
- Framer Motion (animaciones)
- CSS Modules
- prism-react-renderer (syntax highlighting)
- Arquitectura hexagonal (domain / application / infrastructure / ui)

## Ejecutar

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Estructura

```
src/
  domain/          → Modelos y puertos (cero dependencias)
  application/     → Casos de uso
  infrastructure/  → Adaptadores (InMemory, IntersectionObserver, LocalStorage)
  ui/              → React: components, sections, hooks, theme
```

## Build

```bash
npm run build
npm run preview
```
