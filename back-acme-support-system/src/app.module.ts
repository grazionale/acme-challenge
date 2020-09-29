import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsuarioModule } from "./app/usuario/usuario.module";
import { PlanoModule } from "./app/plano/plano.module";
import { TypeOrmModule } from "@nestjs/typeorm";

import databasePostgresOptions = require("./database/database-postgres.config");

@Module({
  imports: [
    UsuarioModule,
    PlanoModule,
    TypeOrmModule.forRoot(databasePostgresOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
