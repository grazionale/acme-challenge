import { Module } from "@nestjs/common";
import { PlanoController } from "./plano.controller";
import { PlanoService } from "./plano.service";

@Module({
  imports: [],
  controllers: [PlanoController],
  providers: [PlanoService],
})
export class PlanoModule {}
