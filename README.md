# TC3005B

### Miembros:
- Sofi
- Abrahamas
- Mafer
- Maziozare
- Tobs

### Falta:
- Crear rutas y vistas de Ubicaciones y Episodios
- Implementar el Sign Up
***
## Dotenv
En caso de querer utilizar tus propias llaves para la base de datos:
- En el código se encuentran dos archivos llamados ".env", en [la raíz del directorio](https://github.com/mfem442/TC3005B/blob/main/.env) y en [/web-nodejs](https://github.com/mfem442/TC3005B/blob/main/web-nodejs/.env)
- Los archivos incluyen unas variables para el nombre de la base de datos, usuario, host, contraseña y puerto
```
MYSQL_DATABASE = "database"
MYSQL_USER = "root"
MYSQL_HOST = "localhost"
MYSQL_PASSWORD = "password"
PORT = 3000
```
- Remplaza los valores por tus propias llaves
***
## Ejecución:
- Corre el siguiente comando:
```
docker-compose up
```
- Visualízalo en `http://localhost:3000/`
