import { Injectable } from "@nestjs/common";
import { CriarUsuarioDto } from "./dto/criarUsuario.dto";

@Injectable()
export class UsuarioService {
  buscar(): string {
    return "Buscar Usuarios";
  }

  salvar(criarUsuarioDto: CriarUsuarioDto): CriarUsuarioDto {
    return criarUsuarioDto;
  }
}
