import { EntityRepository, Repository } from "typeorm";
import { Plain } from "./plain.entity";

@EntityRepository(Plain)
export class PlainRepository extends Repository<Plain> {}
