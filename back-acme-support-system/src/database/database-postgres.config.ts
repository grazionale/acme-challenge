import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Plain } from "src/app/plain/plain.entity";
import { User } from "src/app/user/user.entity";

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
  entities: [User, Plain],
  migrations: [__dirname + "/migrations/*.ts"],
  cli: {
    migrationsDir: "src/database/migrations",
  },
};

export = databasePostgresOptions;
