import { Injectable } from "@nestjs/common";
import { Plain } from "./plain.entity";
import { PlainRepository } from "./plain.repository";

@Injectable()
export class PlainService {
  constructor(private plainRepository: PlainRepository) {}

  async find(): Promise<Plain[]> {
    return await this.plainRepository.find();
  }

  async save(plain: Plain): Promise<Plain> {
    const user = await this.plainRepository.save(plain);

    return user;
  }
}
