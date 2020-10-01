import { Controller, Get, Post } from "@nestjs/common";
import { PlainService } from "./plain.service";

@Controller("planos")
export class PlainController {
  constructor(private readonly plainService: PlainService) {}

  @Get()
  buscar(): string {
    return this.plainService.buscar();
  }
}
