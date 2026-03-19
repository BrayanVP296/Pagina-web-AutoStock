# Usamos una imagen de nginx súper ligera
FROM nginx:alpine

# Copiamos todo el contenido de la carpeta actual a la carpeta que sirve nginx
COPY . /usr/share/nginx/html

# Exponemos el puerto 80 del contenedor
EXPOSE 80

# Iniciamos nginx
CMD ["nginx", "-g", "daemon off;"]
