import { Controller, Get, Post } from "@nestjs/common";
import { PlanoService } from "./plano.service";

@Controller("planos")
export class PlanoController {
  constructor(private readonly planoService: PlanoService) {}

  @Get()
  buscar(): string {
    return this.planoService.buscar();
  }
}
