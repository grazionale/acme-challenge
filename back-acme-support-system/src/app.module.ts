import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsuarioModule } from "./app/usuario/usuario.module";
import { PlainModule } from "./app/plain/plain.module";
import { TypeOrmModule } from "@nestjs/typeorm";

import databasePostgresOptions = require("./database/database-postgres.config");

@Module({
  imports: [
    UsuarioModule,
    PlainModule,
    TypeOrmModule.forRoot(databasePostgresOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
