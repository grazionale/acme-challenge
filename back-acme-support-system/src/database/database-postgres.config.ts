import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Plano } from "src/app/plano/plano.entity";
import { Usuario } from "src/app/usuario/usuario.entity";

import "../bootstrap";

const databasePostgresOptions: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5435,
  username: "docker",
  password: "docker",
  database: "acme",
  synchronize: true,
  logging: ["query", "error"],
  entities: [Usuario, Plano],
  migrations: [__dirname + "/migrations/*.ts"],
  cli: {
    migrationsDir: "src/database/migrations",
  },
};

export = databasePostgresOptions;
