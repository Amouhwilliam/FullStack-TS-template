# App Template backend
## Description

This project is a node.js backend project build with [NestJs](https://github.com/nestjs/nest),
[MongoDB](https://www.mongodb.com/) and [Docker](https://www.docker.com/)


## Installation and starting the server

```bash
$ cp .env.dev .env
```

```bash
$ docker-compose up
```

## Stopping the server

```bash
$ docker-compose down
```

## Specific running of the app

### Connect to the api container

```bash
$ docker exec -it api-container /bin/bash
```

```bash
# development
$ yarn start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Swagger docs
### Once everything is started, the api docs can be accessed at:
```
http://api.app.localhost/api
```

## Mongo Express
### You can visualize and change database(appdb) records at:
```
http://mongo-ui.app.localhost
```
## MongoDB
### :
``MongoDB runs at:
http://mongo-db.app.localhost
```

## Seeding

### Connect to the api-container (the command should be executed inside the container)

```bash
$ docker exec -it api-container /bin/bash
```
### Drop the database

```bash
$ yarn db:drop
``` 
### Run all the seeds 

```bash
$ yarn seed
```

## Test
### Connect to the api container

```bash
$ docker exec -it api-container /bin/bash
```

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

### Exit the api container

```bash
$ exit
```
