#!/bin/bash

echo "==========================="
echo " Laravel Project Setup"
echo "==========================="

echo "Step 1: Installing dependencies..."
composer install

echo "Step 2: Ensuring .env file exists and has content..."
if [ ! -f .env ]; then
    echo ".env file not found. Creating it from .env.example..."
    cp .env.example .env
elif [ ! -s .env ]; then
    echo ".env file exists but is empty. Overwriting it with .env.example..."
    cp .env.example .env
else
    echo ".env file exists and has content. Skipping creation."
fi

echo "Step 3: Generating application key..."
php artisan key:generate

echo "Step 4: Running migrations..."
php artisan migrate

echo "==========================="
echo " Setup Complete!"
echo " Run 'php artisan serve' to start the application."
echo "==========================="
