import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PlainModule } from "./app/plain/plain.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./app/user/user.module";

import databasePostgresOptions = require("./database/database-postgres.config");
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    UserModule,
    PlainModule,
    AuthModule,
    TypeOrmModule.forRoot(databasePostgresOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
