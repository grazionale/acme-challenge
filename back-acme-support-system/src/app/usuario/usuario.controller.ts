import { Body, Controller, Get, Post } from "@nestjs/common";
import { CriarUsuarioDto } from "./dto/criarUsuario.dto";
import { UsuarioService } from "./usuario.service";

@Controller("usuarios")
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  buscar(): string {
    return this.usuarioService.buscar();
  }

  @Post()
  salvar(@Body() criarUsuarioDto: CriarUsuarioDto): CriarUsuarioDto {
    return this.usuarioService.salvar(criarUsuarioDto);
  }
}
