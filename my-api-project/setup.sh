#!/bin/bash

echo "==========================="
echo " Laravel Project Setup"
echo "==========================="

echo "Step 1: Installing dependencies..."
composer install

echo "Step 2: Generating application key..."
php artisan key:generate

echo "Step 3: Running migrations..."
php artisan migrate

echo "Step 4: Setting permissions for storage and cache..."
chown -R $(whoami):$(whoami) storage bootstrap/cache
chmod -R 775 storage bootstrap/cache

echo "Step 5: Clearing and caching configurations..."
php artisan config:clear
php artisan cache:clear
php artisan config:cache

echo "==========================="
echo " Setup Complete!"
echo " Run 'php artisan serve' to start the application."
echo "==========================="
