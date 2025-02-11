# Backend CMPC Test

## Requisitos del Sistema

- Node.js v22.13.1
- npm (incluido con Node.js)

## Instalación

1. Asegúrate de tener la versión correcta de Node.js instalada:
```bash
node --version # Debe mostrar v22.13.1
```

2. Si necesitas instalar o cambiar a la versión correcta de Node.js, puedes usar nvm:
```bash
nvm install v22.13.1
nvm use v22.13.1
```

3. Instala las dependencias del proyecto:
```bash
npm install
```

## Ejecutar el Proyecto

### Ejecucion
```bash
npm run start
```

## Scripts Disponibles

- `npm start` - Inicia la aplicación usando ts-node
- `npm run build` - Compila el proyecto TypeScript
- `npm run format` - Formatea el código usando Prettier
- `npm run start` - Inicia el servidor
- `npm run lint` - Ejecuta el linter y corrige errores automáticamente

## Dependencias Principales

- NestJS ^11.0.1

## Estructura del Proyecto

El proyecto sigue la estructura estándar de NestJS:

```
src/
├── interfaces/       # Interfaces compartidas
├── products/         # Módulo de productos
│   ├── dto/         # Objetos de transferencia de datos
│   ├── products.controller.ts
│   ├── products.module.ts
│   └── products.service.ts
└── main.ts          # Punto de entrada de la aplicación
```

## Documentación API

La documentación de la API está disponible a través de Swagger una vez que inicies el servidor. Puedes acceder a ella en:

```
http://localhost:3000/api
```

## Colecciones de Bruno

El proyecto incluye una carpeta `collections` que contiene archivos de colección para [Bruno](https://www.usebruno.com/), una herramienta de código abierto para probar APIs. Estas colecciones te permiten probar fácilmente todos los endpoints de la API:

```
collections/
├── bruno.json      # Configuración de Bruno
├── getAll.bru      # Obtener todos los productos
├── getOne.bru      # Obtener un producto específico
├── update.bru      # Actualizar un producto
└── delete.bru      # Eliminar un producto
```

Para utilizar estas colecciones, necesitas tener Bruno instalado. Puedes descargar Bruno desde [usebruno.com](https://www.usebruno.com/) y abrir la carpeta `collections` directamente en la aplicación.
