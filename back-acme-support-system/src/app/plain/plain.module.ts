import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PlainController } from "./plain.controller";
import { PlainService } from "./plain.service";
import { PlainRepository } from "./plain.repository";

@Module({
  imports: [TypeOrmModule.forFeature([PlainRepository])],
  controllers: [PlainController],
  providers: [PlainService],
})
export class PlainModule {}
