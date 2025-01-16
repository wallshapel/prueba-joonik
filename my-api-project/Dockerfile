# Usa una imagen oficial de PHP con Composer y soporte para Laravel
FROM php:8.3-fpm

# Instala extensiones de PHP necesarias para Laravel
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    curl \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Instala Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Configura el directorio de trabajo
WORKDIR /var/www

# Copia los archivos del proyecto
COPY . /var/www

# Establecer permisos de escritura en los directorios necesarios
RUN chmod -R 777 /var/www/storage /var/www/bootstrap/cache

# Asegurar que el propietario sea www-data
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Expone el puerto 9000 (por defecto de PHP-FPM)
EXPOSE 9000

# Define el comando para iniciar PHP-FPM
CMD ["php-fpm"]
