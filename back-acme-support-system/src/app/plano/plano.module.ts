import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PlanoController } from "./plano.controller";
import { Plano } from "./plano.entity";
import { PlanoService } from "./plano.service";

@Module({
  imports: [TypeOrmModule.forFeature([Plano])],
  controllers: [PlanoController],
  providers: [PlanoService],
})
export class PlanoModule {}
