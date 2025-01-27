# Usamos una imagen base de PHP 8.3 con FPM
FROM php:8.3-fpm

# Instalar dependencias necesarias para Laravel y SQLite
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    sqlite3 \
    libsqlite3-dev \
    vim \
    curl \
    && docker-php-ext-install pdo pdo_sqlite

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Crear directorio de la aplicación
WORKDIR /var/www

# Copiar el código de la aplicación al contenedor
COPY . .

# Instalar dependencias de Laravel
RUN composer install --no-dev --optimize-autoloader

# Crear archivo .env temporal y generar clave de aplicación
RUN touch .env && php artisan key:generate && rm .env

# Asignar permisos para Laravel
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Exponer puerto
EXPOSE 9000

# Comando por defecto de PHP-FPM
CMD ["php-fpm"]
