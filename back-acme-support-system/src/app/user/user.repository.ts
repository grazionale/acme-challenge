import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByUsername(username: string) {
    return this.createQueryBuilder("user")
      .where("user.username = :username", { username })
      .getOne();
  }
}
