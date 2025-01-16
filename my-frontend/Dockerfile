# Usa una imagen oficial de Node.js
FROM node:18.20.5

# Configura el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto 5173 (puerto por defecto de Vite)
EXPOSE 5173

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev", "--", "--host"]