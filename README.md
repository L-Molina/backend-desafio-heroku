# Desafio 16 - Loggers, gzip y análisis de performance

## Instalación

1. Forkear y clonar el repo

2. En la raíz del proyecto correr el siguiente comando para instalar todas las dependencias del proyecto

   ```
   npm install
   ```

3. Ejecutar nginx.exe. (esta en la carpeta raiz) 

4. Usar este comando para correr el proyecto: 

   ```
   node app.js xxxx
   ```

Notas: xxxx es el numero de puerto a utilizar. El proyecto estará disponible en http://localhost:xxxx 

En el archivo ".env" puede elegir el metodo para que persistan los datos. Tiene las siguientes opciones:

- PERS=json: Para guardar los datos en archivos JSON (viene asignada por default)
- PERS=firebase: Para guardar los datos en una Base de Datos de Firebase
- PERS=mongodb: Para guardar datos con un MongoDb local
- PERS=memoria: Para guardar los datos en un array