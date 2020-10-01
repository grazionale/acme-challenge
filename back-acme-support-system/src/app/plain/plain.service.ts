import { Injectable } from "@nestjs/common";
import { Plain } from "./plain.entity";
import { PlainRepository } from "./plain.repository";

@Injectable()
export class PlainService {
  constructor(private plainRepository: PlainRepository) {}

  async buscar(): Promise<Plain[]> {
    return await this.plainRepository.find();
  }

  async salvar(plain: Plain): Promise<Plain> {
    const user = await this.plainRepository.save(plain);

    return user;
  }
}
