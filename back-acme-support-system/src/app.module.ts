import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsuarioModule } from "./app/usuario/usuario.module";
import { PlanoModule } from "./app/plano/plano.module";

@Module({
  imports: [UsuarioModule, PlanoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
