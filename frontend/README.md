# Frontend CMPC

Este proyecto corresponde al frontend de la aplicación CMPC, desarrollado con React, TypeScript y Vite.

## Tecnologías Principales

- React 19
- TypeScript
- Vite
- Redux (para manejo de estado)
- Shadcn/ui (para componentes de UI)

## Estructura del Proyecto

```
src/
  ├── components/     # Componentes React
  │   ├── atoms/      # Componentes básicos
  │   ├── molecules/  # Componentes compuestos
  │   ├── organisms/  # Componentes complejos
  │   ├── pages/      # Páginas
  │   ├── templates/  # Plantillas
  │   └── ui/         # Componentes de UI (shadcn)
  ├── lib/            # Utilidades y funciones auxiliares
  ├── providers/      # Proveedores de estado (Redux)
  ├── services/       # Servicios de API
  └── types/          # Definiciones de tipos TypeScript
```

## Requisitos

Este proyecto utiliza [nvm](https://github.com/nvm-sh/nvm) para gestionar la versión de Node.js. La versión requerida es `v22.13.1`.

Para configurar la versión correcta de Node.js:

```bash
# Instalar la versión específica de Node.js
nvm install v22.13.1

# Usar la versión del proyecto
nvm use
```

## Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run lint`: Ejecuta el linter
- `npm run preview`: Previsualiza la versión de producción

## Configuración

El proyecto utiliza variables de entorno a través del archivo `.env`. Asegúrate de configurar las siguientes variables:

```
VITE_API_URL=http://localhost:3000
```

## Desarrollo

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm start
```

3. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Arquitectura

El proyecto sigue una arquitectura basada en componentes utilizando Atomic Design, con las siguientes capas:

- **Atoms**: Componentes básicos reutilizables como botones, inputs, etc.
- **Molecules**: Combinaciones de atoms que forman componentes más complejos
- **Organisms**: Secciones completas de la interfaz que agrupan molecules
- **Templates**: Layouts reutilizables para las páginas
- **Pages**: Implementaciones específicas de templates con datos reales

## Estado

La gestión del estado se realiza mediante Redux, con slices organizados por funcionalidad en `/src/providers/store/`.

## API

La comunicación con el backend se gestiona a través de servicios centralizados en `/src/services/`.
