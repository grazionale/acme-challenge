import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Plain } from "src/app/plain/plain.entity";
import { User } from "src/app/user/user.entity";

import "../bootstrap";

const databasePostgresOptions: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
  synchronize: true,
  logging: ["query", "error"],
  entities: [User, Plain],
  migrations: [__dirname + "/migrations/*.ts"],
  cli: {
    migrationsDir: "src/database/migrations",
  },
};

export = databasePostgresOptions;
