import { TypeOrmModuleOptions } from "@nestjs/typeorm";

import "../bootstrap";

const databasePostgresOptions: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  port: 5435,
  username: "docker",
  password: "docker",
  database: "acme",
  synchronize: false,
  logging: ["query", "error"],
  entities: [__dirname + "/../*/.entity{.ts,.js}"],
  migrations: [__dirname + "/migrations/*.ts"],
  cli: {
    migrationsDir: "src/database/migrations",
  },
};

export = databasePostgresOptions;
