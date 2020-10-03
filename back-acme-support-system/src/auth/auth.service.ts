import { BadRequestException, Injectable } from "@nestjs/common";
import { UserService } from "src/app/user/user.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private jwtService: JwtService
  ) {}

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

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
