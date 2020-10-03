import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { Plain } from "./plain.entity";
import { PlainService } from "./plain.service";

@Controller("plains")
@UseGuards(JwtAuthGuard)
export class PlainController {
  constructor(private readonly plainService: PlainService) {}

  @Get()
  async buscar(): Promise<Plain[]> {
    return await this.plainService.buscar();
  }

  @Post()
  async salvar(@Body() plain: Plain): Promise<Plain> {
    return await this.plainService.salvar(plain);
  }
}
