import { Body, Controller, Get, Post } from "@nestjs/common";
import { CriarUsuarioDto } from "./dto/criarUsuario.dto";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller("usuarios")
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  async buscar(): Promise<Usuario[]> {
    return await this.usuarioService.buscar();
  }

  @Post()
  async salvar(@Body() criarUsuarioDto: CriarUsuarioDto): Promise<Usuario> {
    return await this.usuarioService.salvar(criarUsuarioDto);
  }
}
