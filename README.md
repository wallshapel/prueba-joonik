# Prueba Joonik 🚀

Este proyecto combina un backend desarrollado en **Laravel** y un frontend desarrollado en **React**. Está diseñado para gestionar ubicaciones con una interfaz moderna y un backend robusto.

---

## Requisitos previos ✅

Antes de empezar, asegúrate de tener instalado lo siguiente:

- **PHP**: 8.3.15 o superior
- **Laravel**: 11.38.2
- **Node.js**: 18.20.5
- **Composer**: 2.8.4
- **Git**: Para clonar este repositorio

---

## Instalación 🛠️

Clona el repositorio y sigue los pasos para instalar y configurar el backend y el frontend.
~~~
git clone https://github.com/wallshapel/prueba-joonik.git
cd prueba-joonik
~~~

## Backend (Laravel) 🐘
1. Ve al directorio del backend:
~~~
cd my-api-project
~~~
2. Instala las dependencias con Composer:
~~~
composer install
~~~
3. Copia el archivo de ejemplo .env y configúralo:
~~~
cp .env.example .env
~~~
4. Genera la clave de la aplicación:
~~~
php artisan key:generate
~~~
5. Configura la base de datos en el archivo .env.
6. Ejecuta las migraciones:
~~~
php artisan migrate
~~~

## Frontend (React) ⚛️
1. Ve al directorio del frontend:
~~~
cd ../my-frontend
~~~
2.Instala las dependencias con npm:
~~~
npm install
~~~

---

## Ejecutar el proyecto ▶️

## Backend 🖥️
1. Ve al directorio del backend:
~~~
cd my-api-project
~~~
2. Inicia el servidor de desarrollo de Laravel:
~~~
php artisan serve
~~~
3. El backend estará disponible en http://127.0.0.1:8000.

## Frontend 🌐
1. Ve al directorio del frontend:
~~~
cd ../my-frontend
~~~
2. Inicia el servidor de desarrollo:
~~~
npm run dev
~~~
3. El frontend estará disponible en la URL que se muestra en la terminal.

---

## Opcional: Usar Docker 🐳
Puedes ejecutar tanto el backend como el frontend utilizando Docker para simplificar la configuración:

## Backend
1. Ve al directorio del backend:
~~~
cd my-api-project
~~~
2. Construye y levanta los contenedores:
~~~
docker-compose up --build
~~~
3. El backend estará disponible en http://localhost:8000

## Frontend
1. Ve al directorio del frontend:
~~~
cd ../my-frontend
~~~
2. Construye y levanta los contenedores:
~~~
docker-compose up --build
~~~
3. El frontend estará disponible en http://localhost:3000

---

## Ejecutar pruebas 🧪

## Backend 🐘
1. Ve al directorio del backend:
~~~
cd my-api-project
~~~
2. Ejecuta las pruebas:
~~~
php artisan test
~~~

## Frontend ⚛️
1. Ve al directorio del frontend:
~~~
cd ../my-frontend
~~~
2. Ejecuta las pruebas:
~~~
npm test
~~~

---

## Estructura del proyecto 📂
~~~
prueba-joonik/
├── my-api-project/   # Código del backend (Laravel)
└── my-frontend/      # Código del frontend (React)
~~~

---

## Licencia 📜

Este proyecto es de uso interno para la prueba técnica de Joonik.