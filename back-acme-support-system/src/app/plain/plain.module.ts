import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PlainController } from "./plain.controller";
import { Plain } from "./plain.entity";
import { PlainService } from "./plain.service";

@Module({
  imports: [TypeOrmModule.forFeature([Plain])],
  controllers: [PlainController],
  providers: [PlainService],
})
export class PlainModule {}
