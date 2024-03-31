# Hanpoom Warehouse Management System Examination

This Repository are for Hanpoom Warehouse Management System examination. Feel free to explore the codebase of this project.

Thanks :)

### List of needed dependencies to be installed in your machine for you to able to run this project properly.

<b>Required:</b>

- Node.js LTS 20 - Used in this project during development.

<b>Optional:</b>

- Docker- For database, backend setup and containerization
- Docker Compose - For automation of local infra setup.

### Steps for running the project properly by category.

---

<b>A. running using provided docker and docker compose.</b>

1. Make sure you have optional and required dependencies working correctly before you proceed and also follow 1 by 1 to prevent issues.

2. Create .env file inside the project root directory and add this value inside and save it.

```
NODE_ENV=development

MYSQLDB_USER=root
MYSQLDB_ROOT_PASSWORD=<your-database-password>
MYSQLDB_DATABASE=<your-database-name>
MYSQLDB_LOCAL_PORT=<your-local/external-mysql-port>
MYSQLDB_DOCKER_PORT=<your-docker/internal-mysql-port>

NODE_LOCAL_PORT=<your-local/external-backend-port>
NODE_DOCKER_PORT=<your-docker/internal-backend-port>
```

3. Change directory to your project root folder through terminal and execute this command `docker compose up -d` to build and containerized the mysql database server and backend application. make sure that this is the result.

![alt text](/screenshots/docker-copose-up.png)

4. Restore mysql database backup inside of `<project-root-directory>/database/init.sql` using your preferred way like using GUI or CLI and make sure you use the database settings resided in your `.env` file for you be able to connect to mysql client through CLI or GUI

5. Test the api by using curl or postman by hitting this endpoint `http://localhost:<NODE_LOCAL_PORT>/api/v1/picking-slips`.

6. OPTIONAL - if you want to remove any containers volume or image created by docker compose command just execute this in your project root folder terminal `docker compose down --rmi all`. make sure the command output is like this.

## ![alt text](/screenshots/docker-compose-down.png)

<b>B. Running without docker or docker compose file</b>

1. Make sure you have required dependencies working correctly before you proceed and also follow 1 by 1 to prevent issues.

2. Create .env file inside the project root directory and add this value inside and save it.

```
NODE_ENV=development

PORT=<your-backend-application-port>

DB_HOST=<your-mysql-database-hostname>
DB_USER=root
DB_PASSWORD=<your-mysql-database-password>
DB_NAME=<your-mysql-database-name>
DB_PORT=<your-mysql-database-port>

```

3. Change directory to your project root folder through terminal and execute this command `npm install` to install needed dependencies for your project.

4. Restore mysql database backup inside of `<project-root-directory>/database/init.sql` using your preferred way like using GUI or CLI and make sure you use the database settings resided in your `.env` file for you be able to connect to mysql client through CLI or GUI.

5. Run the project using `npm run dev` or `npm run debug`.

6. Test the api by using curl or postman by hitting this endpoint `http://localhost:<PORT>/api/v1/picking-slips`.

## That's It! I hope this project will enable me to pass the examination.
