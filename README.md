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

```bash
git clone https://github.com/wallshapel/prueba-joonik.git
cd prueba-joonik

Backend (Laravel) 🐘
Ve al directorio del backend:

bash
Copiar
Editar
cd my-api-project
Instala las dependencias con Composer:

bash
Copiar
Editar
composer install
Copia el archivo de ejemplo .env y configúralo:

bash
Copiar
Editar
cp .env.example .env
Genera la clave de la aplicación:

bash
Copiar
Editar
php artisan key:generate
Configura la base de datos en el archivo .env.

Ejecuta las migraciones:

bash
Copiar
Editar
php artisan migrate
Frontend (React) ⚛️
Ve al directorio del frontend:

bash
Copiar
Editar
cd ../my-frontend
Instala las dependencias con npm:

bash
Copiar
Editar
npm install
Ejecutar el proyecto ▶️
Backend 🖥️
Ve al directorio del backend:

bash
Copiar
Editar
cd my-api-project
Inicia el servidor de desarrollo de Laravel:

bash
Copiar
Editar
php artisan serve
El backend estará disponible en http://127.0.0.1:8000.

Frontend 🌐
Ve al directorio del frontend:

bash
Copiar
Editar
cd ../my-frontend
Inicia el servidor de desarrollo:

bash
Copiar
Editar
npm run dev
El frontend estará disponible en la URL que se muestra en la terminal.

Ejecutar pruebas 🧪
Backend 🐘
Ve al directorio del backend:

bash
Copiar
Editar
cd my-api-project
Ejecuta las pruebas:

bash
Copiar
Editar
php artisan test
Frontend ⚛️
Ve al directorio del frontend:

bash
Copiar
Editar
cd ../my-frontend
Ejecuta las pruebas:

bash
Copiar
Editar
npm test
Estructura del proyecto 📂
plaintext
Copiar
Editar
prueba-joonik/
├── my-api-project/   # Código del backend (Laravel)
└── my-frontend/      # Código del frontend (React)
Licencia 📜
Este proyecto es de uso interno para la prueba técnica de Joonik.

markdown
Copiar
Editar

### Notas:
- Todo está dentro de un solo bloque de código Markdown.
- Usé contenedores de código (bloques con ` ```bash `) para todos los comandos de terminal.
- Se agregaron líneas divisorias `---` para organizar las secciones.

Ahora puedes copiar y pegar este bloque directamente en tu archivo `README.md`. 😊