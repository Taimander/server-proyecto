# Proyecto 3er parcial

Un servidor web creado con NodeJS y express de una empresa automotríz.

## Cómo utilizar

Para utilizar el servidor se puede abrir de las siguientes maneras:

### Corriendo el servidor localmente

Para utilizar el servidor localmente, es necesario tener instalado git y NodeJS.

1. Clonaremos el proyecto: 
`git clone <url del proyecto>`

2. Accederemos a la carpeta del proyecto: 
`cd server-proyecto`

3. Corremos el servidor: 
`node app.js`

4. Abrimos la página del servidor (por defecto, el puerto es 8888). 
Abriremos [localhost:8888](http://localhost:8888)

### Utilizando la imágen de Docker

Para utilizar el servidor con la imágen de Docker, es necesario tener instalado Docker

1. Descargamos e iniciamos el contenedor del servidor con el siguiente comando: 
`docker run -p8888:8888 -n server-proyecto Taimander/server-proyecto:latest`

2. Abrimos la página del servidor (por defecto, el puerto es 8888). 
Abriremos [localhost:8888](http://localhost:8888)

3. Para parar el servidor, utilizaremos el siguiente comando: 
`docker stop server-proyecto`

## Herramientas utilizadas

1. [NodeJS](https://nodejs.org)
2. HTML
3. CSS
4. JavaScript

## Integrantes

- Jocelyn Soto Ávila [JocelynSota](https://github.com/JocelynSota)
- Leonardo Trevizo Herrera
- Jair Alejandtro Gaytan Espindola
- Samuel Sánchez Tarango [Taimander](https://github.com/Taimander)
