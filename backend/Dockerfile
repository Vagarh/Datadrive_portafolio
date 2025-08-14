# Usa una imagen oficial de Node.js.
# La versión debe coincidir con la que usas en desarrollo.
FROM node:20-slim

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de definición de dependencias
# El `*` asegura que tanto package.json como package-lock.json se copien
COPY package*.json ./

# Instala las dependencias de producción
RUN npm install --only=production

# Copia el resto del código fuente de la aplicación, incluyendo el CV
COPY . .

# Expone el puerto en el que se ejecuta la aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación
# Usamos `node` directamente sobre el archivo compilado de JavaScript
CMD [ "node", "dist/server.js" ]
