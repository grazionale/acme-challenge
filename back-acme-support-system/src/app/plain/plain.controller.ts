import { Body, Controller, Get, Post } from "@nestjs/common";
import { Plain } from "./plain.entity";
import { PlainService } from "./plain.service";

@Controller("planos")
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
