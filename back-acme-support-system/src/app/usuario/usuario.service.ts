import { Injectable } from "@nestjs/common";
import { CriarUsuarioDto } from "./dto/criarUsuario.dto";
import { Usuario } from "./usuario.entity";
import { UsuarioRepository } from "./usuario.repository";

@Injectable()
export class UsuarioService {
  constructor(private usuarioRepository: UsuarioRepository) {}

  async buscar(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async salvar(criarUsuarioDto: CriarUsuarioDto): Promise<Usuario> {
    const user = await this.usuarioRepository.save(criarUsuarioDto);

    return user;
  }
}
