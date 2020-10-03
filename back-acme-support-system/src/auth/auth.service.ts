import { BadRequestException, Injectable } from "@nestjs/common";
import { UserService } from "src/app/user/user.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService) {}

  public async validateUser(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);
    if (await this.verifyPassword(password, user.password)) {
      user.password = undefined;
      return user;
    }
    return null;
  }

  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string
  ) {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  }
}
