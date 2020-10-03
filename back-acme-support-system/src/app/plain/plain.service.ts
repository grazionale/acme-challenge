import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Plain } from "./plain.entity";

@Injectable()
export class PlainService {
  constructor(
    @InjectRepository(Plain)
    private plainRepository: Repository<Plain>
  ) {}

  async find(): Promise<Plain[]> {
    return await this.plainRepository.find();
  }

  async save(plain: Plain): Promise<Plain> {
    const user = await this.plainRepository.save(plain);

    return user;
  }
}
