# 🚀 Proyecto React con Feature-Based Architecture

Este proyecto utiliza **React.js v19** con **React Router v7** y sigue una arquitectura **Feature-Based** para garantizar escalabilidad, mantenibilidad y una clara separación de responsabilidades.

### 📂 Estructura del Proyecto

```bash
src/
├── app/
│   ├── App.tsx            # Configuración principal de la app
│   └── root.tsx           # Rutas principales
├── features/
│   ├── auth/              # Autenticación
│   │   ├── api/           # Servicios API
│   │   ├── components/    # Componentes UI
│   │   ├── pages/         # Páginas de la feature
│   │   └── routes.ts      # Configuración de rutas
│   └── dashboard/         # Dashboard principal
│       ├── api/
│       ├── components/
│       ├── pages/
│       └── routes.ts
├── shared/
│   ├── api/               # Configuración global de API
│   ├── components/        # Componentes reutilizables
│   ├── layouts/           # Layouts globales
│   └── router/            # Utilidades de enrutamiento
└── main.tsx               # Punto de entrada
```

### Beneficios

- Encapsulamiento: Todo el código relacionado está junto.
- Escalabilidad: Fácil añadir nuevas features sin romper lo existente.
- Mantenibilidad: Más fácil de debuggear y testear.

## 🚀 Cómo Empezar

Instalar dependencias:
1- `npm install`
Ejecutar modo desarrollo:
2- `npm run dev`
Construir para producción
3- `npm run build`

## 📌 Reglas de Desarrollo

- Nunca compartir lógica entre features sin moverla a shared/.
- Las páginas solo consumen hooks/services de su propia feature.
- Tipar todo con TypeScript.
- Los tests van dentro de cada feature en una carpeta `__tests__`.
