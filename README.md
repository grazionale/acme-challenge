# Acme Challenge - NestJS - Angular - Docker

Aplicação construída com containers utlizando Docker Compose, NestJS, Angular e PosgresSQL

### Inicialização com containers

    docker-compose up --build

Este processo irá criar um container com o backend em NestJS conectado a um banco de dados Postgres e um frontend em Angular.

---

### Inicialização sem containers

####Requisitos

> Banco de dados Postgres

    docker container run -d -p 5435:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=acme  postgres:12

#### Execução NestJS

    cd back-acme-support-system
    yarn install
    yarn start:dev

#### Execução Angular

    cd front-acme-support-system
    yarn install
    yarn start
